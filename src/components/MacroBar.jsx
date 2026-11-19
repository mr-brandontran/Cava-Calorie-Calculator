import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, FileText } from 'lucide-react';

export default function MacroBar({ totals, onOpenNutritionFacts }) {
  const [showMicro, setShowMicro] = useState(false);

  // Calculate macro percentage splits based on 4 cal/g protein, 4 cal/g carb, 9 cal/g fat
  const pCal = totals.protein * 4;
  const cCal = totals.carb * 4;
  const fCal = totals.totalFat * 9;
  const totalMacroCal = pCal + cCal + fCal;

  const pPct = totalMacroCal > 0 ? Math.round((pCal / totalMacroCal) * 100) : 0;
  const cPct = totalMacroCal > 0 ? Math.round((cCal / totalMacroCal) * 100) : 0;
  const fPct = totalMacroCal > 0 ? Math.max(0, 100 - pPct - cPct) : 0;

  return (
    <div className="bg-white border-b border-cava-border shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3">
        {/* Main Macro Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Calorie Headline */}
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cava-charcoal num-tabular">
              {totals.cal}
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-cava-muted">
              CALORIES
            </span>
          </div>

          {/* 3 Core Macros Cards */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Protein */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cava-greenMacro flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cava-greenMacro"></span>
                Protein
              </span>
              <span className="text-base sm:text-lg font-bold text-cava-charcoal num-tabular">
                {totals.protein}g
              </span>
            </div>

            {/* Carbs */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cava-saffron flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cava-saffron"></span>
                Carbs
              </span>
              <span className="text-base sm:text-lg font-bold text-cava-charcoal num-tabular">
                {totals.carb}g
              </span>
            </div>

            {/* Total Fat */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cava-terracotta flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cava-terracotta"></span>
                Fat
              </span>
              <span className="text-base sm:text-lg font-bold text-cava-charcoal num-tabular">
                {totals.totalFat}g
              </span>
            </div>

            {/* FDA Nutrition Modal Trigger */}
            <button
              onClick={onOpenNutritionFacts}
              className="hidden sm:flex items-center space-x-1.5 text-xs font-semibold bg-cava-cream hover:bg-cava-sand text-cava-olive px-3 py-1.5 rounded-lg border border-cava-border transition-all active:scale-95"
            >
              <FileText size={14} />
              <span>Full Nutrition</span>
            </button>
          </div>
        </div>

        {/* Macro Distribution Visual Progress Bar */}
        {totalMacroCal > 0 && (
          <div className="mt-2.5">
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
              <div 
                style={{ width: `${pPct}%` }} 
                className="bg-cava-greenMacro transition-all duration-300" 
                title={`Protein: ${pPct}%`} 
              />
              <div 
                style={{ width: `${cPct}%` }} 
                className="bg-cava-saffron transition-all duration-300" 
                title={`Carbs: ${cPct}%`} 
              />
              <div 
                style={{ width: `${fPct}%` }} 
                className="bg-cava-terracotta transition-all duration-300" 
                title={`Fat: ${fPct}%`} 
              />
            </div>
            <div className="flex justify-between items-center text-[10px] text-cava-muted mt-1 px-0.5">
              <span className="flex items-center gap-1">
                <span className="font-semibold text-cava-greenMacro">{pPct}%</span> Protein
              </span>
              <span className="flex items-center gap-1">
                <span className="font-semibold text-cava-saffron">{cPct}%</span> Carbs
              </span>
              <span className="flex items-center gap-1">
                <span className="font-semibold text-cava-terracotta">{fPct}%</span> Fat
              </span>
              <button 
                onClick={() => setShowMicro(!showMicro)} 
                className="text-cava-olive font-semibold flex items-center gap-0.5 ml-2 hover:underline"
              >
                <span>{showMicro ? 'Less' : 'More'} details</span>
                {showMicro ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
            </div>
          </div>
        )}

        {/* Expandable Micronutrients (Sodium, Fiber, Sugars, Sat Fat) */}
        {showMicro && (
          <div className="mt-2.5 pt-2 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-cava-cream/60 p-2 rounded-md">
              <span className="text-[10px] font-medium text-cava-muted block">Sodium</span>
              <span className="font-bold text-cava-charcoal num-tabular">{totals.sodium} mg</span>
            </div>
            <div className="bg-cava-cream/60 p-2 rounded-md">
              <span className="text-[10px] font-medium text-cava-muted block">Dietary Fiber</span>
              <span className="font-bold text-cava-charcoal num-tabular">{totals.fiber} g</span>
            </div>
            <div className="bg-cava-cream/60 p-2 rounded-md">
              <span className="text-[10px] font-medium text-cava-muted block">Sugars</span>
              <span className="font-bold text-cava-charcoal num-tabular">{totals.sugar} g</span>
            </div>
            <div className="bg-cava-cream/60 p-2 rounded-md">
              <span className="text-[10px] font-medium text-cava-muted block">Saturated Fat</span>
              <span className="font-bold text-cava-charcoal num-tabular">{totals.satFat} g</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
