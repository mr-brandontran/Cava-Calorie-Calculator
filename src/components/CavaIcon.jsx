import React from 'react';

// Cute, semi-realistic illustrated vector icons for all CAVA ingredients
export default function CavaIcon({ id, className = "w-10 h-10" }) {
  const getIcon = () => {
    switch (id) {
      // ----------------------------------------------------
      // BASES
      // ----------------------------------------------------
      case 'saffron-basmati-rice':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="46" rx="26" ry="10" fill="#E8D8A6" />
            <ellipse cx="32" cy="42" rx="24" ry="12" fill="#F4A261" />
            <path d="M12 40 Q32 18 52 40 Z" fill="#F9C74F" />
            {/* Saffron Rice grains */}
            <ellipse cx="28" cy="30" rx="5" ry="2" transform="rotate(-15 28 30)" fill="#FFE3A8" />
            <ellipse cx="36" cy="28" rx="5" ry="2" transform="rotate(20 36 28)" fill="#FFF0C8" />
            <ellipse cx="22" cy="35" rx="5" ry="2" transform="rotate(35 22 35)" fill="#F9C74F" />
            <ellipse cx="42" cy="34" rx="5" ry="2" transform="rotate(-25 42 34)" fill="#FFE3A8" />
            <ellipse cx="32" cy="36" rx="5" ry="2" fill="#FFF4D4" />
            {/* Red Saffron threads */}
            <path d="M26 26 Q29 24 33 27" stroke="#D00000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M38 31 Q41 29 44 32" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M20 33 Q24 31 25 34" stroke="#D00000" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'brown-rice':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="46" rx="26" ry="10" fill="#D5C5B5" />
            <ellipse cx="32" cy="42" rx="24" ry="12" fill="#B08968" />
            <path d="M12 40 Q32 18 52 40 Z" fill="#CDB49B" />
            {/* Brown Basmati grains */}
            <ellipse cx="28" cy="30" rx="5" ry="2" transform="rotate(-20 28 30)" fill="#E6CCB2" />
            <ellipse cx="36" cy="27" rx="5" ry="2" transform="rotate(25 36 27)" fill="#DDB892" />
            <ellipse cx="23" cy="36" rx="5" ry="2" transform="rotate(40 23 36)" fill="#7F5539" />
            <ellipse cx="41" cy="34" rx="5" ry="2" transform="rotate(-30 41 34)" fill="#E6CCB2" />
            <ellipse cx="32" cy="37" rx="5" ry="2" fill="#B08968" />
            {/* Herb fleck */}
            <circle cx="34" cy="32" r="1.5" fill="#40916C" />
            <circle cx="26" cy="38" r="1.2" fill="#52B788" />
          </svg>
        );

      case 'black-lentils':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="45" rx="25" ry="10" fill="#2B2D42" />
            <path d="M14 42 Q32 20 50 42 Z" fill="#1A1C20" />
            {/* Shiny Black Caviar Beluga Lentils */}
            <ellipse cx="26" cy="32" rx="4" ry="3" fill="#2B2D42" stroke="#484E5D" strokeWidth="0.8" />
            <circle cx="25" cy="31" r="1" fill="#FFFFFF" opacity="0.7" />
            <ellipse cx="35" cy="29" rx="4.5" ry="3.5" fill="#242730" stroke="#505668" strokeWidth="0.8" />
            <circle cx="34" cy="28" r="1.2" fill="#FFFFFF" opacity="0.8" />
            <ellipse cx="41" cy="36" rx="4" ry="3" fill="#1C1E24" stroke="#484E5D" strokeWidth="0.8" />
            <ellipse cx="23" cy="39" rx="4.2" ry="3.2" fill="#2D313B" stroke="#505668" strokeWidth="0.8" />
            <circle cx="22" cy="38" r="1" fill="#FFFFFF" opacity="0.7" />
            <ellipse cx="33" cy="38" rx="4.5" ry="3.2" fill="#20222A" />
            <circle cx="32" cy="37" r="1.2" fill="#FFFFFF" opacity="0.6" />
          </svg>
        );

      case 'super-greens':
      case 'power-greens':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <path d="M18 48 C14 36 20 22 30 20 C36 12 46 16 48 24 C56 26 56 42 46 48 Z" fill="#2D6A4F" />
            <path d="M22 46 C20 38 24 28 32 26 C36 20 44 24 46 30 C52 34 50 44 42 46 Z" fill="#52B788" />
            {/* Shredded purple cabbage & brussels ribbons */}
            <path d="M24 38 Q32 30 38 42" stroke="#7209B7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M30 26 Q36 28 42 24" stroke="#B5179E" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M26 44 Q34 38 40 46" stroke="#95D5B2" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M30 34 Q38 32 44 38" stroke="#D8F3DC" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'arugula':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Peppery jagged wild arugula sprigs */}
            <path d="M20 54 Q30 40 38 18" stroke="#40916C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Left Leaf */}
            <path d="M24 44 C16 40 18 32 26 36 C18 30 22 22 30 28 C26 20 32 16 38 18 C36 26 34 32 32 40 Z" fill="#2D6A4F" />
            <path d="M26 36 C22 32 24 26 30 28" fill="#52B788" />
            {/* Right Leaf */}
            <path d="M32 38 C40 34 38 26 34 32 C42 26 40 18 36 24 C44 18 42 12 38 18" fill="#1B4332" />
          </svg>
        );

      case 'baby-spinach':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Tender spinach leaves */}
            <path d="M22 52 Q28 42 34 30" stroke="#74C69D" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M34 16 C22 18 16 30 22 42 C28 50 38 44 42 34 C46 24 42 14 34 16 Z" fill="#2D6A4F" />
            <path d="M33 18 C25 22 22 32 26 40 C30 32 34 24 33 18 Z" fill="#40916C" />
            {/* Dewdrop */}
            <circle cx="28" cy="28" r="2" fill="#FFFFFF" opacity="0.8" />
            {/* Second small leaf */}
            <path d="M36 46 C42 44 48 36 46 28 C40 28 36 34 36 46 Z" fill="#52B788" />
          </svg>
        );

      case 'romaine':
      case 'shredded-romaine':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Crisp chopped romaine ribbed strands */}
            <rect x="24" y="24" width="8" height="26" rx="4" transform="rotate(-15 28 37)" fill="#D8F3DC" stroke="#95D5B2" strokeWidth="1.5" />
            <rect x="34" y="20" width="7" height="28" rx="3.5" transform="rotate(12 37 34)" fill="#B7E4C7" stroke="#74C69D" strokeWidth="1.5" />
            <path d="M20 28 C16 20 26 14 32 20 C26 24 22 28 20 28 Z" fill="#52B788" />
            <path d="M38 18 C44 12 52 18 46 26 C42 24 38 22 38 18 Z" fill="#40916C" />
            <rect x="29" y="32" width="6" height="20" rx="3" fill="#E9F5ED" />
          </svg>
        );

      // ----------------------------------------------------
      // DIPS & SPREADS
      // ----------------------------------------------------
      case 'crazy-feta':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Creamy white whipped feta with jalapeño and red chili oil */}
            <ellipse cx="32" cy="46" rx="24" ry="10" fill="#E8E4DF" />
            <path d="M12 40 C10 26 20 18 32 18 C46 18 54 26 52 40 C48 48 16 48 12 40 Z" fill="#FDFBF7" stroke="#ECE7E1" strokeWidth="1.5" />
            <path d="M20 36 C24 30 32 28 38 32 C44 36 40 42 32 40 C24 38 18 40 20 36 Z" fill="#F5EFE6" />
            {/* Roasted red jalapeño chili drops */}
            <ellipse cx="26" cy="30" rx="2.5" ry="1.5" transform="rotate(20 26 30)" fill="#D90429" />
            <ellipse cx="37" cy="27" rx="3" ry="2" transform="rotate(-15 37 27)" fill="#EF233C" />
            <circle cx="34" cy="38" r="2" fill="#D90429" />
            <path d="M29 32 Q32 30 35 34" stroke="#D90429" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            {/* Roasted green jalapeño flecks */}
            <rect x="30" y="24" width="3" height="3" rx="1" fill="#2D6A4F" />
            <rect x="42" y="34" width="3" height="2.5" rx="1" fill="#40916C" />
            <rect x="22" y="38" width="2.5" height="2.5" rx="1" fill="#1B4332" />
          </svg>
        );

      case 'tzatziki':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="46" rx="24" ry="10" fill="#E2EAF0" />
            <path d="M14 42 C12 28 22 20 32 20 C44 20 52 28 50 42 C46 48 18 48 14 42 Z" fill="#FFFFFF" stroke="#D7E3EC" strokeWidth="1.5" />
            {/* Grated cucumber bits */}
            <rect x="22" y="32" width="5" height="2" rx="1" transform="rotate(30 22 32)" fill="#52B788" />
            <rect x="34" y="28" width="6" height="2" rx="1" transform="rotate(-20 34 28)" fill="#74C69D" />
            <rect x="40" y="36" width="5" height="2" rx="1" transform="rotate(45 40 36)" fill="#40916C" />
            <rect x="26" y="40" width="5" height="2" rx="1" transform="rotate(-10 26 40)" fill="#52B788" />
            {/* Dill sprig */}
            <path d="M28 26 Q32 24 36 28" stroke="#1B4332" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <line x1="30" y1="24" x2="31" y2="27" stroke="#1B4332" strokeWidth="1" strokeLinecap="round" />
            <line x1="34" y1="25" x2="33" y2="28" stroke="#1B4332" strokeWidth="1" strokeLinecap="round" />
            {/* Cracked black pepper */}
            <circle cx="31" cy="36" r="0.8" fill="#2B2D42" />
            <circle cx="37" cy="34" r="0.8" fill="#2B2D42" />
          </svg>
        );

      case 'hummus':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="46" rx="24" ry="10" fill="#D4B996" />
            <path d="M14 40 C12 28 20 20 32 20 C46 20 52 28 50 40 C46 48 18 48 14 40 Z" fill="#E8CDA7" stroke="#D4B996" strokeWidth="1.5" />
            {/* Swirl well */}
            <path d="M22 34 C26 28 38 28 42 34 C44 40 36 42 30 38" fill="none" stroke="#DDA15E" strokeWidth="4" strokeLinecap="round" />
            {/* Golden olive oil pool in center */}
            <ellipse cx="32" cy="32" rx="6" ry="3" fill="#D4A373" opacity="0.9" />
            {/* Paprika dusting */}
            <circle cx="28" cy="32" r="1" fill="#BC4749" />
            <circle cx="34" cy="30" r="1.2" fill="#BC4749" />
            <circle cx="37" cy="33" r="0.9" fill="#BC4749" />
            <circle cx="31" cy="35" r="1" fill="#BC4749" />
            {/* Whole chickpea garnish */}
            <ellipse cx="32" cy="27" rx="3" ry="2.5" fill="#FAF0CA" stroke="#DDA15E" strokeWidth="0.8" />
          </svg>
        );

      case 'roasted-eggplant':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="46" rx="24" ry="10" fill="#9C8994" />
            <path d="M14 40 C12 28 20 20 32 20 C46 20 52 28 50 40 C46 48 18 48 14 40 Z" fill="#B5A4AF" stroke="#9C8994" strokeWidth="1.5" />
            {/* Charred roasted eggplant purée specks */}
            <ellipse cx="26" cy="34" rx="4" ry="2" transform="rotate(15 26 34)" fill="#594A56" />
            <ellipse cx="38" cy="32" rx="5" ry="2.5" transform="rotate(-25 38 32)" fill="#4A3B47" />
            <ellipse cx="32" cy="38" rx="4" ry="2" fill="#6A5A67" />
            {/* Charred black grill flecks */}
            <circle cx="24" cy="38" r="1" fill="#201A1E" />
            <circle cx="36" cy="27" r="1.2" fill="#201A1E" />
            <circle cx="43" cy="36" r="0.9" fill="#201A1E" />
            {/* Herb garnish */}
            <circle cx="31" cy="30" r="1.5" fill="#40916C" />
          </svg>
        );

      case 'harissa':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="46" rx="24" ry="10" fill="#9E2A2B" />
            <path d="M14 40 C12 28 20 20 32 20 C46 20 52 28 50 40 C46 48 18 48 14 40 Z" fill="#C1121F" stroke="#9E2A2B" strokeWidth="1.5" />
            {/* Fiery textured chili folds */}
            <path d="M22 36 Q32 28 42 34" stroke="#780000" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M24 30 Q34 32 40 28" stroke="#E63946" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Crushed coriander and chili seeds */}
            <ellipse cx="27" cy="32" rx="1.5" ry="1" fill="#FFE3A8" />
            <ellipse cx="36" cy="35" rx="1.5" ry="1" fill="#FFE3A8" />
            <ellipse cx="33" cy="27" rx="1.5" ry="1" fill="#FFE3A8" />
            <ellipse cx="41" cy="31" rx="1.5" ry="1" fill="#FFE3A8" />
          </svg>
        );

      case 'red-pepper-hummus':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="46" rx="24" ry="10" fill="#D05B39" />
            <path d="M14 40 C12 28 20 20 32 20 C46 20 52 28 50 40 C46 48 18 48 14 40 Z" fill="#E76F51" stroke="#D05B39" strokeWidth="1.5" />
            <path d="M22 34 C26 28 38 28 42 34 C44 40 36 42 30 38" fill="none" stroke="#F4A261" strokeWidth="4" strokeLinecap="round" />
            {/* Roasted red pepper strip */}
            <path d="M28 28 Q32 26 36 29" stroke="#9E2A2B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      // ----------------------------------------------------
      // MAINS & PROTEINS
      // ----------------------------------------------------
      case 'harissa-honey-chicken':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Glossy caramelized chicken cubes with honey harissa glaze */}
            {/* Cube 1 */}
            <path d="M18 36 L28 28 L38 34 L28 44 Z" fill="#D9480F" stroke="#9E2A2B" strokeWidth="1.2" />
            <path d="M18 36 L28 44 L28 50 L18 42 Z" fill="#A73209" />
            <path d="M28 44 L38 34 L38 40 L28 50 Z" fill="#842304" />
            {/* Charred grill marks */}
            <line x1="22" y1="34" x2="32" y2="38" stroke="#3A1102" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="30" x2="35" y2="34" stroke="#3A1102" strokeWidth="1.5" strokeLinecap="round" />

            {/* Cube 2 (top) */}
            <path d="M28 22 L38 14 L48 20 L38 28 Z" fill="#F76707" stroke="#9E2A2B" strokeWidth="1.2" />
            <path d="M28 22 L38 28 L38 34 L28 28 Z" fill="#D9480F" />
            <path d="M38 28 L48 20 L48 26 L38 34 Z" fill="#A73209" />
            <line x1="32" y1="20" x2="42" y2="24" stroke="#3A1102" strokeWidth="1.5" strokeLinecap="round" />

            {/* Honey glaze shine */}
            <circle cx="34" cy="22" r="2" fill="#FFE066" opacity="0.9" />
            <circle cx="26" cy="34" r="1.5" fill="#FFE066" opacity="0.8" />
          </svg>
        );

      case 'grilled-chicken':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Charred golden grilled chicken pieces with Mediterranean herbs */}
            <path d="M16 38 L28 26 L42 32 L30 46 Z" fill="#E9C46A" stroke="#C49B38" strokeWidth="1.2" />
            <path d="M16 38 L30 46 L28 52 L14 44 Z" fill="#D4A347" />
            <path d="M30 46 L42 32 L44 38 L32 52 Z" fill="#B38029" />
            {/* Deep black grill marks */}
            <line x1="20" y1="34" x2="34" y2="40" stroke="#3D2605" strokeWidth="2" strokeLinecap="round" />
            <line x1="26" y1="30" x2="38" y2="34" stroke="#3D2605" strokeWidth="2" strokeLinecap="round" />
            {/* Piece 2 */}
            <path d="M32 22 L42 16 L50 22 L40 30 Z" fill="#F4A261" />
            <line x1="36" y1="20" x2="46" y2="24" stroke="#3D2605" strokeWidth="1.8" strokeLinecap="round" />
            {/* Oregano specks */}
            <circle cx="28" cy="38" r="1" fill="#2D6A4F" />
            <circle cx="34" cy="32" r="1" fill="#2D6A4F" />
          </svg>
        );

      case 'grilled-steak':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Tender sirloin steak cubes with charred crust and pink interior */}
            <path d="M16 36 L30 26 L44 32 L30 44 Z" fill="#6A040F" stroke="#370617" strokeWidth="1.2" />
            <path d="M16 36 L30 44 L28 50 L14 42 Z" fill="#E63946" /> {/* Juicy pink center */}
            <path d="M30 44 L44 32 L46 38 L32 50 Z" fill="#370617" /> {/* Dark crust */}
            {/* Charred sear lines */}
            <line x1="22" y1="32" x2="36" y2="38" stroke="#160307" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="28" y1="28" x2="40" y2="34" stroke="#160307" strokeWidth="2.2" strokeLinecap="round" />
            {/* Piece 2 */}
            <path d="M30 20 L42 14 L50 20 L38 28 Z" fill="#4B0510" />
            <line x1="34" y1="18" x2="46" y2="22" stroke="#160307" strokeWidth="2" strokeLinecap="round" />
            {/* Cracked salt & pepper */}
            <circle cx="26" cy="34" r="0.9" fill="#FFFFFF" />
            <circle cx="34" cy="40" r="0.9" fill="#000000" />
          </svg>
        );

      case 'braised-lamb':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Tender shredded pulled lamb shoulder with rosemary jus */}
            <path d="M16 44 C14 34 22 24 32 22 C42 22 50 30 48 42 C44 48 20 50 16 44 Z" fill="#582F0E" />
            {/* Shredded strands */}
            <path d="M20 40 Q30 32 42 38" stroke="#7F4F24" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M22 34 Q32 28 40 32" stroke="#936639" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M26 44 Q36 38 44 42" stroke="#A68A64" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Rosemary leaf */}
            <path d="M32 20 Q36 14 38 18" stroke="#40916C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'spicy-lamb-meatballs':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Two roasted spicy Mediterranean meatballs */}
            {/* Ball 1 */}
            <circle cx="26" cy="36" r="14" fill="#6A381F" stroke="#43281C" strokeWidth="1.5" />
            <circle cx="24" cy="34" r="11" fill="#7F4F24" />
            {/* Chili flakes on ball 1 */}
            <circle cx="22" cy="32" r="1.5" fill="#D90429" />
            <circle cx="29" cy="36" r="1.3" fill="#D90429" />
            <circle cx="26" cy="40" r="1.2" fill="#52B788" />

            {/* Ball 2 */}
            <circle cx="42" cy="28" r="12" fill="#582F0E" stroke="#3A1E0E" strokeWidth="1.5" />
            <circle cx="40" cy="26" r="9.5" fill="#6F3F19" />
            <circle cx="38" cy="24" r="1.5" fill="#D90429" />
            <circle cx="44" cy="28" r="1.2" fill="#52B788" />
          </svg>
        );

      case 'glazed-salmon':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Pink salmon fillet with pomegranate molasses glaze */}
            <path d="M16 42 L24 24 L48 20 L42 40 Z" fill="#F28482" stroke="#E07A5F" strokeWidth="1.2" />
            {/* Flaky salmon muscle lines */}
            <line x1="22" y1="34" x2="38" y2="28" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <line x1="26" y1="38" x2="42" y2="34" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            {/* Pomegranate glaze on top edge */}
            <path d="M22 25 L48 21 Q44 26 40 28 L24 30 Z" fill="#590D22" />
            {/* Sesame seeds */}
            <ellipse cx="32" cy="26" rx="1.5" ry="0.8" fill="#FFF3B0" />
            <ellipse cx="40" cy="24" rx="1.5" ry="0.8" fill="#FFF3B0" />
          </svg>
        );

      case 'falafel':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Crispy golden-brown falafel ball split open revealing herb-green center */}
            {/* Whole falafel */}
            <circle cx="42" cy="30" r="12" fill="#8B5E3C" stroke="#6F4518" strokeWidth="1.5" />
            <ellipse cx="40" cy="26" rx="2" ry="1" fill="#FFE8D6" />
            <ellipse cx="45" cy="32" rx="1.5" ry="0.8" fill="#FFE8D6" />

            {/* Split falafel showing green center */}
            <circle cx="24" cy="38" r="14" fill="#6F4518" />
            <circle cx="24" cy="38" r="11" fill="#588157" stroke="#3A5A40" strokeWidth="1.5" />
            {/* Chickpea texture & herbs */}
            <circle cx="21" cy="35" r="2.2" fill="#DDA15E" />
            <circle cx="26" cy="40" r="2" fill="#DDA15E" />
            <circle cx="27" cy="34" r="1.5" fill="#344E41" />
            <circle cx="20" cy="41" r="1.5" fill="#344E41" />
          </svg>
        );

      case 'roasted-vegetables':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Charred zucchini round & red pepper strip */}
            {/* Zucchini slice */}
            <circle cx="26" cy="38" r="12" fill="#52B788" stroke="#2D6A4F" strokeWidth="2" />
            <circle cx="26" cy="38" r="8" fill="#D8F3DC" />
            <line x1="18" y1="36" x2="34" y2="36" stroke="#1B4332" strokeWidth="1.8" />
            <line x1="20" y1="41" x2="32" y2="41" stroke="#1B4332" strokeWidth="1.8" />

            {/* Red Bell Pepper Strip */}
            <path d="M34 22 C42 16 50 24 44 38 C40 36 38 28 34 22 Z" fill="#E63946" stroke="#9E2A2B" strokeWidth="1.5" />
            <line x1="38" y1="24" x2="44" y2="28" stroke="#540B0E" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );

      // ----------------------------------------------------
      // TOPPINGS
      // ----------------------------------------------------
      case 'fiery-broccoli':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Charred broccoli floret with chili flakes and olive oil */}
            {/* Stalk */}
            <path d="M28 44 L36 44 L34 54 L30 54 Z" fill="#74C69D" stroke="#40916C" strokeWidth="1.2" />
            {/* Broccoli Crown */}
            <circle cx="24" cy="36" r="9" fill="#2D6A4F" />
            <circle cx="40" cy="36" r="9" fill="#1B4332" />
            <circle cx="32" cy="26" r="10" fill="#40916C" />
            <circle cx="26" cy="28" r="7" fill="#52B788" />
            <circle cx="38" cy="28" r="7" fill="#2D6A4F" />

            {/* Charred brown-black roasted tips */}
            <ellipse cx="32" cy="20" rx="6" ry="2.5" fill="#1A281F" />
            <ellipse cx="20" cy="32" rx="4" ry="2" fill="#1A281F" />
            <ellipse cx="44" cy="32" rx="4" ry="2" fill="#1A281F" />

            {/* Fiery Red Chili Flakes */}
            <circle cx="28" cy="28" r="1.8" fill="#E63946" />
            <circle cx="36" cy="32" r="2.2" fill="#E63946" />
            <circle cx="31" cy="37" r="1.6" fill="#F77F00" />
            <circle cx="24" cy="38" r="1.8" fill="#E63946" />
            <circle cx="39" cy="26" r="1.5" fill="#F77F00" />

            {/* Glistening oil highlight */}
            <circle cx="30" cy="24" r="1.2" fill="#FFFFFF" opacity="0.8" />
          </svg>
        );

      case 'pickled-onions':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Vibrant magenta/neon-pink pickled onion rings */}
            <ellipse cx="32" cy="34" rx="18" ry="12" fill="none" stroke="#F72585" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-15 32 34)" />
            <ellipse cx="34" cy="32" rx="14" ry="8" fill="none" stroke="#7209B7" strokeWidth="2.5" strokeLinecap="round" transform="rotate(15 34 32)" />
            <path d="M18 42 Q30 48 44 40" stroke="#FF70A6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M22 24 Q34 20 42 26" stroke="#B5179E" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Brine drop */}
            <circle cx="36" cy="46" r="1.5" fill="#F72585" opacity="0.8" />
          </svg>
        );

      case 'crumbled-feta':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Textured white feta crumbles and cubes with oregano */}
            {/* Main cube */}
            <rect x="20" y="24" width="16" height="16" rx="2" fill="#FDFBF7" stroke="#E6E1DA" strokeWidth="1.2" transform="rotate(-10 28 32)" />
            <rect x="32" y="28" width="14" height="14" rx="2" fill="#F4EFEA" stroke="#E6E1DA" strokeWidth="1.2" transform="rotate(15 39 35)" />
            {/* Small crumbles */}
            <circle cx="18" cy="44" r="3" fill="#FDFBF7" />
            <circle cx="32" cy="46" r="2.5" fill="#FDFBF7" />
            <circle cx="46" cy="42" r="3.2" fill="#FDFBF7" />
            {/* Oregano flecks */}
            <circle cx="26" cy="28" r="1" fill="#40916C" />
            <circle cx="38" cy="34" r="1" fill="#40916C" />
          </svg>
        );

      case 'avocado':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Avocado slice half with brown pit hole & lime green flesh */}
            <path d="M32 14 C22 14 16 26 16 38 C16 48 24 54 32 54 C40 54 48 48 48 38 C48 26 42 14 32 14 Z" fill="#386641" />
            <path d="M32 17 C24 17 19 28 19 38 C19 46 25 51 32 51 C39 51 45 46 45 38 C45 28 40 17 32 17 Z" fill="#A7C957" />
            <path d="M32 22 C26 22 23 30 23 38 C23 44 27 48 32 48 C37 48 41 44 41 38 C41 30 38 22 32 22 Z" fill="#E9F5DB" />
            {/* Pit hollow */}
            <circle cx="32" cy="40" r="7" fill="#6B705C" />
            <circle cx="32" cy="40" r="5.5" fill="#A5A58D" />
          </svg>
        );

      case 'persian-cucumber':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Crisp cucumber coins */}
            <circle cx="28" cy="34" r="14" fill="#2D6A4F" stroke="#1B4332" strokeWidth="2" />
            <circle cx="28" cy="34" r="11" fill="#D8F3DC" />
            {/* Seeds */}
            <ellipse cx="28" cy="30" rx="1.5" ry="3" fill="#95D5B2" />
            <ellipse cx="28" cy="38" rx="1.5" ry="3" fill="#95D5B2" />
            <ellipse cx="24" cy="34" rx="3" ry="1.5" fill="#95D5B2" />
            <ellipse cx="32" cy="34" rx="3" ry="1.5" fill="#95D5B2" />

            {/* Second coin */}
            <circle cx="42" cy="28" r="10" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1.5" />
            <circle cx="42" cy="28" r="8" fill="#D8F3DC" />
          </svg>
        );

      case 'tomato-cucumber':
      case 'tomato-onion':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Diced ripe red tomatoes and fresh cucumbers/onions */}
            {/* Tomato wedge */}
            <path d="M18 42 C16 30 26 20 38 22 C40 34 32 44 18 42 Z" fill="#E63946" stroke="#9E2A2B" strokeWidth="1.5" />
            <path d="M22 36 C24 28 32 26 34 30 C30 36 26 38 22 36 Z" fill="#D90429" />
            <circle cx="27" cy="32" r="1.5" fill="#FFE3A8" />

            {/* Cucumber or Onion chunk */}
            <circle cx="40" cy="38" r="9" fill="#52B788" stroke="#2D6A4F" strokeWidth="1.5" />
            <circle cx="40" cy="38" r="6.5" fill="#D8F3DC" />
          </svg>
        );

      case 'kalamata-olives':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Glossy dark purple-black Kalamata olives */}
            <ellipse cx="28" cy="36" rx="13" ry="9" transform="rotate(-30 28 36)" fill="#240046" stroke="#10002B" strokeWidth="1.5" />
            <ellipse cx="26" cy="34" rx="8" ry="3" transform="rotate(-30 26 34)" fill="#3C096C" />
            <circle cx="24" cy="32" r="1.5" fill="#FFFFFF" opacity="0.8" />

            {/* Olive 2 (sliced half) */}
            <ellipse cx="42" cy="28" rx="10" ry="8" transform="rotate(25 42 28)" fill="#240046" stroke="#10002B" strokeWidth="1.5" />
            <ellipse cx="42" cy="28" rx="4" ry="2" fill="#5A189A" />
          </svg>
        );

      case 'sumac-cabbage-slaw':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Shredded purple cabbage in tangy sumac */}
            <path d="M18 44 Q32 26 44 42" stroke="#7209B7" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M22 36 Q34 22 42 30" stroke="#560BAD" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M16 32 Q28 40 46 36" stroke="#B5179E" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Sumac powder specks */}
            <circle cx="28" cy="34" r="1" fill="#480CA8" />
            <circle cx="36" cy="38" r="1" fill="#480CA8" />
          </svg>
        );

      case 'fire-roasted-corn':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Sweet yellow corn kernels with blistered charred spots */}
            <ellipse cx="24" cy="34" rx="5" ry="6" fill="#FFB703" stroke="#FB8500" strokeWidth="1.2" />
            <circle cx="24" cy="32" r="1.5" fill="#3D2605" /> {/* Char spot */}

            <ellipse cx="34" cy="28" rx="5" ry="6" fill="#FFC300" stroke="#FB8500" strokeWidth="1.2" />
            <circle cx="35" cy="27" r="1.8" fill="#3D2605" />

            <ellipse cx="38" cy="38" rx="5" ry="6" fill="#FFB703" stroke="#FB8500" strokeWidth="1.2" />
            <circle cx="37" cy="40" r="1.5" fill="#3D2605" />

            <ellipse cx="28" cy="42" rx="5" ry="6" fill="#FFD000" stroke="#FB8500" strokeWidth="1.2" />
            <circle cx="29" cy="42" r="1.2" fill="#3D2605" />
          </svg>
        );

      case 'pita-crisps':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Crunchy golden-brown pita chip triangle with bubble blisters */}
            <polygon points="16,48 48,46 32,16" fill="#DDA15E" stroke="#BC6C25" strokeWidth="1.8" />
            <polygon points="20,44 44,43 32,22" fill="#E9C46A" />
            {/* Toasted bubble blister */}
            <ellipse cx="32" cy="32" rx="4" ry="2.5" fill="#BC6C25" opacity="0.8" />
            <circle cx="38" cy="38" r="1.8" fill="#BC6C25" opacity="0.8" />
            <circle cx="26" cy="40" r="2" fill="#BC6C25" opacity="0.8" />
          </svg>
        );

      case 'salt-brined-pickles':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Ribbed crinkle-cut salty dill pickle slice */}
            <circle cx="32" cy="34" r="15" fill="#588157" stroke="#3A5A40" strokeWidth="2" />
            <circle cx="32" cy="34" r="11" fill="#A3B18A" />
            <path d="M22 34 Q32 30 42 34" stroke="#3A5A40" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <circle cx="28" cy="32" r="1" fill="#344E41" />
            <circle cx="36" cy="36" r="1" fill="#344E41" />
          </svg>
        );

      // ----------------------------------------------------
      // DRESSINGS
      // ----------------------------------------------------
      case 'greek-goddess':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Creamy herb dressing cup */}
            <path d="M20 22 L44 22 L40 48 L24 48 Z" fill="#E8F5E9" stroke="#A5D6A7" strokeWidth="1.5" />
            <ellipse cx="32" cy="22" rx="12" ry="4" fill="#C8E6C9" stroke="#A5D6A7" strokeWidth="1.5" />
            {/* Chive specks */}
            <circle cx="28" cy="32" r="1.2" fill="#2E7D32" />
            <circle cx="36" cy="36" r="1.2" fill="#2E7D32" />
            <circle cx="32" cy="42" r="1.2" fill="#2E7D32" />
          </svg>
        );

      case 'garlic-dressing':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Fluffy white garlic toum swirl */}
            <ellipse cx="32" cy="46" rx="22" ry="8" fill="#E0E0E0" />
            <path d="M16 42 C14 30 22 22 32 20 C42 22 50 30 48 42 Z" fill="#FFFFFF" stroke="#EEEEEE" strokeWidth="1.5" />
            <path d="M32 20 C32 14 30 14 32 10 C34 14 36 16 32 20 Z" fill="#FFFFFF" />
            {/* Garlic clove accent */}
            <circle cx="32" cy="34" r="3" fill="#FFF9C4" opacity="0.6" />
          </svg>
        );

      case 'greek-vinaigrette':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <path d="M20 22 L44 22 L40 48 L24 48 Z" fill="#F4A261" stroke="#E76F51" strokeWidth="1.5" />
            <ellipse cx="32" cy="22" rx="12" ry="4" fill="#E9C46A" />
            {/* Red wine vinegar layer */}
            <path d="M23 40 L41 40 L40 48 L24 48 Z" fill="#9E2A2B" opacity="0.85" />
            {/* Oregano flakes */}
            <circle cx="30" cy="30" r="1" fill="#2D6A4F" />
            <circle cx="35" cy="34" r="1" fill="#2D6A4F" />
          </svg>
        );

      case 'skhug':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Vibrant emerald spicy Yemeni herbal chili sauce */}
            <path d="M20 22 L44 22 L40 48 L24 48 Z" fill="#38B000" stroke="#007200" strokeWidth="1.5" />
            <ellipse cx="32" cy="22" rx="12" ry="4" fill="#70E000" />
            {/* Coriander & pepper seeds */}
            <circle cx="28" cy="32" r="1.5" fill="#CCFF33" />
            <circle cx="36" cy="38" r="1.5" fill="#CCFF33" />
            <circle cx="32" cy="44" r="1.2" fill="#004B23" />
          </svg>
        );

      case 'hot-harissa-vinaigrette':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <path d="M20 22 L44 22 L40 48 L24 48 Z" fill="#D90429" stroke="#9E2A2B" strokeWidth="1.5" />
            <ellipse cx="32" cy="22" rx="12" ry="4" fill="#EF233C" />
            {/* Floating chili flakes */}
            <circle cx="28" cy="30" r="1.3" fill="#FFE3A8" />
            <circle cx="35" cy="36" r="1.5" fill="#FFE3A8" />
          </svg>
        );

      case 'lemon-herb-tahini':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <path d="M20 22 L44 22 L40 48 L24 48 Z" fill="#DDA15E" stroke="#BC6C25" strokeWidth="1.5" />
            <ellipse cx="32" cy="22" rx="12" ry="4" fill="#E9C46A" />
            {/* Lemon drop */}
            <circle cx="32" cy="32" r="2.5" fill="#FFD166" />
            <circle cx="28" cy="40" r="1" fill="#40916C" />
          </svg>
        );

      case 'balsamic-date-vinaigrette':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <path d="M20 22 L44 22 L40 48 L24 48 Z" fill="#3D0C11" stroke="#250508" strokeWidth="1.5" />
            <ellipse cx="32" cy="22" rx="12" ry="4" fill="#540B0E" />
            <path d="M30 28 Q34 26 36 32" stroke="#9E2A2B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'yogurt-dill':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <path d="M20 22 L44 22 L40 48 L24 48 Z" fill="#F8F9FA" stroke="#DEE2E6" strokeWidth="1.5" />
            <ellipse cx="32" cy="22" rx="12" ry="4" fill="#FFFFFF" />
            <path d="M30 30 Q33 26 36 30" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <circle cx="28" cy="38" r="1" fill="#40916C" />
          </svg>
        );

      // ----------------------------------------------------
      // SIDES & BAKERY
      // ----------------------------------------------------
      case 'side-pita':
      case 'whole-pita':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Fluffy warm pocket pita with grill blister spots */}
            <ellipse cx="32" cy="34" rx="22" ry="18" fill="#F4E0C8" stroke="#DDA15E" strokeWidth="2" />
            <ellipse cx="32" cy="32" rx="18" ry="14" fill="#FAEDCD" />
            {/* Toast blisters */}
            <ellipse cx="26" cy="28" rx="4" ry="2.5" fill="#BC6C25" opacity="0.8" />
            <ellipse cx="38" cy="34" rx="5" ry="3" fill="#BC6C25" opacity="0.8" />
            <circle cx="28" cy="38" r="2" fill="#99582A" opacity="0.7" />
          </svg>
        );

      case 'pita-chips':
      case 'harissa-bbq-pita-chips':
      case 'kids-pita-chips':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <polygon points="18,48 48,46 32,16" fill="#DDA15E" stroke="#BC6C25" strokeWidth="1.8" />
            <polygon points="22,44 44,43 32,22" fill="#E9C46A" />
            {/* Harissa BBQ reddish dusting */}
            {id === 'harissa-bbq-pita-chips' && (
              <circle cx="32" cy="34" r="6" fill="#D90429" opacity="0.4" />
            )}
            <circle cx="32" cy="34" r="2" fill="#BC6C25" />
          </svg>
        );

      case 'chocolate-chip-blondie':
      case 'greyston-brownie':
      case 'apricot-honey-cookie':
      case 'dark-chocolate-oat-cookie':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {id.includes('brownie') ? (
              <>
                <rect x="18" y="20" width="28" height="26" rx="3" fill="#3D1A10" stroke="#2B110B" strokeWidth="2" />
                <rect x="22" y="24" width="20" height="18" rx="2" fill="#4A2810" />
                <rect x="26" y="28" width="5" height="5" rx="1" fill="#1C0B06" />
                <rect x="34" y="32" width="6" height="5" rx="1" fill="#1C0B06" />
              </>
            ) : (
              <>
                <circle cx="32" cy="34" r="16" fill="#DDA15E" stroke="#BC6C25" strokeWidth="2" />
                <circle cx="32" cy="34" r="13" fill="#E9C46A" />
                {/* Chocolate chips or apricots */}
                <circle cx="26" cy="28" r="2.5" fill="#3D1A10" />
                <circle cx="36" cy="30" r="3" fill="#3D1A10" />
                <circle cx="28" cy="38" r="2.2" fill="#3D1A10" />
                <circle cx="37" cy="38" r="2.5" fill="#3D1A10" />
              </>
            )}
          </svg>
        );

      // ----------------------------------------------------
      // DRINKS
      // ----------------------------------------------------
      case 'classic-lemonade-16oz':
      case 'cucumber-mint-lime-16oz':
      case 'blueberry-lavender-16oz':
      case 'sweet-tea-16oz':
      case 'unsweetened-black-tea-16oz':
      case 'jasmine-green-tea-16oz':
      case 'maine-root-soda-16oz':
      case 'maine-root-diet-soda-16oz':
        const drinkColor = id.includes('lemonade')
          ? '#FFE600'
          : id.includes('cucumber')
          ? '#95D5B2'
          : id.includes('blueberry')
          ? '#7209B7'
          : id.includes('sweet-tea')
          ? '#B08968'
          : id.includes('jasmine')
          ? '#D8F3DC'
          : '#3D1A10';

        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Clear Cup with Ice & Liquid */}
            <path d="M20 18 L44 18 L40 52 L24 52 Z" fill="#FFFFFF" stroke="#CED4DA" strokeWidth="1.5" />
            <path d="M22 26 L42 26 L39 50 L25 50 Z" fill={drinkColor} opacity="0.85" />
            {/* Straw */}
            <line x1="36" y1="8" x2="30" y2="46" stroke="#E63946" strokeWidth="3" strokeLinecap="round" />
            {/* Ice cube */}
            <rect x="26" y="30" width="8" height="8" rx="2" fill="#FFFFFF" opacity="0.6" />
          </svg>
        );

      case 'chocolate-milk':
      case 'milk-1-percent':
      case 'honest-apple-juice':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            {/* Cute milk carton / juice box */}
            <polygon points="22,24 32,16 42,24 32,32" fill="#E9ECEF" stroke="#CED4DA" strokeWidth="1.2" />
            <rect x="22" y="24" width="20" height="26" fill="#F8F9FA" stroke="#CED4DA" strokeWidth="1.5" />
            <rect x="25" y="32" width="14" height="12" fill={id.includes('chocolate') ? '#7F4F24' : id.includes('apple') ? '#D90429' : '#4361EE'} />
          </svg>
        );

      // Default Mediterranean Bowl icon
      default:
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs">
            <ellipse cx="32" cy="46" rx="24" ry="10" fill="#E5E0DB" />
            <path d="M12 36 C12 24 20 16 32 16 C44 16 52 24 52 36 C48 46 16 46 12 36 Z" fill="#2C3E2D" />
            <circle cx="32" cy="30" r="6" fill="#E63946" />
            <circle cx="26" cy="34" r="5" fill="#52B788" />
            <circle cx="38" cy="34" r="5" fill="#F4A261" />
          </svg>
        );
    }
  };

  return (
    <div className={`flex items-center justify-center ${className} select-none`}>
      {getIcon()}
    </div>
  );
}
