import React from 'react';
import { MapPin, User, ShoppingBag } from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  filterCount, 
  onOpenFilters, 
  onOpenNutrition,
  selectedCount 
}) {
  return (
    <header className="bg-white border-b border-chipotle-border sticky top-0 z-40">
      {/* Top Corporate Navigation Bar (Chipotle style) */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Brand Medallion & Links */}
        <div className="flex items-center space-x-6 lg:space-x-10">
          {/* CAVA Circular Seal Logo */}
          <div 
            onClick={() => setActiveTab('custom')}
            className="flex items-center space-x-2 cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-full bg-chipotle-dark border-2 border-chipotle-dark flex items-center justify-center text-white shadow-xs">
              <span className="font-condensed font-black text-sm tracking-widest text-[#F9F7F4]">
                CAVA
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-condensed font-bold tracking-wider text-chipotle-text uppercase">
            <button 
              onClick={() => setActiveTab('custom')} 
              className={`hover:text-chipotle-dark transition-colors pb-1 ${activeTab === 'custom' ? 'text-chipotle-dark font-black' : ''}`}
            >
              Menu
            </button>
            <button 
              onClick={() => setActiveTab('curated-bowls')} 
              className={`hover:text-chipotle-dark transition-colors pb-1 ${activeTab === 'curated-bowls' ? 'text-chipotle-dark font-black' : ''}`}
            >
              Curated Bowls
            </button>
            <button 
              onClick={() => setActiveTab('curated-pitas')} 
              className={`hover:text-chipotle-dark transition-colors pb-1 ${activeTab === 'curated-pitas' ? 'text-chipotle-dark font-black' : ''}`}
            >
              Curated Pitas
            </button>
            
            {/* Active Nutrition Tab Indicator */}
            <div className="relative pb-1 cursor-pointer">
              <span className="text-chipotle-dark font-black">NUTRITION</span>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-chipotle-red mx-auto w-7 rounded-full"></div>
            </div>
          </nav>
        </div>

        {/* Right Utility Navigation */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-xs font-condensed font-bold uppercase tracking-wider text-chipotle-text">
          <div className="hidden sm:flex items-center space-x-1.5 cursor-pointer hover:text-chipotle-dark">
            <MapPin size={15} className="text-chipotle-red" />
            <span>FIND A CAVA</span>
          </div>

          <div className="hidden md:flex items-center space-x-1.5 cursor-pointer hover:text-chipotle-dark">
            <User size={15} />
            <span>SIGN IN / JOIN</span>
          </div>

          {/* Bag Icon */}
          <button 
            onClick={onOpenNutrition}
            className="flex items-center space-x-1.5 bg-chipotle-tint hover:bg-gray-200 px-3 py-1.5 rounded-full transition-all text-chipotle-dark"
            title="View Order Summary"
          >
            <ShoppingBag size={16} />
            <span className="font-bold text-xs">{selectedCount}</span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex border-t border-chipotle-border/60 bg-chipotle-grayBg px-2 py-1.5">
        <button
          onClick={() => setActiveTab('custom')}
          className={`flex-1 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider rounded transition-all ${
            activeTab === 'custom'
              ? 'bg-white text-chipotle-dark shadow-2xs'
              : 'text-chipotle-muted'
          }`}
        >
          Build Your Bowl
        </button>
        <button
          onClick={() => setActiveTab('curated-bowls')}
          className={`flex-1 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider rounded transition-all ${
            activeTab === 'curated-bowls'
              ? 'bg-white text-chipotle-dark shadow-2xs'
              : 'text-chipotle-muted'
          }`}
        >
          Curated Bowls
        </button>
        <button
          onClick={() => setActiveTab('curated-pitas')}
          className={`flex-1 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider rounded transition-all ${
            activeTab === 'curated-pitas'
              ? 'bg-white text-chipotle-dark shadow-2xs'
              : 'text-chipotle-muted'
          }`}
        >
          Curated Pitas
        </button>
      </div>
    </header>
  );
}
