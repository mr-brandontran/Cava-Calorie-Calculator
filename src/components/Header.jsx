import React from 'react';
import CavaLogo from './CavaLogo';
import { SlidersHorizontal, RotateCcw, FileText } from 'lucide-react';

export default function Header({ 
  filterCount = 0, 
  onOpenFilters, 
  onOpenNutrition,
  selectedCount = 0,
  onReset
}) {
  return (
    <header className="bg-white border-b border-[#E5E0DB] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Authentic CAVA Wordmark Logo & Subtitle */}
        <div className="flex items-center">
          <CavaLogo className="h-7" />
        </div>

        {/* Right: Functional Action Tools (Preferences, Full Nutrition, Reset) */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Dietary Preferences Filter Trigger */}
          <button
            onClick={onOpenFilters}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-[3px] text-xs font-condensed font-bold uppercase tracking-wider border transition-all active:scale-95 ${
              filterCount > 0
                ? 'bg-[#451400] text-white border-[#451400] shadow-2xs'
                : 'bg-[#F7F5F2] text-[#2B110B] border-[#E5E0DB] hover:bg-gray-200'
            }`}
          >
            <SlidersHorizontal size={13} />
            <span>Preferences</span>
            {filterCount > 0 && (
              <span className="ml-1 bg-[#8C1D24] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {filterCount}
              </span>
            )}
          </button>

          {/* Nutrition Facts Modal Button */}
          <button
            onClick={onOpenNutrition}
            className="flex items-center space-x-1.5 bg-[#F7F5F2] hover:bg-gray-200 text-[#2B110B] border border-[#E5E0DB] px-3 py-1.5 rounded-[3px] text-xs font-condensed font-bold uppercase tracking-wider transition-all active:scale-95"
            title="View Full Nutrition Facts"
          >
            <FileText size={13} />
            <span className="hidden sm:inline">Nutrition Facts</span>
          </button>

          {/* Quick Reset Button */}
          {selectedCount > 0 && (
            <button
              onClick={onReset}
              className="text-[#6E6E6E] hover:text-[#8C1D24] p-1.5 rounded hover:bg-gray-100 transition-colors"
              title="Clear all selections"
              aria-label="Reset"
            >
              <RotateCcw size={15} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
