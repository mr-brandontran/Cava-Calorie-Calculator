import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ChipotleContextBar from './components/ChipotleContextBar';
import CategoryNav from './components/CategoryNav';
import CategorySection from './components/CategorySection';
import StickyBottomBar from './components/StickyBottomBar';
import Footer from './components/Footer';
import DietaryModal from './components/DietaryModal';
import NutritionFactsModal from './components/NutritionFactsModal';
import { MENU_CATEGORIES } from './data/cavaMenuData';

export default function App() {
  const [selectedItems, setSelectedItems] = useState({});
  
  // Modals
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false);
  
  // Dietary Preferences Filter state
  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
    soyFree: false,
    eggFree: false,
    sesameFree: false,
  });

  // Track active section for category nav
  const [activeSection, setActiveSection] = useState('bases');

  // Scroll spy effect to highlight category nav and active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const category of MENU_CATEGORIES) {
        const el = document.getElementById(category.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle item selection
  const handleToggleItem = (item, category) => {
    setSelectedItems((prev) => {
      const next = { ...prev };

      if (next[item.id]) {
        // Deselect
        delete next[item.id];
        return next;
      }

      // Check category constraints
      if (category.id === 'bases') {
        const currentBases = Object.values(next).filter((i) => i.categoryId === 'bases');
        if (currentBases.length >= 2) {
          delete next[currentBases[0].item.id];
        }
        // If selecting a 2nd base, default both to half portion (split)
        const updatedBases = Object.values(next).filter((i) => i.categoryId === 'bases');
        if (updatedBases.length === 1) {
          next[updatedBases[0].item.id].portion = 'half';
          next[item.id] = { categoryId: category.id, item, portion: 'half', quantity: 1 };
          return next;
        }
      }

      if (category.id === 'dips') {
        const currentDips = Object.values(next).filter((i) => i.categoryId === 'dips');
        if (currentDips.length >= 3) {
          delete next[currentDips[0].item.id];
        }
      }

      // Default selection
      next[item.id] = {
        categoryId: category.id,
        item,
        portion: 'regular',
        quantity: 1
      };

      return next;
    });
  };

  const handleUpdatePortion = (itemId, portion) => {
    setSelectedItems((prev) => {
      if (!prev[itemId]) return prev;
      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          portion
        }
      };
    });
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    setSelectedItems((prev) => {
      if (!prev[itemId]) return prev;
      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          quantity
        }
      };
    });
  };

  const handleReset = () => {
    setSelectedItems({});
  };

  const handleToggleFilter = (filterKey) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      vegan: false,
      vegetarian: false,
      glutenFree: false,
      dairyFree: false,
      soyFree: false,
      eggFree: false,
      sesameFree: false,
    });
  };

  const handleSelectCategory = (categoryId) => {
    setActiveSection(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Calculate live nutrition totals with full, half, regular, extra, double, light, side
  const totals = useMemo(() => {
    const initial = {
      cal: 0,
      calFromFat: 0,
      totalFat: 0,
      satFat: 0,
      transFat: 0,
      chol: 0,
      sodium: 0,
      carb: 0,
      fiber: 0,
      sugar: 0,
      protein: 0
    };

    Object.values(selectedItems).forEach(({ item, portion, quantity = 1, categoryId }) => {
      let multiplier = 1;
      if (categoryId === 'sides' || categoryId === 'drinks' || categoryId === 'kids') {
        multiplier = quantity;
      } else if (portion === 'double' || portion === 'extra') {
        multiplier = 2;
      } else if (portion === 'light' || portion === 'half') {
        multiplier = 0.5;
      } else if (portion === 'side') {
        multiplier = 1;
      }

      initial.cal += Math.round(item.cal * multiplier);
      initial.calFromFat += Math.round((item.calFromFat || 0) * multiplier);
      initial.totalFat += item.totalFat * multiplier;
      initial.satFat += item.satFat * multiplier;
      initial.transFat += (item.transFat || 0) * multiplier;
      initial.chol += Math.round(item.chol * multiplier);
      initial.sodium += Math.round(item.sodium * multiplier);
      initial.carb += item.carb * multiplier;
      initial.fiber += item.fiber * multiplier;
      initial.sugar += item.sugar * multiplier;
      initial.protein += item.protein * multiplier;
    });

    return {
      cal: Math.round(initial.cal),
      calFromFat: Math.round(initial.calFromFat),
      totalFat: Math.round(initial.totalFat * 10) / 10,
      satFat: Math.round(initial.satFat * 10) / 10,
      transFat: Math.round(initial.transFat * 10) / 10,
      chol: Math.round(initial.chol),
      sodium: Math.round(initial.sodium),
      carb: Math.round(initial.carb * 10) / 10,
      fiber: Math.round(initial.fiber * 10) / 10,
      sugar: Math.round(initial.sugar * 10) / 10,
      protein: Math.round(initial.protein * 10) / 10
    };
  }, [selectedItems]);

  const selectedItemsList = useMemo(() => {
    return Object.values(selectedItems).map(({ item, portion, quantity }) => {
      let multiplier = 1;
      let portionLabel = '';
      if (portion === 'double' || portion === 'extra') {
        multiplier = 2;
        portionLabel = portion === 'double' ? 'Double' : 'Extra';
      } else if (portion === 'light') {
        multiplier = 0.5;
        portionLabel = 'Light';
      } else if (portion === 'half') {
        multiplier = 0.5;
        portionLabel = 'Half Portion';
      } else if (portion === 'side') {
        portionLabel = 'On Side';
      }

      return {
        name: item.name,
        portionLabel,
        quantity,
        itemCal: Math.round(item.cal * multiplier * (quantity || 1))
      };
    });
  }, [selectedItems]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;
  const selectedCount = Object.keys(selectedItems).length;

  return (
    <div className="min-h-screen bg-white pb-28 text-chipotle-text flex flex-col font-sans">
      {/* 1. Global Navigation Bar */}
      <Header
        filterCount={activeFilterCount}
        onOpenFilters={() => setIsFilterModalOpen(true)}
        onOpenNutrition={() => setIsNutritionModalOpen(true)}
        selectedCount={selectedCount}
        onReset={handleReset}
      />

      {/* 2. Chipotle-Style Context Sub-Header */}
      <ChipotleContextBar
        title="BUILD YOUR BOWL"
        totals={totals}
        onOpenNutrition={() => setIsNutritionModalOpen(true)}
        onOpenFilters={() => setIsFilterModalOpen(true)}
        filterCount={activeFilterCount}
        onReset={handleReset}
        selectedCount={selectedCount}
      />

      {/* 3. Main Builder View */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4">
          {/* Category Navigation Pills */}
          <CategoryNav
            categories={MENU_CATEGORIES}
            selectedItems={selectedItems}
            activeSection={activeSection}
            onSelectCategory={handleSelectCategory}
          />

          {/* Category Sections (Bases, Dips, Mains, Toppings, Dressings, Sides, Drinks, Kids) */}
          <div className="space-y-6">
            {MENU_CATEGORIES.map((cat) => (
              <CategorySection
                key={cat.id}
                category={cat}
                selectedItems={selectedItems}
                onToggleItem={handleToggleItem}
                onUpdatePortion={handleUpdatePortion}
                onUpdateQuantity={handleUpdateQuantity}
                activeFilters={filters}
                isActiveSection={activeSection === cat.id}
              />
            ))}
          </div>
        </div>
      </main>

      {/* 4. Sticky Bottom Floating Dock */}
      <StickyBottomBar
        totals={totals}
        selectedCount={selectedCount}
        onOpenNutrition={() => setIsNutritionModalOpen(true)}
        onReset={handleReset}
      />

      {/* 5. Legal Disclaimer & Protection Footer */}
      <Footer
        onOpenNutrition={() => setIsNutritionModalOpen(true)}
        onOpenFilters={() => setIsFilterModalOpen(true)}
      />

      {/* 6. Modals */}
      <DietaryModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        onToggleFilter={handleToggleFilter}
        onResetFilters={handleResetFilters}
      />

      <NutritionFactsModal
        isOpen={isNutritionModalOpen}
        onClose={() => setIsNutritionModalOpen(false)}
        totals={totals}
        selectedItemsList={selectedItemsList}
      />
    </div>
  );
}
