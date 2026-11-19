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

  // Portion state: defaults to 'regular'
  const portion = selectedState?.portion || 'regular';

  let multiplier = 1;
  if (isSelected && selectedState) {
    if (category.type === 'counter') {
      multiplier = selectedState.quantity || 1;
    } else if (portion === 'double' || portion === 'extra') {
      multiplier = 2;
    } else if (portion === 'light' || portion === 'half') {
      multiplier = 0.5;
    } else if (portion === 'side') {
      multiplier = 1;
    }
  }

  const currentCal = Math.round(item.cal * multiplier);
  const currentFat = Math.round(item.totalFat * multiplier * 10) / 10;
  const currentProtein = Math.round(item.protein * multiplier * 10) / 10;
  const currentCarb = Math.round(item.carb * multiplier * 10) / 10;

  // Exact Chipotle-style Radio Option directly under title
  const PortionRadio = ({ value, label }) => {
    const isChecked = portion === value;
    return (
      <label
        onClick={(e) => {
          e.stopPropagation();
          onUpdatePortion(item.id, value);
        }}
        className="inline-flex items-center space-x-1.5 cursor-pointer text-xs font-sans select-none"
      >
        <span
          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
            isChecked
              ? 'border-[#2B110B] bg-white'
              : 'border-gray-400 bg-white hover:border-gray-600'
          }`}
        >
          {isChecked && (
            <span className="w-2 h-2 rounded-full bg-[#2B110B]"></span>
          )}
        </span>
        <span className={isChecked ? 'font-normal text-[#2B110B]' : 'font-normal text-[#6E6E6E]'}>
          {label}
        </span>
      </label>
    );
  };

  return (
    <div
      className={`border-b border-[#E5E0DB] transition-colors ${
        isFilteredOut
          ? 'opacity-40 bg-gray-50'
          : 'bg-white hover:bg-[#FAFAF9]'
      }`}
    >
      {/* Clickable Row */}
      <div
        onClick={() => !isFilteredOut && onToggle(item, category)}
        className="flex items-stretch justify-between cursor-pointer select-none group min-h-[66px]"
      >
        {/* Left Side: Brown Checkmark + Cutout Photo + Title & Portion Radios */}
        <div className="flex items-center pl-4 py-2.5 min-w-0 pr-2 flex-1">
          {/* Circular Selection Checkmark (Exact Chipotle Brown #8B572A / #8C5320) */}
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
              isSelected
                ? 'bg-[#8B572A] text-white shadow-2xs'
                : 'border border-gray-400 bg-white group-hover:border-[#451400]'
            }`}
          >
            {isSelected && <Check size={12} strokeWidth={3.5} />}
          </div>

          {/* Authentic Food Cutout Photo */}
          <div className="w-10 h-10 mx-3 flex-shrink-0 flex items-center justify-center">
            <img
              src={imageUrl}
              alt={item.name}
              className="w-full h-full object-contain rounded-full transform group-hover:scale-108 transition-transform duration-150"
              loading="lazy"
              onError={(e) => {
                e.target.style.opacity = '0.7';
              }}
            />
          </div>

          {/* Title & Inline Portion Radios (Directly beneath title) */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-condensed font-bold text-sm sm:text-base tracking-tight text-[#2B110B] uppercase truncate">
                {item.name}
              </span>

              {item.allergens?.length > 0 && (
                <span className="text-[10px] font-sans text-[#6E6E6E] hidden md:inline">
                  [{item.allergens.join(', ')}]
                </span>
              )}
            </div>

            {/* Chipotle-Exact Portion Radio Selectors (Normal / Double / Light / Side) */}
            {isSelected && (
              <div className="flex items-center space-x-3.5 mt-1 flex-wrap gap-y-1">
                {category.type === 'counter' ? (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1.5 bg-white border border-gray-300 rounded px-2 py-0.5"
                  >
                    <span className="text-[11px] text-gray-500 font-medium">Qty:</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, (selectedState.quantity || 1) - 1))}
                      className="w-5 h-5 flex items-center justify-center text-[#451400] hover:bg-gray-100 rounded"
                    >
                      <Minus size={11} strokeWidth={2.5} />
                    </button>
                    <span className="font-bold text-xs w-4 text-center num-tabular">
                      {selectedState.quantity || 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, (selectedState.quantity || 1) + 1)}
                      className="w-5 h-5 flex items-center justify-center text-[#451400] hover:bg-gray-100 rounded"
                    >
                      <Plus size={11} strokeWidth={2.5} />
                    </button>
                  </div>
                ) : category.id === 'bases' ? (
                  <>
                    <PortionRadio value="regular" label="Normal" />
                    <PortionRadio value="half" label="Half" />
                  </>
                ) : category.id === 'mains' ? (
                  <>
                    <PortionRadio value="regular" label="Normal" />
                    <PortionRadio value="double" label="Double" />
                  </>
                ) : category.id === 'dips' ? (
                  <>
                    <PortionRadio value="regular" label="Normal" />
                    <PortionRadio value="side" label="Side" />
                  </>
                ) : (
                  <>
                    <PortionRadio value="regular" label="Normal" />
                    <PortionRadio value="light" label="Light" />
                    <PortionRadio value="side" label="Side" />
                  </>
                )}
              </div>
            )}

            {isFilteredOut && filterWarning && (
              <span className="text-[11px] font-sans text-[#8C1D24] flex items-center gap-1 mt-0.5">
                <AlertCircle size={11} /> {filterWarning}
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Alternating Vertical Columns (Exact Chipotle Screenshot Match) */}
        <div className="flex items-stretch self-stretch flex-shrink-0 text-center font-condensed num-tabular">
          {/* Column 1: Calories (Tinted Gray Vertical Track #EFEFEF) */}
          <div className="w-16 sm:w-24 bg-[#EFEFEF] flex items-center justify-center px-1">
            <span className="font-condensed font-bold text-sm sm:text-base text-[#2B110B] leading-none">
              {currentCal}cal
            </span>
          </div>

          {/* Column 2: Fat (White Vertical Track, Red Font #8C1D24) */}
          <div className="w-12 sm:w-20 bg-white flex items-center justify-center px-1">
            <span className="font-condensed font-bold text-sm sm:text-base text-[#8C1D24] leading-none">
              {currentFat}g
            </span>
          </div>

          {/* Column 3: Protein (Tinted Gray Vertical Track #EFEFEF, Green Font #2E6B34) */}
          <div className="w-12 sm:w-20 bg-[#EFEFEF] flex items-center justify-center px-1">
            <span className="font-condensed font-bold text-sm sm:text-base text-[#2E6B34] leading-none">
              {currentProtein}g
            </span>
          </div>

          {/* Column 4: Carbs (White Vertical Track, Gold Font #C68A1B) */}
          <div className="w-12 sm:w-20 bg-white flex items-center justify-center px-1">
            <span className="font-condensed font-bold text-sm sm:text-base text-[#C68A1B] leading-none">
              {currentCarb}g
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
