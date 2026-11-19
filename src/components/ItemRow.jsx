import React from 'react';
import { getIngredientImage } from '../data/cavaImages';
import { Minus, Plus, AlertCircle } from 'lucide-react';

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
  let portionLabel = 'Normal';

  if (isSelected && selectedState) {
    if (category.type === 'counter') {
      multiplier = selectedState.quantity || 1;
    } else if (selectedState.portion === 'double') {
      multiplier = 2;
      portionLabel = 'Double';
    } else if (selectedState.portion === 'light' || selectedState.portion === 'half') {
      multiplier = 0.5;
      portionLabel = selectedState.portion === 'half' ? 'Half' : 'Light';
    } else if (selectedState.portion === 'side') {
      multiplier = 1;
      portionLabel = 'Side';
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
          ? 'bg-chipotle-tint/30'
          : 'bg-white hover:bg-chipotle-tint/15'
      }`}
    >
      {/* Main Clickable Row matching Chipotle's design */}
      <div
        onClick={() => !isFilteredOut && onToggle(item, category)}
        className="px-4 py-3 flex items-center justify-between cursor-pointer select-none group min-h-[66px]"
      >
        {/* Left Side: Circular Radio + Authentic Photographic Cutout + Title */}
        <div className="flex items-center min-w-0 pr-2">
          {/* Circular Radio Indicator */}
          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
              isSelected
                ? 'border-chipotle-dark bg-chipotle-dark'
                : 'border-gray-400 bg-white group-hover:border-chipotle-dark'
            }`}
          >
            {isSelected && (
              <div className="w-2 h-2 rounded-full bg-white"></div>
            )}
          </div>

          {/* Authentic Real Food Photographic Cutout (Exact Chipotle/CAVA Style) */}
          <div className="w-11 h-11 mx-3 flex-shrink-0 rounded-full overflow-hidden bg-white border border-chipotle-border/40 shadow-2xs flex items-center justify-center p-0.5">
            <img
              src={imageUrl}
              alt={item.name}
              className="w-full h-full object-contain rounded-full transform group-hover:scale-108 transition-transform duration-200"
              loading="lazy"
              onError={(e) => {
                // Graceful fallback to avoid broken images if offline
                e.target.style.opacity = '0.7';
              }}
            />
          </div>

          {/* Item Title in Bold Condensed Grotesque Sans */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-condensed font-bold text-base sm:text-lg tracking-tight text-chipotle-text uppercase truncate">
                {item.name}
              </span>

              {isSelected && multiplier !== 1 && (
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

      {/* Expandable Portion Selector when Active */}
      {isSelected && (
        <div className="px-14 pb-3 pt-1 flex flex-wrap items-center justify-between gap-2 text-xs bg-chipotle-tint/20">
          <span className="text-[11px] font-sans font-semibold text-chipotle-muted uppercase tracking-wider">
            Portion:
          </span>

          {category.type === 'counter' ? (
            <div className="flex items-center space-x-2 bg-white rounded border border-chipotle-border px-2 py-0.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateQuantity(item.id, Math.max(1, (selectedState.quantity || 1) - 1));
                }}
                className="w-6 h-6 flex items-center justify-center text-chipotle-dark hover:bg-gray-100 rounded"
              >
                <Minus size={12} />
              </button>
              <span className="font-bold text-chipotle-text w-4 text-center num-tabular">
                {selectedState.quantity || 1}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateQuantity(item.id, (selectedState.quantity || 1) + 1);
                }}
                className="w-6 h-6 flex items-center justify-center text-chipotle-dark hover:bg-gray-100 rounded"
              >
                <Plus size={12} />
              </button>
            </div>
          ) : category.id === 'mains' ? (
            <div className="inline-flex bg-white rounded-[3px] border border-chipotle-border overflow-hidden">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'half');
                }}
                className={`px-3 py-1 font-condensed font-bold text-xs uppercase transition-colors ${
                  selectedState.portion === 'half'
                    ? 'bg-chipotle-dark text-white'
                    : 'text-chipotle-text hover:bg-gray-50'
                }`}
              >
                Half (0.5x)
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'regular');
                }}
                className={`px-3 py-1 font-condensed font-bold text-xs uppercase border-l border-r border-chipotle-border transition-colors ${
                  !selectedState.portion || selectedState.portion === 'regular'
                    ? 'bg-chipotle-dark text-white'
                    : 'text-chipotle-text hover:bg-gray-50'
                }`}
              >
                Normal (1x)
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'double');
                }}
                className={`px-3 py-1 font-condensed font-bold text-xs uppercase transition-colors ${
                  selectedState.portion === 'double'
                    ? 'bg-chipotle-dark text-white'
                    : 'text-chipotle-text hover:bg-gray-50'
                }`}
              >
                Double (2x)
              </button>
            </div>
          ) : category.id === 'bases' ? (
            <div className="inline-flex bg-white rounded-[3px] border border-chipotle-border overflow-hidden">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'half');
                }}
                className={`px-3 py-1 font-condensed font-bold text-xs uppercase transition-colors ${
                  selectedState.portion === 'half'
                    ? 'bg-chipotle-dark text-white'
                    : 'text-chipotle-text hover:bg-gray-50'
                }`}
              >
                Half Base (50%)
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'regular');
                }}
                className={`px-3 py-1 font-condensed font-bold text-xs uppercase border-l border-chipotle-border transition-colors ${
                  !selectedState.portion || selectedState.portion === 'regular'
                    ? 'bg-chipotle-dark text-white'
                    : 'text-chipotle-text hover:bg-gray-50'
                }`}
              >
                Full Base (100%)
              </button>
            </div>
          ) : (
            <div className="inline-flex bg-white rounded-[3px] border border-chipotle-border overflow-hidden">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'light');
                }}
                className={`px-2.5 py-1 font-condensed font-bold text-xs uppercase transition-colors ${
                  selectedState.portion === 'light'
                    ? 'bg-chipotle-dark text-white'
                    : 'text-chipotle-text hover:bg-gray-50'
                }`}
              >
                Light
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'regular');
                }}
                className={`px-2.5 py-1 font-condensed font-bold text-xs uppercase border-l border-r border-chipotle-border transition-colors ${
                  !selectedState.portion || selectedState.portion === 'regular'
                    ? 'bg-chipotle-dark text-white'
                    : 'text-chipotle-text hover:bg-gray-50'
                }`}
              >
                Normal
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdatePortion(item.id, 'side');
                }}
                className={`px-2.5 py-1 font-condensed font-bold text-xs uppercase transition-colors ${
                  selectedState.portion === 'side'
                    ? 'bg-chipotle-dark text-white'
                    : 'text-chipotle-text hover:bg-gray-50'
                }`}
              >
                Side
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
