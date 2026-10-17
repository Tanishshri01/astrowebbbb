import React from 'react';

/**
 * Ornate Om Emblem in Sacred Haldi Yellow and Temple Vermilion Red
 */
export const OmEmblem: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="yellowGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="60%" stopColor="#FACC15" />
        <stop offset="100%" stopColor="#EAB308" />
      </radialGradient>
      <linearGradient id="redTempleBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#991B1B" />
        <stop offset="50%" stopColor="#7A0C16" />
        <stop offset="100%" stopColor="#4A050D" />
      </linearGradient>
    </defs>
    {/* Outer decorative ring */}
    <circle cx="50" cy="50" r="47" stroke="url(#yellowGlow)" strokeWidth="1.8" strokeDasharray="3 2" />
    <circle cx="50" cy="50" r="43" fill="url(#redTempleBg)" stroke="#FACC15" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="38" stroke="#FDE047" strokeWidth="0.8" opacity="0.7" />
    
    {/* 8-Petal sacred haldi points */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <circle
        key={angle}
        cx={50 + 40.5 * Math.cos((angle * Math.PI) / 180)}
        cy={50 + 40.5 * Math.sin((angle * Math.PI) / 180)}
        r="2"
        fill="#FACC15"
      />
    ))}

    {/* Sacred Om Glyph */}
    <text
      x="50"
      y="65"
      textAnchor="middle"
      fill="url(#yellowGlow)"
      fontSize="42"
      fontWeight="800"
      fontFamily="'Noto Sans Kannada', 'Noto Sans Devanagari', serif"
      style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.6))' }}
    >
      ॐ
    </text>
  </svg>
);

/**
 * 12-Rashi Vedic Celestial Zodiac Wheel in Yellow and Red
 */
