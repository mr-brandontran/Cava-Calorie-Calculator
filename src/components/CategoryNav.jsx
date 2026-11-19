import React, { useEffect, useRef } from 'react';

export default function CategoryNav({ categories, selectedItems, activeSection, onSelectCategory }) {
  const scrollContainerRef = useRef(null);

  const getCategoryCount = (categoryId) => {
    return Object.values(selectedItems).filter(item => item.categoryId === categoryId).length;
  };

  // Keep active pill scrolled into view on mobile
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeBtn = scrollContainerRef.current.querySelector(`[data-category-id="${activeSection}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeSection]);

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-chipotle-border py-2.5 my-2 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.06)]">
      <div 
        ref={scrollContainerRef}
        className="flex space-x-2 overflow-x-auto no-scrollbar scroll-smooth px-1"
      >
        {categories.map((cat) => {
          const count = getCategoryCount(cat.id);
          const isActive = activeSection === cat.id;

          return (
            <button
              key={cat.id}
              data-category-id={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-[4px] font-condensed font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'bg-chipotle-dark text-white shadow-md ring-2 ring-chipotle-dark/30 scale-102 font-black'
                  : 'bg-chipotle-tint/80 text-chipotle-text border border-chipotle-border/60 hover:bg-gray-200'
              }`}
            >
              <span>{cat.name.split('(')[0].trim()}</span>
              {count > 0 && (
                <span
                  className={`text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold ${
                    isActive ? 'bg-chipotle-red text-white' : 'bg-chipotle-dark text-white'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
