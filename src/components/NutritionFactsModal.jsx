import React, { useState } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { FDA_DAILY_VALUES } from '../data/cavaMenuData';

export default function NutritionFactsModal({ isOpen, onClose, totals, selectedItemsList }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  // Helper for FDA % Daily Values
  const getDV = (val, max) => Math.round((val / max) * 100);

  const handleCopy = () => {
    const lines = [
      '🥗 My CAVA Meal Breakdown:',
      `Total Calories: ${totals.cal} kcal`,
      `Protein: ${totals.protein}g | Carbs: ${totals.carb}g | Total Fat: ${totals.totalFat}g`,
      `Sodium: ${totals.sodium}mg | Fiber: ${totals.fiber}g | Sugar: ${totals.sugar}g | Sat Fat: ${totals.satFat}g`,
      '',
      'Ingredients:',
      ...selectedItemsList.map(
        (i) => `• ${i.name} (${i.portionLabel ? i.portionLabel : i.quantity ? `x${i.quantity}` : '1x'}) - ${i.itemCal} cal`
      )
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity">
      <div 
        className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-gray-200 flex items-center justify-between bg-cava-cream">
          <h3 className="font-bold text-sm text-cava-charcoal flex items-center gap-1.5">
            Nutrition Facts & Summary
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-cava-charcoal hover:bg-cava-sand flex items-center justify-center"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Authentic FDA Label Box */}
          <div className="border-2 border-black p-4 font-sans bg-white text-black shadow-xs">
            <h2 className="text-3xl font-black tracking-tight leading-none">Nutrition Facts</h2>
            <div className="text-xs border-b border-black pb-1 mb-1">
              <span>1 Serving per custom order</span>
            </div>
            
            <div className="flex justify-between items-baseline font-bold text-xs border-b-8 border-black pb-1 mb-2">
              <span>Serving size</span>
              <span>1 Custom Meal</span>
            </div>

            <div className="flex justify-between items-baseline border-b-4 border-black pb-1">
              <div>
                <span className="text-xs font-bold block">Amount per serving</span>
                <span className="text-3xl font-black num-tabular">Calories</span>
              </div>
              <span className="text-4xl font-black num-tabular">{totals.cal}</span>
            </div>

            <div className="text-right text-[11px] font-bold border-b border-black py-1">
              % Daily Value*
            </div>

            {/* Total Fat */}
            <div className="flex justify-between text-xs py-1 border-b border-gray-300">
              <span>
                <strong className="font-bold">Total Fat</strong> {totals.totalFat}g
              </span>
              <strong className="font-bold num-tabular">{getDV(totals.totalFat, FDA_DAILY_VALUES.totalFat)}%</strong>
            </div>

            {/* Saturated Fat */}
            <div className="flex justify-between text-xs py-1 pl-4 border-b border-gray-300">
              <span>Saturated Fat {totals.satFat}g</span>
              <strong className="font-bold num-tabular">{getDV(totals.satFat, FDA_DAILY_VALUES.satFat)}%</strong>
            </div>

            {/* Trans Fat */}
            <div className="flex justify-between text-xs py-1 pl-4 border-b border-gray-300">
              <span>Trans Fat {totals.transFat}g</span>
              <span></span>
            </div>

            {/* Cholesterol */}
            <div className="flex justify-between text-xs py-1 border-b border-gray-300">
              <span>
                <strong className="font-bold">Cholesterol</strong> {totals.chol}mg
              </span>
              <strong className="font-bold num-tabular">{getDV(totals.chol, FDA_DAILY_VALUES.chol)}%</strong>
            </div>

            {/* Sodium */}
            <div className="flex justify-between text-xs py-1 border-b border-gray-300">
              <span>
                <strong className="font-bold">Sodium</strong> {totals.sodium}mg
              </span>
              <strong className="font-bold num-tabular">{getDV(totals.sodium, FDA_DAILY_VALUES.sodium)}%</strong>
            </div>

            {/* Total Carbohydrates */}
            <div className="flex justify-between text-xs py-1 border-b border-gray-300">
              <span>
                <strong className="font-bold">Total Carbohydrate</strong> {totals.carb}g
              </span>
              <strong className="font-bold num-tabular">{getDV(totals.carb, FDA_DAILY_VALUES.carb)}%</strong>
            </div>

            {/* Dietary Fiber */}
            <div className="flex justify-between text-xs py-1 pl-4 border-b border-gray-300">
              <span>Dietary Fiber {totals.fiber}g</span>
              <strong className="font-bold num-tabular">{getDV(totals.fiber, FDA_DAILY_VALUES.fiber)}%</strong>
            </div>

            {/* Total Sugars */}
            <div className="flex justify-between text-xs py-1 pl-4 border-b border-gray-300">
              <span>Total Sugars {totals.sugar}g</span>
              <span></span>
            </div>

            {/* Protein */}
            <div className="flex justify-between text-xs py-1 border-b-8 border-black">
              <span>
                <strong className="font-bold">Protein</strong> {totals.protein}g
              </span>
              <strong className="font-bold num-tabular">{getDV(totals.protein, FDA_DAILY_VALUES.protein)}%</strong>
            </div>

            <div className="text-[9px] text-gray-600 pt-1 leading-tight">
              *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
            </div>
          </div>

          {/* Selected Ingredients Breakdown */}
          {selectedItemsList.length > 0 && (
            <div className="bg-cava-cream/60 rounded-xl p-4 border border-cava-border/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cava-charcoal mb-2.5">
                Included Items in This Meal ({selectedItemsList.length})
              </h4>
              <ul className="divide-y divide-cava-border/40 text-xs">
                {selectedItemsList.map((item, idx) => (
                  <li key={idx} className="py-2 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-cava-charcoal">{item.name}</span>
                      <span className="text-[11px] text-cava-muted ml-1.5">
                        {item.portionLabel ? `(${item.portionLabel})` : item.quantity ? `(x${item.quantity})` : ''}
                      </span>
                    </div>
                    <span className="font-bold text-cava-charcoal num-tabular">
                      {item.itemCal} cal
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Button Footer */}
        <div className="p-4 border-t border-gray-200 bg-cava-cream flex items-center justify-between safe-bottom">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1.5 text-xs font-bold text-cava-olive hover:text-cava-oliveDark bg-white px-4 py-2.5 rounded-xl border border-cava-border shadow-2xs active:scale-95 transition-all"
          >
            {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={onClose}
            className="bg-cava-olive hover:bg-cava-oliveDark text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide shadow-sm active:scale-95 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
