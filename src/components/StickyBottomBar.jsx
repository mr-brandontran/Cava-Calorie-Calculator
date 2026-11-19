import React from 'react';
import { RotateCcw } from 'lucide-react';

export default function StickyBottomBar({ totals, selectedCount, onOpenNutrition, onReset }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-chipotle-border shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-3 safe-bottom">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Your Meal Stats */}
        <div className="min-w-0">
          <div className="text-[10px] font-sans font-bold tracking-[0.15em] text-chipotle-dark uppercase">
            YOUR MEAL
          </div>
          
          <div className="flex items-baseline space-x-2">
            <span className="font-condensed font-black text-2xl sm:text-3xl text-chipotle-dark tracking-tight num-tabular">
              {totals.cal}
            </span>
            <span className="font-condensed font-bold text-sm text-chipotle-dark lowercase">
              cal
            </span>

            {/* Macro Summary Pills */}
            <div className="hidden sm:flex items-center space-x-2 text-xs font-condensed font-bold num-tabular ml-2">
              <span className="text-chipotle-red">{totals.totalFat}g Fat</span>
              <span className="text-gray-300">•</span>
              <span className="text-chipotle-green">{totals.protein}g Protein</span>
              <span className="text-gray-300">•</span>
              <span className="text-chipotle-gold">{totals.carb}g Carbs</span>
            </div>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          {selectedCount > 0 && (
            <button
              onClick={onReset}
              className="text-chipotle-muted hover:text-chipotle-red p-2 rounded transition-colors"
              title="Reset order"
              aria-label="Reset"
            >
              <RotateCcw size={16} />
            </button>
          )}

          <button
            onClick={onOpenNutrition}
            className="text-xs sm:text-sm font-sans font-bold text-chipotle-dark underline underline-offset-2 hover:text-chipotle-darkHover transition-colors hidden xs:inline-block"
          >
            Nutrition Details
          </button>

          <button
            onClick={onOpenNutrition}
            className="bg-chipotle-dark hover:bg-chipotle-darkHover text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-[3px] font-condensed font-bold text-sm sm:text-base tracking-wider uppercase transition-all active:scale-98 shadow-xs"
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}
