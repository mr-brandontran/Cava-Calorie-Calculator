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
      {/* Category Section Header matching Chipotle's exact screenshot */}
      <div
        className={`pt-5 pb-2 transition-all duration-200 ${
          isActiveSection
            ? 'bg-[#F9F7F4]/80 pl-2 pr-1 rounded-t border-l-4 border-[#451400]'
            : 'bg-white pl-0 pr-0'
        }`}
      >
        {/* Tracked Subhead (e.g. CHOOSE ANY TWO) and Minus Dash */}
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-sans font-bold tracking-[0.16em] text-[#451400] uppercase">
            {category.subhead}
          </div>
          {/* Subtle minus dash on the far right */}
          <div className="text-[#451400] font-bold text-lg select-none pr-1">
            —
          </div>
        </div>

        {/* Title and Macro Column Headers */}
        <div className="flex items-end justify-between mt-0.5">
          {/* Category Title (e.g. PROTEIN OR VEGGIE) */}
          <div className="flex items-center space-x-2">
            <h2 className="font-condensed font-black text-2xl sm:text-3xl tracking-tight text-[#451400] uppercase">
              {category.name.split('(')[0].trim()}
            </h2>

            {isActiveSection && (
              <span className="bg-[#451400] text-white text-[9px] font-condensed font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                Current
              </span>
            )}
          </div>

          {/* Column Header Labels on the Right, matching column widths */}
          <div className="flex items-center flex-shrink-0 text-center font-sans text-xs text-chipotle-muted font-semibold">
            {/* Empty space matching Calories column width */}
            <div className="w-16 sm:w-24"></div>
            {/* Fat column label */}
            <div className="w-12 sm:w-20">Fat</div>
            {/* Protein column label */}
            <div className="w-12 sm:w-20">Protein</div>
            {/* Carbs column label */}
            <div className="w-12 sm:w-20">Carbs</div>
          </div>
        </div>
      </div>

      {/* Thin line separating header from rows */}
      <div className="border-b border-[#E5E0DB]"></div>

      {/* Items List - Always visible, never collapses */}
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
