import React from 'react';
import CavaLogo from './CavaLogo';
import { ShieldCheck, AlertTriangle, Info } from 'lucide-react';

export default function Footer({ onOpenNutrition, onOpenFilters }) {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E5E0DB] text-[#2B110B] mt-16 pt-12 pb-24 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5E0DB]">
          <div>
            <CavaLogo className="h-6" />
            <p className="text-xs text-[#6E6E6E] mt-2 max-w-md">
              An independent, interactive Mediterranean calorie and macronutrient calculator designed to help users track personalized bowls.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#451400]">
            <button
              onClick={onOpenNutrition}
              className="hover:underline underline-offset-2"
            >
              Full Nutrition Facts
            </button>
            <button
              onClick={onOpenFilters}
              className="hover:underline underline-offset-2"
            >
              Dietary & Allergen Preferences
            </button>
            <a
              href="https://cava.com/allergens"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-2 text-[#6E6E6E]"
            >
              Official CAVA Allergen Guide ↗
            </a>
          </div>
        </div>

        {/* Legal Disclaimer & Protection Notices */}
        <div className="pt-8 space-y-4 text-[11px] text-[#6E6E6E] leading-relaxed">
          {/* 1. Affiliation Disclaimer */}
          <div className="flex items-start space-x-2 bg-white p-3.5 rounded border border-[#E5E0DB]">
            <ShieldCheck size={16} className="text-[#451400] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#2B110B] font-bold block mb-0.5">
                Independent Educational Tool & Non-Affiliation Disclaimer
              </strong>
              <span>
                This website is an independent educational tool and nutritional calculator created for consumer reference and macro tracking. This website is <strong>not affiliated with, authorized, maintained, sponsored, or endorsed by CAVA Group, Inc.</strong>, CAVA Mezze Grill, or any of their affiliates or subsidiaries.
              </span>
            </div>
          </div>

          {/* 2. Trademark Fair Use */}
          <div className="flex items-start space-x-2 bg-white p-3.5 rounded border border-[#E5E0DB]">
            <Info size={16} className="text-[#D9822B] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#2B110B] font-bold block mb-0.5">
                Trademark Notice & Nominative Fair Use
              </strong>
              <span>
                "CAVA", "Crazy Feta®", and all associated menu items, trade names, service marks, and logos referenced on this site are the registered and unregistered trademarks of CAVA Group, Inc. Their use on this website is strictly for informational, nominative, and educational purposes to accurately identify food items under the doctrine of <em>nominative fair use</em>. No sponsorship, affiliation, or commercial endorsement is claimed or implied.
              </span>
            </div>
          </div>

          {/* 3. Nutrition & Allergen Advisory */}
          <div className="flex items-start space-x-2 bg-white p-3.5 rounded border border-[#E5E0DB]">
            <AlertTriangle size={16} className="text-[#8C1D24] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#2B110B] font-bold block mb-0.5">
                Nutritional Accuracy & Allergen Advisory
              </strong>
              <span>
                Nutritional values (calories, fat, protein, carbohydrates, sodium, etc.) are compiled from official publicly distributed CAVA nutrition and allergen documentation. Because items are handcrafted in restaurant kitchens, actual nutritional values may vary due to portion sizes, ingredient substitutions, and regional supplier differences. This tool is not medical, dietary, or healthcare advice. If you have severe food allergies, always inform restaurant employees directly.
              </span>
            </div>
          </div>

          {/* 4. No Commercial Transactions */}
          <p className="text-[10px] text-gray-500 pt-2">
            This site does not process digital orders, accept payment, or sell food. All food orders must be placed through official CAVA channels (cava.com or in-store).
          </p>

          {/* Bottom Copyright */}
          <div className="pt-4 border-t border-[#E5E0DB] flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
            <span>© {new Date().getFullYear()} CAVA Nutrition Calculator (Independent Project). All rights reserved.</span>
            <span>Made for Mediterranean macro & health tracking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
