import React, { useState } from 'react';
import ItemRow from './ItemRow';
import { Minus, Plus } from 'lucide-react';

export default function CategorySection({
  category,
  selectedItems,
  onToggleItem,
  onUpdatePortion,
  onUpdateQuantity,
  activeFilters
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section id={category.id} className="scroll-mt-24 mb-8">
      {/* Category Section Header matching Chipotle */}
      <div className="pt-6 pb-2 border-b border-chipotle-border">
        {/* Tracked Subtitle (e.g. CHOOSE ANY TWO) */}
        <div className="text-[11px] font-sans font-bold tracking-[0.16em] text-chipotle-dark uppercase">
          {category.subhead}
        </div>

        {/* Title and Macro Column Headers */}
        <div className="flex items-end justify-between mt-0.5">
          {/* Category Title */}
          <div 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <h2 className="font-condensed font-black text-2xl sm:text-3xl tracking-tight text-chipotle-dark uppercase group-hover:text-chipotle-darkHover transition-colors">
              {category.name.split('(')[0].trim()}
            </h2>
            <button 
              className="text-chipotle-dark p-1 rounded hover:bg-chipotle-tint transition-colors"
              aria-label={isCollapsed ? "Expand section" : "Collapse section"}
            >
              {isCollapsed ? <Plus size={16} strokeWidth={2.5} /> : <Minus size={16} strokeWidth={2.5} />}
            </button>
          </div>

          {/* Column Header Labels on the Right */}
          <div className="flex items-center flex-shrink-0 text-center font-sans text-xs text-chipotle-muted font-semibold">
            {/* Empty space for calories column */}
            <div className="w-16 sm:w-20"></div>
            {/* Fat column label */}
            <div className="w-12 sm:w-16">Fat</div>
            {/* Protein column label */}
            <div className="w-12 sm:w-16">Protein</div>
            {/* Carbs column label */}
            <div className="w-12 sm:w-16">Carbs</div>
          </div>
        </div>
      </div>

      {/* Rows */}
      {!isCollapsed && (
        <div className="bg-white">
          {category.items.map((item) => {
            const isSelected = !!selectedItems[item.id];
            const selectedState = selectedItems[item.id];

            // Check dietary filters
            let isFilteredOut = false;
            let filterWarning = '';

            if (activeFilters.vegan && !item.diets?.includes('vegan')) {
              isFilteredOut = true;
              filterWarning = 'Not Vegan';
            } else if (activeFilters.vegetarian && !item.diets?.includes('vegetarian') && !item.diets?.includes('vegan')) {
              isFilteredOut = true;
              filterWarning = 'Not Vegetarian';
            } else if (activeFilters.glutenFree && item.allergens?.includes('Wheat')) {
              isFilteredOut = true;
              filterWarning = 'Contains Wheat (Gluten)';
            } else if (activeFilters.dairyFree && item.allergens?.includes('Milk')) {
              isFilteredOut = true;
              filterWarning = 'Contains Dairy (Milk)';
            } else if (activeFilters.soyFree && item.allergens?.includes('Soy')) {
              isFilteredOut = true;
              filterWarning = 'Contains Soy';
            } else if (activeFilters.eggFree && item.allergens?.includes('Eggs')) {
              isFilteredOut = true;
              filterWarning = 'Contains Eggs';
            } else if (activeFilters.sesameFree && item.allergens?.includes('Sesame')) {
              isFilteredOut = true;
              filterWarning = 'Contains Sesame';
            }

            return (
              <ItemRow
                key={item.id}
                item={item}
                category={category}
                isSelected={isSelected}
                selectedState={selectedState}
                onToggle={onToggleItem}
                onUpdatePortion={onUpdatePortion}
                onUpdateQuantity={onUpdateQuantity}
                isFilteredOut={isFilteredOut}
                filterWarning={filterWarning}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
