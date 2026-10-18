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
    {/* Outer decorative golden border with dots */}
    <circle cx="50" cy="50" r="47" stroke="#FACC15" strokeWidth="2" strokeDasharray="3 2" />
    <circle cx="50" cy="50" r="43" fill="#6B0B14" stroke="#FACC15" strokeWidth="1.8" />
    <circle cx="50" cy="50" r="38" stroke="#FEF08A" strokeWidth="1" opacity="0.85" />
    
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

    {/* Sacred Om Vector Picture in Bright Golden Yellow */}
    <g transform="translate(23.8, 23) scale(0.1471)">
      <path
        d="M 90.456847,353.9498 C 51.797347,340.13485 23.72672,305.75839 12.612487,258.6184 C 7.5684267,237.22321 6.1421397,201.86984 10.323594,201.86984 C 11.712834,201.86984 15.42322,211.57056 18.568972,223.427 C 25.452892,249.37152 37.19436,273.76855 48.535988,285.69407 C 67.374717,305.50242 114.0356,313.26029 140.92106,301.05394 C 161.86409,291.54544 170.35697,268.94603 161.24995,246.95931 C 154.21242,229.96943 138.24701,224.28836 108.50834,228.19197 C 108.50834,228.19197 90.282834,208.57398 84.476417,173.73548 L 103.15738,175.42939 C 125.65731,177.46962 142.64532,172.49605 151.46236,161.28728 C 159.74765,150.75419 159.5685,146.68046 150.34841,135.96157 C 137.04396,120.49428 113.15511,124.41248 64.786577,149.99522 L 40.381632,109.08518 L 50.613137,101.2812 C 76.253387,81.724339 120.77357,71.947329 146.11011,80.309169 C 169.18841,87.925649 186.12724,118.14755 181.60247,143.63298 C 178.54327,160.86286 164.72752,184.99524 154.05369,191.75339 L 144.84862,197.58162 L 157.56351,203.31522 C 179.17018,213.05833 192.36061,205.61034 208.12001,174.76849 C 229.92949,132.0869 244.0745,121.0378 276.96658,120.99051 C 292.28176,120.96847 297.73268,122.57499 308.90312,130.4031 C 336.78213,149.94016 351.9622,190.39693 348.62804,236.27272 C 344.40474,294.37435 316.88374,329.61601 275.73415,329.61601 C 253.15086,329.61601 238.59451,321.69526 227.00729,303.10156 C 216.82976,286.76927 212.24334,254.42288 218.08805,240.19369 C 220.89208,233.36732 221.39892,233.13578 221.58223,238.59686 C 221.91916,248.63689 233.34159,264.95549 243.82827,270.37835 C 269.55794,283.68369 306.49479,266.96693 321.10832,235.4032 C 332.20339,211.4394 326.25105,165.21656 311.02084,157.06552 C 307.83453,155.36024 299.96089,153.96502 293.5244,153.96502 C 279.84214,153.96502 269.09709,163.80155 254.03263,190.11774 C 248.82442,199.21613 240.05943,210.97175 234.55486,216.24128 C 225.61134,224.80312 222.41769,225.82225 204.53067,225.82225 L 184.51412,225.82225 L 190.98415,240.19369 C 200.2451,260.76437 199.80694,294.18704 190.00976,314.53347 C 181.35272,332.51252 161.33618,350.71469 145.33374,355.16013 C 129.75572,359.4876 104.38789,358.9281 90.456847,353.9498 z M 165.8338,75.923739 C 156.97908,60.814399 151.52974,32.606158 157.46546,32.606158 C 164.43775,47.732319 178.73037,61.227101 194.03409,70.643259 C 221.52091,83.949329 249.39257,78.578529 279.84247,54.108239 C 286.54595,48.721279 292.48231,44.913138 293.0345,45.645698 C 300.4697,57.184233 313.331,66.613261 317.58219,80.021449 C 317.58219,85.678729 293.22867,101.96033 274.01214,109.15007 C 226.38264,122.8706 193.96598,117.44304 165.8338,75.923739 z M 189.83603,40.997228 L 220.84514,6.6137488 L 255.30593,38.514418 C 243.51876,48.222549 235.00994,63.289118 221.54391,70.930009 C 210.90372,63.086273 195.02308,53.837816 189.83603,40.997228 z"
        fill="#FDE047"
        stroke="#FACC15"
        strokeWidth="1.5"
      />
    </g>
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