export const ZodiacWheel: React.FC<{ className?: string }> = ({ className = 'w-[500px] h-[500px]' }) => {
  const rashis = [
    { kn: 'ಮೇಷ', hi: 'मेष', en: 'Aries', glyph: '♈' },
    { kn: 'ವೃಷಭ', hi: 'वृषभ', en: 'Taurus', glyph: '♉' },
    { kn: 'ಮಿಥುನ', hi: 'मिथुन', en: 'Gemini', glyph: '♊' },
    { kn: 'ಕರ್ಕ', hi: 'कर्क', en: 'Cancer', glyph: '♋' },
    { kn: 'ಸಿಂಹ', hi: 'सिंह', en: 'Leo', glyph: '♌' },
    { kn: 'ಕನ್ಯಾ', hi: 'कन्या', en: 'Virgo', glyph: '♍' },
    { kn: 'ತುಲಾ', hi: 'तुला', en: 'Libra', glyph: '♎' },
    { kn: 'ವೃಶ್ಚಿಕ', hi: 'वृश्चिक', en: 'Scorpio', glyph: '♏' },
    { kn: 'ಧನು', hi: 'धनु', en: 'Sagittarius', glyph: '♐' },
    { kn: 'ಮಕರ', hi: 'मकर', en: 'Capricorn', glyph: '♑' },
    { kn: 'ಕುಂಭ', hi: 'कुंभ', en: 'Aquarius', glyph: '♒' },
    { kn: 'ಮೀನ', hi: 'मीन', en: 'Pisces', glyph: '♓' },
  ];

  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full animate-spin-slow opacity-35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wheelYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FACC15" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#EAB308" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="sunGlowRed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#991B1B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4A050D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Center aura */}
        <circle cx="300" cy="300" r="280" fill="url(#sunGlowRed)" />

        {/* Concentric Vedic circles */}
        <circle cx="300" cy="300" r="290" stroke="url(#wheelYellow)" strokeWidth="1.8" strokeDasharray="4 6" />
        <circle cx="300" cy="300" r="275" stroke="url(#wheelYellow)" strokeWidth="2.2" />
        <circle cx="300" cy="300" r="235" stroke="url(#wheelYellow)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="300" cy="300" r="200" stroke="url(#wheelYellow)" strokeWidth="1.8" />
        <circle cx="300" cy="300" r="140" stroke="url(#wheelYellow)" strokeWidth="1.2" />
        <circle cx="300" cy="300" r="80" stroke="url(#wheelYellow)" strokeWidth="2.2" strokeDasharray="6 4" />
        <circle cx="300" cy="300" r="40" stroke="url(#wheelYellow)" strokeWidth="1.2" />

        {/* 12 Divisional Rays (Rashi Houses) */}
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = index * 30;
          const rad = (angle * Math.PI) / 180;
          const x1 = 300 + 80 * Math.cos(rad);
          const y1 = 300 + 80 * Math.sin(rad);
          const x2 = 300 + 275 * Math.cos(rad);
          const y2 = 300 + 275 * Math.sin(rad);
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#wheelYellow)"
              strokeWidth="1"
              opacity="0.8"
            />
          );
        })}

        {/* 12 Rashi Symbols */}
        {rashis.map((rashi, index) => {
          const angle = index * 30 + 15;
          const rad = (angle * Math.PI) / 180;
          const x = 300 + 240 * Math.cos(rad);
          const y = 300 + 240 * Math.sin(rad);
          return (
            <g key={rashi.en} transform={`translate(${x}, ${y})`}>
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fill="#FACC15"
                fontSize="17"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {rashi.glyph}
              </text>
              <text
                y="16"
                textAnchor="middle"
                fill="#FFFBEB"
                fontSize="10"
                fontFamily="'Noto Sans Kannada', 'Noto Sans Devanagari', sans-serif"
                opacity="0.9"
              >
                {rashi.kn}
              </text>
            </g>
          );
        })}

        {/* Inner Navagraha 9 sacred dots */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45;
          const rad = (angle * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={300 + 60 * Math.cos(rad)}
              cy={300 + 60 * Math.sin(rad)}
              r="3.5"
              fill="#FACC15"
            />
          );
        })}
        <circle cx="300" cy="300" r="5" fill="#FEF08A" />
      </svg>

      {/* Center Static Radiant Om in Temple Red and Haldi Yellow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 rounded-full bg-[#7A0C16]/90 border-2 border-[#FACC15] flex items-center justify-center shadow-lg shadow-[#FACC15]/20 backdrop-blur-xs">
          <span className="text-3xl font-extrabold text-[#FACC15] drop-shadow-md">ॐ</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Traditional Sacred Diya (Brass Oil Lamp) with flame animation
 */
export const SacredDiya: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="flameGlowYellow" cx="50%" cy="60%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#FEF08A" />
        <stop offset="65%" stopColor="#FACC15" />
        <stop offset="90%" stopColor="#E11D48" />
        <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="brassLampYellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="40%" stopColor="#FACC15" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
    </defs>

    {/* Flame Aura */}
    <circle cx="50" cy="34" r="22" fill="url(#flameGlowYellow)" opacity="0.45" className="animate-pulse-subtle" />

    {/* Sacred Flame */}
    <path
      d="M50 12 C44 24, 38 32, 43 42 C46 47, 54 47, 57 42 C62 32, 56 24, 50 12 Z"
      fill="url(#flameGlowYellow)"
      className="animate-pulse-subtle"
      style={{ transformOrigin: '50% 40%' }}
    />
    <circle cx="50" cy="36" r="3.5" fill="#FFFFFF" />

    {/* Brass Diya Body */}
    <path
      d="M20 54 Q50 64 80 54 Q75 74 50 74 Q25 74 20 54 Z"
      fill="url(#brassLampYellow)"
      stroke="#FEF08A"
      strokeWidth="1.2"
    />
    <ellipse cx="50" cy="54" rx="30" ry="6" fill="#78350F" stroke="#FACC15" strokeWidth="1" />

    {/* Pedestal Base */}
    <path
      d="M44 74 L40 86 Q50 90 60 86 L56 74 Z"
      fill="url(#brassLampYellow)"
      stroke="#FACC15"
      strokeWidth="1"
    />
    <ellipse cx="50" cy="87" rx="16" ry="3.5" fill="url(#brassLampYellow)" />
  </svg>
);

