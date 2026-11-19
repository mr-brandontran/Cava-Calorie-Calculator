import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export default function CuratedView({ items, type, onSelectCurated, selectedCuratedId }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-xl font-black text-cava-charcoal tracking-tight flex items-center gap-2">
          <Sparkles className="text-cava-terracotta" size={20} />
          <span>{type === 'curated-bowls' ? 'Chef-Curated Bowls & Salads' : 'Chef-Curated Pitas'}</span>
        </h2>
        <p className="text-xs sm:text-sm text-cava-muted mt-1">
          Explore official chef-crafted recipes with exact nutritional profiles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((bowl) => {
          const isSelected = selectedCuratedId === bowl.id;

          return (
            <div
              key={bowl.id}
              onClick={() => onSelectCurated(bowl)}
              className={`rounded-2xl border p-4 flex flex-col justify-between transition-all cursor-pointer select-none bg-white ${
                isSelected
                  ? 'border-cava-olive ring-2 ring-cava-olive/30 shadow-md bg-cava-cream/20'
                  : 'border-cava-border hover:border-cava-olive/50 hover:shadow-sm'
              }`}
            >
              <div>
                {/* Title & Calorie Badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-sm text-cava-charcoal leading-snug">
                    {bowl.name}
                  </h3>
                  <span className="text-xs font-black bg-cava-charcoal text-white px-2 py-0.5 rounded-full flex-shrink-0 num-tabular">
                    {bowl.nutrition.cal} cal
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-cava-muted leading-relaxed mb-4 line-clamp-3">
                  {bowl.description}
                </p>
              </div>

              {/* Bottom: Macro Grid & Allergens */}
              <div>
                {/* 3 Macro Badges */}
                <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-cava-cream/60 rounded-xl mb-3 text-center num-tabular">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-cava-greenMacro block">
                      Protein
                    </span>
                    <span className="text-xs font-bold text-cava-charcoal">
                      {bowl.nutrition.protein}g
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-cava-saffron block">
                      Carbs
                    </span>
                    <span className="text-xs font-bold text-cava-charcoal">
                      {bowl.nutrition.carb}g
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-cava-terracotta block">
                      Fat
                    </span>
                    <span className="text-xs font-bold text-cava-charcoal">
                      {bowl.nutrition.totalFat}g
                    </span>
                  </div>
                </div>

                {/* Allergens & Selection CTA */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[10px] text-cava-muted/80 truncate max-w-[150px]">
                    {bowl.allergens?.length > 0 ? `Allergens: ${bowl.allergens.join(', ')}` : 'No common allergens'}
                  </span>
                  <button
                    type="button"
                    className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center space-x-1 transition-all ${
                      isSelected
                        ? 'bg-cava-olive text-white'
                        : 'bg-cava-cream text-cava-olive hover:bg-cava-sand'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check size={12} strokeWidth={3} />
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <span>Select</span>
                        <ArrowRight size={12} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
