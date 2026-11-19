import React from 'react';
import { RotateCcw, FileText } from 'lucide-react';

export default function StickyBottomBar({ totals, selectedCount, onOpenNutrition, onReset }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E5E0DB] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-3 safe-bottom">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Your Meal Stats */}
        <div className="min-w-0">
          <div className="text-[10px] font-sans font-bold tracking-[0.15em] text-[#451400] uppercase">
            YOUR MEAL
          </div>
          
          <div className="flex items-baseline space-x-2">
            <span className="font-condensed font-black text-2xl sm:text-3xl text-[#451400] tracking-tight num-tabular">
              {totals.cal}
            </span>
            <span className="font-condensed font-bold text-sm text-[#451400] lowercase">
              cal
            </span>

            {/* Macro Summary Pills */}
            <div className="hidden sm:flex items-center space-x-2 text-xs font-condensed font-bold num-tabular ml-2">
              <span className="text-[#8C1D24]">{totals.totalFat}g Fat</span>
              <span className="text-gray-300">•</span>
              <span className="text-[#2E6B34]">{totals.protein}g Protein</span>
              <span className="text-gray-300">•</span>
              <span className="text-[#C68A1B]">{totals.carb}g Carbs</span>
            </div>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          {selectedCount > 0 && (
            <button
              onClick={onReset}
              className="text-[#6E6E6E] hover:text-[#8C1D24] p-2 rounded hover:bg-gray-100 transition-colors"
              title="Reset order"
              aria-label="Reset"
            >
              <RotateCcw size={16} />
            </button>
          )}

          <button
            onClick={onOpenNutrition}
            className="bg-[#451400] hover:bg-[#330E00] text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-[3px] font-condensed font-bold text-sm sm:text-base tracking-wider uppercase transition-all active:scale-98 shadow-xs flex items-center space-x-1.5"
          >
            <FileText size={16} />
            <span>View Nutrition</span>
          </button>
        </div>
      </div>
    </div>
  );
}