/**
 * South Indian Vedic Astrology Kundali / Horoscope Chart Visual in Yellow & Red
 */
export const VedicChartVisual: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="chartBgRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A050D" />
        <stop offset="50%" stopColor="#320308" />
        <stop offset="100%" stopColor="#200205" />
      </linearGradient>
      <linearGradient id="chartYellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="50%" stopColor="#FACC15" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
    </defs>

    {/* Outer parchment border */}
    <rect x="10" y="10" width="380" height="380" rx="8" fill="url(#chartBgRed)" stroke="url(#chartYellow)" strokeWidth="2.5" />
    <rect x="18" y="18" width="364" height="364" rx="4" fill="none" stroke="#FACC15" strokeWidth="1" strokeDasharray="3 3" opacity="0.65" />

    {/* South Indian 4x4 Kundali Grid */}
    <rect x="30" y="30" width="340" height="340" fill="none" stroke="url(#chartYellow)" strokeWidth="2" />
    
    {/* Grid lines */}
    <line x1="115" y1="30" x2="115" y2="370" stroke="url(#chartYellow)" strokeWidth="1.4" />
    <line x1="285" y1="30" x2="285" y2="370" stroke="url(#chartYellow)" strokeWidth="1.4" />
    <line x1="30" y1="115" x2="370" y2="115" stroke="url(#chartYellow)" strokeWidth="1.4" />
    <line x1="30" y1="285" x2="370" y2="285" stroke="url(#chartYellow)" strokeWidth="1.4" />

    {/* Center Courtyard (Brahmasthana) */}
    <rect x="115" y="115" width="170" height="170" fill="#7A0C16" fillOpacity="0.75" stroke="url(#chartYellow)" strokeWidth="1.8" />

    {/* House 1: Meena */}
    <text x="72" y="70" fill="#FACC15" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Noto Sans Kannada', serif">ಮೀನ</text>
    <text x="72" y="90" fill="#FFFBEB" fontSize="10" textAnchor="middle" opacity="0.85">ಗುರು / गुरु</text>

    {/* House 2: Mesha (Lagna) */}
    <text x="200" y="65" fill="#FACC15" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Noto Sans Kannada', serif">ಮೇಷ (ಲಗ್ನ / लग्न)</text>
    <text x="200" y="85" fill="#FFFBEB" fontSize="10" textAnchor="middle" opacity="0.95">ಕುಜ · ಸೂರ್ಯ</text>

    {/* House 3: Vrishabha */}
    <text x="328" y="70" fill="#FACC15" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Noto Sans Kannada', serif">ವೃಷಭ</text>
    <text x="328" y="90" fill="#FFFBEB" fontSize="10" textAnchor="middle" opacity="0.85">ಶುಕ್ರ / शुक्र</text>

    {/* House 4: Mithuna */}
    <text x="328" y="195" fill="#FACC15" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Noto Sans Kannada', serif">ಮಿಥುನ</text>
    <text x="328" y="215" fill="#FFFBEB" fontSize="10" textAnchor="middle" opacity="0.85">ಬುಧ / बुध</text>

    {/* House 5: Karka */}
    <text x="328" y="325" fill="#FACC15" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Noto Sans Kannada', serif">ಕರ್ಕಾಟಕ</text>
    <text x="328" y="345" fill="#FFFBEB" fontSize="10" textAnchor="middle" opacity="0.85">ಚಂದ್ರ / चन्द्र</text>

    {/* House 6: Simha */}
    <text x="200" y="325" fill="#FACC15" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Noto Sans Kannada', serif">ಸಿಂಹ</text>
    <text x="200" y="345" fill="#FFFBEB" fontSize="10" textAnchor="middle" opacity="0.85">ರವಿ / रवि</text>

    {/* House 7: Kanya */}
    <text x="72" y="325" fill="#FACC15" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Noto Sans Kannada', serif">ಕನ್ಯಾ</text>
    <text x="72" y="345" fill="#FFFBEB" fontSize="10" textAnchor="middle" opacity="0.85">ರಾಹು / राहु</text>

    {/* House 12: Kumbha */}
    <text x="72" y="195" fill="#FACC15" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="'Noto Sans Kannada', serif">ಕುಂಭ</text>
    <text x="72" y="215" fill="#FFFBEB" fontSize="10" textAnchor="middle" opacity="0.85">ಶನಿ / शनि</text>

    {/* Center Yantra Motif */}
    <circle cx="200" cy="200" r="60" fill="none" stroke="#FACC15" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="200" cy="200" r="45" fill="none" stroke="#FACC15" strokeWidth="1.4" />
    <text x="200" y="195" fill="#FEF08A" fontSize="24" fontWeight="bold" textAnchor="middle">ॐ</text>
    <text x="200" y="220" fill="#FFFBEB" fontSize="11" fontWeight="700" textAnchor="middle">ಜಾತಕ ಚಕ್ರ</text>
    <text x="200" y="235" fill="#FACC15" fontSize="9" textAnchor="middle" opacity="0.9">वैदिक जन्मकुंडली</text>
  </svg>
);

