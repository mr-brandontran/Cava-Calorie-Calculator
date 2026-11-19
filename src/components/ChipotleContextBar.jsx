import React, { useState } from 'react';
import { Plus, Minus, SlidersHorizontal, RotateCcw, FileText } from 'lucide-react';

export default function ChipotleContextBar({
  title = "BUILD YOUR BOWL",
  totals,
  onOpenNutrition,
  onOpenFilters,
  filterCount = 0,
  onReset,
  selectedCount = 0
}) {
  const [showMicros, setShowMicros] = useState(false);

  return (
    <div className="bg-white border-b border-[#E5E0DB]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Left Title & Links */}
          <div>
            <h1 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#451400] uppercase leading-none">
              {title}
            </h1>

            {/* Sub-links (Allergen Statement, Full Nutrition Facts, Preferences, Reset) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#2B110B] mt-2.5 font-sans font-semibold">
              <button
                onClick={onOpenNutrition}
                className="underline underline-offset-2 hover:text-[#451400] transition-colors"
              >
                Allergen Statement
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={onOpenNutrition}
                className="underline underline-offset-2 hover:text-[#451400] transition-colors"
              >
                Full Nutrition Facts
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={onOpenFilters}
                className="inline-flex items-center space-x-1 underline underline-offset-2 hover:text-[#451400] text-[#451400] transition-colors font-bold"
              >
                <SlidersHorizontal size={12} className="inline mr-1" />
                <span>Nutrition Preferences</span>
                {filterCount > 0 && (
                  <span className="ml-1 bg-[#8C1D24] text-white text-[10px] w-4 h-4 rounded-full inline-flex items-center justify-center font-bold">
                    {filterCount}
                  </span>
                )}
              </button>

              {selectedCount > 0 && (
                <>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={onReset}
                    className="text-[#6E6E6E] hover:text-[#8C1D24] inline-flex items-center space-x-1 transition-colors"
                    title="Reset selections"
                  >
                    <RotateCcw size={11} className="inline" />
                    <span>Reset</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right Live Tally Block */}
          <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6 flex-wrap sm:flex-nowrap border-t lg:border-t-0 pt-4 lg:pt-0 border-[#E5E0DB]/50">
            {/* Calories (e.g. 320cal) */}
            <div className="flex items-baseline font-condensed">
              <span className="text-4xl sm:text-5xl font-black text-[#451400] tracking-tight num-tabular leading-none">
                {totals.cal}
              </span>
              <span className="text-lg sm:text-xl font-bold text-[#451400] ml-0.5 lowercase">
                cal
              </span>
            </div>

            {/* 3 Dedicated Macro Columns (Fat, Protein, Carbs) */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-center num-tabular">
              {/* Fat */}
              <div className="flex flex-col items-center">
                <span className="font-condensed font-bold text-xl sm:text-2xl text-[#8C1D24] leading-none">
                  {totals.totalFat}g
                </span>
                <span className="text-[11px] font-sans font-semibold text-[#6E6E6E] uppercase mt-0.5">
                  Fat
                </span>
              </div>

              {/* Protein */}
              <div className="flex flex-col items-center">
                <span className="font-condensed font-bold text-xl sm:text-2xl text-[#2E6B34] leading-none">
                  {totals.protein}g
                </span>
                <span className="text-[11px] font-sans font-semibold text-[#6E6E6E] uppercase mt-0.5">
                  Protein
                </span>
              </div>

              {/* Carbs */}
              <div className="flex flex-col items-center">
                <span className="font-condensed font-bold text-xl sm:text-2xl text-[#C68A1B] leading-none">
                  {totals.carb}g
                </span>
                <span className="text-[11px] font-sans font-semibold text-[#6E6E6E] uppercase mt-0.5">
                  Carbs
                </span>
              </div>
            </div>

            {/* View Nutrition Button & Micronutrient Accordion Toggle */}
            <div className="flex items-center space-x-2.5">
              <button
                onClick={onOpenNutrition}
                className="bg-[#451400] hover:bg-[#330E00] text-white px-5 sm:px-6 py-3 rounded-[3px] font-condensed font-bold text-sm sm:text-base tracking-wider uppercase transition-all active:scale-98 shadow-xs flex items-center space-x-1.5"
              >
                <FileText size={16} />
                <span>View Nutrition</span>
              </button>

              <button
                onClick={() => setShowMicros(!showMicros)}
                className="w-9 h-9 rounded-full border border-[#451400] text-[#451400] hover:bg-[#451400] hover:text-white flex items-center justify-center transition-colors"
                title={showMicros ? "Hide Micronutrients" : "Show Micronutrients"}
                aria-label="Toggle micronutrients"
              >
                {showMicros ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Micronutrient Details Drawer */}
        {showMicros && (
          <div className="mt-4 pt-3 border-t border-[#E5E0DB] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#F7F5F2] p-3 rounded">
            <div>
              <span className="text-[10px] font-bold text-[#6E6E6E] uppercase block">Saturated Fat</span>
              <span className="font-condensed font-bold text-base text-[#451400] num-tabular">{totals.satFat}g</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#6E6E6E] uppercase block">Sodium</span>
              <span className="font-condensed font-bold text-base text-[#451400] num-tabular">{totals.sodium}mg</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#6E6E6E] uppercase block">Dietary Fiber</span>
              <span className="font-condensed font-bold text-base text-[#451400] num-tabular">{totals.fiber}g</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#6E6E6E] uppercase block">Total Sugars</span>
              <span className="font-condensed font-bold text-base text-[#451400] num-tabular">{totals.sugar}g</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
