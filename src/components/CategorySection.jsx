import React from 'react';
import ItemRow from './ItemRow';

export default function CategorySection({
  category,
  selectedItems,
  onToggleItem,
  onUpdatePortion,
  onUpdateQuantity,
  activeFilters,
  isActiveSection = false
}) {
  return (
    <section id={category.id} className="scroll-mt-28 mb-8 transition-all">
      {/* Category Section Header - Never collapses, lights up when in section */}
      <div
        className={`pt-5 pb-3 border-b transition-all duration-200 ${
          isActiveSection
            ? 'border-chipotle-dark bg-chipotle-tint/60 pl-3.5 pr-2 rounded-t-md border-l-4 border-l-chipotle-dark shadow-2xs'
            : 'border-chipotle-border bg-white pl-0 pr-0'
        }`}
      >
        {/* Tracked Subtitle with Active Indicator */}
        <div className="flex items-center space-x-2">
          <span className={`text-[11px] font-sans font-bold tracking-[0.16em] uppercase ${
            isActiveSection ? 'text-chipotle-dark font-black' : 'text-chipotle-dark/80'
          }`}>
            {category.subhead}
          </span>

          {/* Active Section "Lights Up" Badge */}
          {isActiveSection && (
            <span className="bg-chipotle-dark text-white text-[9px] font-condensed font-black px-2 py-0.5 rounded uppercase tracking-wider animate-fade-in shadow-2xs">
              Current Section
            </span>
          )}
        </div>

        {/* Title and Macro Column Headers */}
        <div className="flex items-end justify-between mt-1">
          {/* Category Title */}
          <div className="flex items-center space-x-2">
            <h2 className={`font-condensed font-black text-2xl sm:text-3xl tracking-tight uppercase transition-colors ${
              isActiveSection ? 'text-chipotle-dark' : 'text-chipotle-text'
            }`}>
              {category.name.split('(')[0].trim()}
            </h2>
          </div>

          {/* Column Header Labels on the Right */}
          <div className="flex items-center flex-shrink-0 text-center font-sans text-xs text-chipotle-muted font-semibold">
            {/* Calories column spacer */}
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

      {/* Items List - Always visible, never collapses or disappears */}
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
    </section>
  );
}