/**
 * Sacred Homa Kund Graphic in Yellow and Red
 */
export const SacredHomaKund: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 300 300"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="copperKundRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC2626" />
        <stop offset="50%" stopColor="#991B1B" />
        <stop offset="100%" stopColor="#5E0812" />
      </linearGradient>
      <radialGradient id="homaFireYellow" cx="50%" cy="60%" r="55%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#FEF08A" />
        <stop offset="65%" stopColor="#FACC15" />
        <stop offset="90%" stopColor="#E11D48" />
        <stop offset="100%" stopColor="#7A0C16" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Tier 1 (Base) */}
    <polygon points="30,220 270,220 250,260 50,260" fill="#4A050D" stroke="#FACC15" strokeWidth="1.2" />
    {/* Tier 2 */}
    <polygon points="50,180 250,180 230,220 70,220" fill="url(#copperKundRed)" stroke="#FACC15" strokeWidth="1.5" />
    {/* Tier 3 (Inner Lip) */}
    <polygon points="75,150 225,150 210,180 90,180" fill="#7A0C16" stroke="#FACC15" strokeWidth="1.2" />
    {/* Altar Interior */}
    <polygon points="90,180 210,180 190,195 110,195" fill="#200205" />

    {/* Sandalwood sticks */}
    <line x1="85" y1="175" x2="215" y2="145" stroke="#451A03" strokeWidth="10" strokeLinecap="round" />
    <line x1="95" y1="145" x2="205" y2="175" stroke="#78350F" strokeWidth="9" strokeLinecap="round" />

    {/* Homa Fire Flames in Vibrant Haldi Yellow and Sacred Red */}
    <circle cx="150" cy="115" r="70" fill="url(#homaFireYellow)" opacity="0.4" className="animate-pulse-subtle" />
    <path
      d="M150 45 C130 85 115 110 120 145 C125 165 175 165 180 145 C185 110 170 85 150 45 Z"
      fill="url(#homaFireYellow)"
      className="animate-pulse-subtle"
    />
    <path
      d="M140 70 C125 100 125 125 135 145 C145 130 165 135 160 115 C155 90 145 80 140 70 Z"
      fill="#FEF08A"
      opacity="0.9"
    />
    <circle cx="150" cy="130" r="14" fill="#FFFFFF" opacity="0.95" />

    {/* Sacred Swastika on front rim */}
    <text x="150" y="246" fill="#FACC15" fontSize="17" fontWeight="bold" textAnchor="middle">卐</text>
  </svg>
);
