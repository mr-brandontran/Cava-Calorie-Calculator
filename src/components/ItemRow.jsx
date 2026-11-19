import React from 'react';
import { getIngredientImage } from '../data/cavaImages';
import { Minus, Plus, AlertCircle, Check } from 'lucide-react';

export default function ItemRow({
  item,
  category,
  isSelected,
  selectedState,
  onToggle,
  onUpdatePortion,
  onUpdateQuantity,
  isFilteredOut,
  filterWarning
}) {
  const imageUrl = getIngredientImage(item.id);

  // Compute multipliers
  let multiplier = 1;
  let portionLabel = 'Regular';
  const portion = selectedState?.portion || 'regular';

  if (isSelected && selectedState) {
    if (category.type === 'counter') {
      multiplier = selectedState.quantity || 1;
    } else if (portion === 'double' || portion === 'extra') {
      multiplier = 2;
      portionLabel = portion === 'double' ? 'Double' : 'Extra';
    } else if (portion === 'light' || portion === 'half') {
      multiplier = 0.5;
      portionLabel = portion === 'half' ? 'Half' : 'Light';
    } else if (portion === 'side') {
      multiplier = 1;
      portionLabel = 'On Side';
    } else {
      portionLabel = category.id === 'bases' ? 'Full' : 'Regular';
    }
  }

  const currentCal = Math.round(item.cal * multiplier);
  const currentFat = Math.round(item.totalFat * multiplier * 10) / 10;
  const currentProtein = Math.round(item.protein * multiplier * 10) / 10;
  const currentCarb = Math.round(item.carb * multiplier * 10) / 10;

  return (
    <div
      className={`border-b border-chipotle-border transition-colors ${
        isFilteredOut
          ? 'opacity-40 bg-gray-50'
          : isSelected
          ? 'bg-chipotle-tint/25'
          : 'bg-white hover:bg-chipotle-tint/10'
      }`}
    >
      {/* Main Clickable Row */}
      <div
        onClick={() => !isFilteredOut && onToggle(item, category)}
        className="px-4 py-3 flex items-center justify-between cursor-pointer select-none group min-h-[66px]"
      >
        {/* Left Side: Circular Radio Bullet + Authentic Cutout Photo + Title */}
        <div className="flex items-center min-w-0 pr-2">
          {/* Prominent Circular Radio Bullet Point - Fills in distinctly when selected */}
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-150 flex-shrink-0 ${
              isSelected
                ? 'border-chipotle-dark bg-white shadow-2xs'
                : 'border-gray-300 bg-white group-hover:border-chipotle-dark'
            }`}
            aria-checked={isSelected}
            role="radio"
          >
            {isSelected && (
              <div className="w-3.5 h-3.5 rounded-full bg-chipotle-dark transition-transform scale-100"></div>
            )}
          </div>

          {/* Authentic Real Food Photographic Cutout */}
          <div className="w-11 h-11 mx-3 flex-shrink-0 rounded-full overflow-hidden bg-white border border-chipotle-border/50 shadow-2xs flex items-center justify-center p-0.5">
            <img
              src={imageUrl}
              alt={item.name}
              className="w-full h-full object-contain rounded-full transform group-hover:scale-108 transition-transform duration-200"
              loading="lazy"
              onError={(e) => {
                e.target.style.opacity = '0.7';
              }}
            />
          </div>

          {/* Item Title in Bold Condensed Grotesque Sans */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`font-condensed font-bold text-base sm:text-lg tracking-tight uppercase truncate ${
                isSelected ? 'text-chipotle-dark font-black' : 'text-chipotle-text'
              }`}>
                {item.name}
              </span>

              {/* Active portion modifier indicator */}
              {isSelected && (
                <span className="text-[10px] font-condensed font-bold uppercase tracking-wider bg-chipotle-dark text-white px-1.5 py-0.5 rounded-[2px]">
                  {portionLabel} ({multiplier}x)
                </span>
              )}

              {item.allergens?.length > 0 && (
                <span className="text-[10px] font-sans text-chipotle-muted hidden md:inline">
                  [{item.allergens.join(', ')}]
                </span>
              )}
            </div>

            {isFilteredOut && filterWarning && (
              <span className="text-[11px] font-sans text-chipotle-red flex items-center gap-1 mt-0.5">
                <AlertCircle size={11} /> {filterWarning}
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Tabular Macro Columns matching Chipotle */}
        <div className="flex items-stretch flex-shrink-0 text-center font-condensed num-tabular">
          {/* Column 1: Calories (with dedicated subtle vertical track background) */}
          <div className="w-16 sm:w-20 py-2 bg-chipotle-tint/80 flex flex-col justify-center border-l border-r border-chipotle-border/40">
            <span className="font-condensed font-bold text-sm sm:text-base text-chipotle-text leading-tight">
              {currentCal}cal
            </span>
          </div>

          {/* Column 2: Fat (Red) */}
          <div className="w-12 sm:w-16 py-2 flex flex-col justify-center">
            <span className="font-condensed font-bold text-sm sm:text-base text-chipotle-red leading-tight">
              {currentFat}g
            </span>
          </div>

          {/* Column 3: Protein (Green) */}
          <div className="w-12 sm:w-16 py-2 flex flex-col justify-center">
            <span className="font-condensed font-bold text-sm sm:text-base text-chipotle-green leading-tight">
              {currentProtein}g
            </span>
          </div>

          {/* Column 4: Carbs (Gold/Amber) */}
          <div className="w-12 sm:w-16 py-2 flex flex-col justify-center">
            <span className="font-condensed font-bold text-sm sm:text-base text-chipotle-gold leading-tight">
              {currentCarb}g
            </span>
          </div>
        </div>
      </div>

      {/* Intuitive Portion Selection Buttons (Half / Full / Light / Regular / Extra / Side) */}
      {isSelected && (
        <div className="px-4 sm:px-14 py-2.5 bg-chipotle-tint/40 border-t border-chipotle-border/50 flex flex-wrap items-center justify-between gap-2.5 text-xs">
          <span className="text-[11px] font-sans font-bold text-chipotle-dark uppercase tracking-wider">
            Choose Portion:
          </span>

          {/* 1. Counter for Sides & Drinks */}
          {category.type === 'counter' ? (
            <div className="flex items-center space-x-2 bg-white rounded-md border border-chipotle-border px-3 py-1 shadow-2xs">
              <span className="text-xs font-semibold text-chipotle-muted uppercase">Qty:</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateQuantity(item.id, Math.max(1, (selectedState.quantity || 1) - 1));
                }}
                className="w-7 h-7 flex items-center justify-center text-chipotle-dark hover:bg-gray-100 rounded active:scale-95"
              >
                <Minus size={13} strokeWidth={2.5} />
              </button>
              <span className="font-condensed font-bold text-base text-chipotle-text w-5 text-center num-tabular">
                {selectedState.quantity || 1}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateQuantity(item.id, (selectedState.quantity || 1) + 1);
                }}
                className="w-7 h-7 flex items-center justify-center text-chipotle-dark hover:bg-gray-100 rounded active:scale-95"
              >
                <Plus size={13} strokeWidth={2.5} />
              </button>
            </div>
          ) : category.id === 'bases' ? (
            /* 2. Bases: Intuitive Half Portion vs Full Portion Buttons */
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'half');
                }}
                className={`px-3.5 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-2xs ${
                  portion === 'half'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'half' && <Check size={13} strokeWidth={3} />}
                <span>Half Portion (50%)</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'regular');
                }}
                className={`px-3.5 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-2xs ${
                  portion === 'regular'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'regular' && <Check size={13} strokeWidth={3} />}
                <span>Full Portion (100%)</span>
              </button>
            </div>
          ) : category.id === 'mains' ? (
            /* 3. Mains & Proteins: Half vs Regular vs Extra/Double Buttons */
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'half');
                }}
                className={`px-3 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-2xs ${
                  portion === 'half'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'half' && <Check size={12} strokeWidth={3} />}
                <span>Half Portion</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'regular');
                }}
                className={`px-3.5 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-2xs ${
                  portion === 'regular'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'regular' && <Check size={12} strokeWidth={3} />}
                <span>Regular (1x)</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'double');
                }}
                className={`px-3.5 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-2xs ${
                  portion === 'double'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'double' && <Check size={12} strokeWidth={3} />}
                <span>Extra / Double (2x)</span>
              </button>
            </div>
          ) : (
            /* 4. Toppings & Dressings: Light vs Regular vs Extra vs On Side Buttons */
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'light');
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1 transition-all shadow-2xs ${
                  portion === 'light'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'light' && <Check size={12} strokeWidth={3} />}
                <span>Light (½)</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'regular');
                }}
                className={`px-3 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1 transition-all shadow-2xs ${
                  portion === 'regular'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'regular' && <Check size={12} strokeWidth={3} />}
                <span>Regular (1x)</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'extra');
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1 transition-all shadow-2xs ${
                  portion === 'extra'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'extra' && <Check size={12} strokeWidth={3} />}
                <span>Extra (2x)</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'side');
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-[4px] font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1 transition-all shadow-2xs ${
                  portion === 'side'
                    ? 'bg-chipotle-dark text-white ring-1 ring-chipotle-dark'
                    : 'bg-white text-chipotle-text border border-chipotle-border hover:bg-gray-50'
                }`}
              >
                {portion === 'side' && <Check size={12} strokeWidth={3} />}
                <span>On Side</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
