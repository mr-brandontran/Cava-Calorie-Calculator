import React from 'react';
import { X, Check } from 'lucide-react';
import { DIETARY_FILTERS } from '../data/cavaMenuData';

export default function DietaryModal({ isOpen, onClose, filters, onToggleFilter, onResetFilters }) {
  if (!isOpen) return null;

  const dietFilters = DIETARY_FILTERS.filter((f) => f.group === 'diet');
  const avoidingFilters = DIETARY_FILTERS.filter((f) => f.group === 'avoiding');
  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in">
      {/* Modal Surface */}
      <div 
        className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden transition-transform animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-cava-border/70 flex items-center justify-between bg-cava-cream">
          <div>
            <h3 className="text-base font-bold text-cava-charcoal">
              Dietary & Allergen Preferences
            </h3>
            <p className="text-xs text-cava-muted">
              Filter menu items based on your dietary lifestyle and allergens.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-cava-charcoal hover:bg-cava-sand flex items-center justify-center transition-all"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-6">
          {/* Lifestyles */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-cava-muted block mb-2.5">
              Plant-Based / Lifestyle
            </span>
            <div className="grid grid-cols-2 gap-2">
              {dietFilters.map((df) => {
                const isActive = !!filters[df.id];
                return (
                  <button
                    key={df.id}
                    onClick={() => onToggleFilter(df.id)}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all active:scale-95 ${
                      isActive
                        ? 'bg-cava-olive text-white border-cava-olive shadow-xs'
                        : 'bg-cava-cream/50 text-cava-charcoal border-cava-border hover:bg-cava-sand/40'
                    }`}
                  >
                    <span>{df.label}</span>
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                        isActive
                          ? 'bg-white text-cava-olive border-white'
                          : 'border-cava-border bg-white'
                      }`}
                    >
                      {isActive && <Check size={11} strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Allergens / Avoiding */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-cava-muted block mb-2.5">
              I'm Avoiding / Allergies
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {avoidingFilters.map((af) => {
                const isActive = !!filters[af.id];
                return (
                  <button
                    key={af.id}
                    onClick={() => onToggleFilter(af.id)}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all active:scale-95 ${
                      isActive
                        ? 'bg-cava-terracotta text-white border-cava-terracotta shadow-xs'
                        : 'bg-cava-cream/50 text-cava-charcoal border-cava-border hover:bg-cava-sand/40'
                    }`}
                  >
                    <span>{af.label}</span>
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                        isActive
                          ? 'bg-white text-cava-terracotta border-white'
                          : 'border-cava-border bg-white'
                      }`}
                    >
                      {isActive && <Check size={11} strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200/60 p-3 rounded-xl text-[11px] text-amber-900 leading-relaxed">
            <strong>Allergen Notice:</strong> While CAVA takes precautions, foods are prepared in shared kitchen areas. Please notify staff of severe allergies.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-cava-border/70 bg-cava-cream flex items-center justify-between safe-bottom">
          <button
            onClick={onResetFilters}
            className="text-xs font-semibold text-cava-muted hover:text-cava-charcoal underline"
          >
            Clear all
          </button>
          <button
            onClick={onClose}
            className="bg-cava-olive hover:bg-cava-oliveDark text-white px-6 py-2.5 rounded-xl font-bold text-xs tracking-wide shadow-sm transition-all active:scale-95"
          >
            Apply ({activeCount} Active)
          </button>
        </div>
      </div>
    </div>
  );
}
