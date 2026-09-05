import React from 'react';

interface EltechLogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  showTagline?: boolean;
  variant?: 'fused' | 'badge' | 'compact' | 'symbol-only';
  id?: string;
}

/**
 * Modern High-Tech Fused Logo for ELTECH INC. - ELECTRONIC TECHNOLOGY
 * Seamlessly integrates:
 * 1. Silicon Microprocessor ECU Chip with glowing core & pins
 * 2. High-speed PCB Circuit Traces & Bus Pathways
 * 3. Precision Italic Stencil Typography: "ELTECH INC."
 * 4. Micro-tracked "ELECTRONIC TECHNOLOGY" subtitle
 * 5. Triple Concentric Crescent Wave Arcs (Signal/ECU Telemetry Waves)
 */
export const EltechLogo: React.FC<EltechLogoProps> = ({
  className = "h-11",
  theme = 'dark',
  showTagline = true,
  variant = 'fused',
  id = "eltech-fused-logo"
}) => {
  const isDark = theme === 'dark' || theme === 'auto';

  // 1. Standalone Fused Symbol (Microprocessor + Circuit + Wave Arcs)
  if (variant === 'symbol-only') {
    return (
      <svg
        id={id}
        viewBox="0 0 110 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto select-none ${className}`}
        aria-label="Eltech Fused Symbol"
      >
        <defs>
          <linearGradient id={`${id}-symChipGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id={`${id}-symWaveGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id={`${id}-symGlow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Microprocessor */}
        <g transform="translate(30, 35)">
          {/* Pins */}
          {[-12, -6, 0, 6, 12].map((p, i) => (
            <React.Fragment key={i}>
              <line x1="-22" y1={p} x2="-16" y2={p} stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="16" y1={p} x2="22" y2={p} stroke="#38bdf8" strokeWidth="1.5" />
              <line x1={p} y1="-22" x2={p} y2="-16" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1={p} y1="16" x2={p} y2="22" stroke="#38bdf8" strokeWidth="1.5" />
            </React.Fragment>
          ))}
          {/* Chip Body */}
          <rect x="-16" y="-16" width="32" height="32" rx="3" fill="#0b1e3b" stroke="#38bdf8" strokeWidth="1.5" />
          <rect x="-10" y="-10" width="20" height="20" rx="2" fill="url(#${id}-symChipGrad)" />
          <rect x="-5" y="-5" width="10" height="10" fill="#bae6fd" filter={`url(#${id}-symGlow)`} />
        </g>

        {/* Connecting Circuit Wave Trace */}
        <path d="M 52 35 L 68 35" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* 3 Crescent Waves */}
        <g transform="translate(48, 5) scale(0.72)">
          <path d="M 55 14 A 26 26 0 1 0 55 58 A 24 24 0 1 1 55 14 Z" fill={`url(#${id}-symWaveGrad)`} />
          <path d="M 61 20 A 19 19 0 1 0 61 52 A 17 17 0 1 1 61 20 Z" fill={`url(#${id}-symWaveGrad)`} />
          <path d="M 66 25 A 13 13 0 1 0 66 47 A 11 11 0 1 1 66 25 Z" fill={`url(#${id}-symWaveGrad)`} />
        </g>
      </svg>
    );
  }

  // 2. Futuristic Cybernetic Titanium Badge Variant (for Footer or Showcase Card)
  if (variant === 'badge') {
    return (
      <div 
        className={`inline-flex items-center select-none rounded-xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-sky-500/50 shadow-lg shadow-cyan-950/40 backdrop-blur-md group ${className}`} 
        id={id}
      >
        <div className="bg-slate-950/95 rounded-[11px] px-3.5 py-1.5 flex items-center h-full w-full border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
          <svg
            viewBox="0 0 490 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto max-w-full"
            role="img"
            aria-label="ELTECH INC. - ELECTRONIC TECHNOLOGY"
          >
            <defs>
              <linearGradient id={`${id}-badgeChipGlow`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </linearGradient>

              <linearGradient id={`${id}-badgeWaves`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>

              <linearGradient id={`${id}-badgeTextGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>

              <filter id={`${id}-badgeNeon`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Circuit Traces embedded in the badge */}
            <g stroke="#0ea5e9" strokeWidth="1" opacity="0.3" fill="none">
              <path d="M 38 12 L 80 12 L 95 24 L 280 24" />
              <path d="M 38 62 L 105 62 L 120 52 L 310 52" />
              <path d="M 390 20 L 420 20 L 435 32" />
              <circle cx="80" cy="12" r="1.5" fill="#38bdf8" />
              <circle cx="105" cy="62" r="1.5" fill="#38bdf8" />
              <circle cx="420" cy="20" r="1.5" fill="#38bdf8" />
            </g>

            {/* Fused Microprocessor on Left */}
            <g transform="translate(36, 37)">
              {/* Glowing Aura */}
              <circle cx="0" cy="0" r="24" fill="#0284c7" opacity="0.25" filter={`url(#${id}-badgeNeon)`} />
              
              {/* Connector Pins with solder pads */}
              {[-12, -6, 0, 6, 12].map((pos, idx) => (
                <React.Fragment key={`bp-${idx}`}>
                  <line x1="-22" y1={pos} x2="-15" y2={pos} stroke="#7dd3fc" strokeWidth="1.6" />
                  <line x1="15" y1={pos} x2="22" y2={pos} stroke="#7dd3fc" strokeWidth="1.6" />
                  <line x1={pos} y1="-22" x2={pos} y2="-15" stroke="#7dd3fc" strokeWidth="1.6" />
                  <line x1={pos} y1="15" x2={pos} y2="22" stroke="#7dd3fc" strokeWidth="1.6" />
                  <circle cx="-22" cy={pos} r="1.2" fill="#38bdf8" />
                  <circle cx="22" cy={pos} r="1.2" fill="#38bdf8" />
                </React.Fragment>
              ))}

              {/* Silicon Case */}
              <rect x="-16" y="-16" width="32" height="32" rx="3.5" fill="#0a192f" stroke="#0284c7" strokeWidth="1.6" />
              
              {/* Inner Die */}
              <rect x="-10" y="-10" width="20" height="20" rx="2" fill="#0369a1" stroke="#38bdf8" strokeWidth="1" />
              <rect x="-5" y="-5" width="10" height="10" fill="#38bdf8" />
              <rect x="-2" y="-2" width="4" height="4" fill="#ffffff" />
              <circle cx="-12" cy="-12" r="1.2" fill="#bae6fd" />
            </g>

            {/* Direct Circuit Flow from Chip to Lettering */}
            <path d="M 58 37 L 76 37" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <circle cx="76" cy="37" r="2" fill="#38bdf8" />

            {/* Typography Group (Slanted Italic High-Tech) */}
            <g transform="skewX(-13) translate(22, 0)">
              {/* ELTECH INC. */}
              <text
                x="68"
                y="41"
                fontFamily="'Inter', 'Montserrat', 'Segoe UI', system-ui, -apple-system, sans-serif"
                fontSize="38"
                fontWeight="900"
                letterSpacing="0.04em"
                fill={`url(#${id}-badgeTextGrad)`}
              >
                ELTECH INC.
              </text>

              {/* Cyber Stencil Inset on 'E' */}
              <rect x="62" y="22" width="22" height="3" fill="#38bdf8" opacity="0.95" />

              {/* Subtitle: ELECTRONIC TECHNOLOGY */}
              {showTagline && (
                <g>
                  <text
                    x="70"
                    y="60"
                    fontFamily="'Inter', 'Montserrat', 'Segoe UI', system-ui, -apple-system, sans-serif"
                    fontSize="11.5"
                    fontWeight="800"
                    letterSpacing="0.32em"
                    fill="#38bdf8"
                  >
                    ELECTRONIC TECHNOLOGY
                  </text>
                </g>
              )}
            </g>

            {/* Fused Circuit Bridge to Wave Arcs */}
            <path d="M 378 36 L 400 36" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="400" cy="36" r="2" fill="#38bdf8" />

            {/* 3 Concentric Crescent Waves on the Right */}
            <g transform="translate(18, -4)">
              <path
                d="M 408.00 13.56 A 31.00 31.00 0 1 0 408.00 66.44 A 28.9 28.9 0 1 1 408.00 13.56 Z"
                fill={`url(#${id}-badgeWaves)`}
                filter={`url(#${id}-badgeNeon)`}
              />
              <path
                d="M 416.25 21.20 A 23.00 23.00 0 1 0 416.25 58.80 A 21.3 21.3 0 1 1 416.25 21.20 Z"
                fill={`url(#${id}-badgeWaves)`}
              />
              <path
                d="M 423.75 28.07 A 15.50 15.50 0 1 0 423.75 51.93 A 14.2 14.2 0 1 1 423.75 28.07 Z"
                fill={`url(#${id}-badgeWaves)`}
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // 3. PRIMARY FUSED MODERN TECH LOGO (Sleek, transparent, unified horizontal lockup)
  return (
    <div 
      className={`inline-flex items-center select-none transition-all duration-300 hover:brightness-110 ${className}`} 
      id={id}
    >
      <svg
        viewBox="0 0 510 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full drop-shadow-[0_2px_14px_rgba(6,182,212,0.22)]"
        role="img"
        aria-label="ELTECH INC. - ELECTRONIC TECHNOLOGY"
      >
        <defs>
          {/* Silicon Core Lighting Gradient */}
          <radialGradient id={`${id}-coreGlow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={isDark ? "#38bdf8" : "#0284c7"} stopOpacity="0.8" />
            <stop offset="60%" stopColor={isDark ? "#0284c7" : "#0369a1"} stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Microprocessor Silicon Body */}
          <linearGradient id={`${id}-chipBody`} x1="0%" y1="0%" x2="100%" y2="100%">
            {isDark ? (
              <>
                <stop offset="0%" stopColor="#0d2342" />
                <stop offset="50%" stopColor="#08182d" />
                <stop offset="100%" stopColor="#040b17" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#0f2b5c" />
                <stop offset="100%" stopColor="#03153b" />
              </>
            )}
          </linearGradient>

          {/* Circuit Traces Gradient */}
          <linearGradient id={`${id}-traceGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          {/* Lettering Metallic Gradient */}
          <linearGradient id={`${id}-textGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
            {isDark ? (
              <>
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="75%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#020617" />
              </>
            )}
          </linearGradient>

          {/* Waves Signal Gradient */}
          <linearGradient id={`${id}-waveGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            {isDark ? (
              <>
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="45%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#2563eb" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#0f2b5c" />
                <stop offset="100%" stopColor="#03153b" />
              </>
            )}
          </linearGradient>

          {/* High-Tech Stencil Cut Mask for letter E */}
          <mask id={`${id}-stencilMask`}>
            <rect width="510" height="76" fill="white" />
            <path d="M 64 24 L 98 24 L 95 28.5 L 61 28.5 Z" fill="black" />
          </mask>

          {/* Subtle Ambient Neon Glow Filter */}
          <filter id={`${id}-neonGlow`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ================= 1. INTEGRATED CIRCUIT BOARD TRACES ================= */}
        <g stroke={`url(#${id}-traceGrad)`} strokeWidth="1.3" fill="none" opacity={isDark ? "0.85" : "0.75"}>
          {/* Top Circuit Bus running from Microchip across the brand mark */}
          <path d="M 40 16 L 85 16 L 105 8 L 220 8" strokeLinecap="round" />
          <path d="M 40 24 L 65 24 L 78 17 L 130 17" strokeLinecap="round" />
          <circle cx="220" cy="8" r="2" fill="#38bdf8" />
          <circle cx="130" cy="17" r="1.5" fill="#38bdf8" />

          {/* Bottom Circuit Bus framing the subtitle */}
          <path d="M 40 54 L 75 54 L 88 64 L 205 64" strokeLinecap="round" />
          <path d="M 40 60 L 60 60 L 70 69 L 140 69" strokeLinecap="round" />
          <circle cx="205" cy="64" r="2" fill="#38bdf8" />
          <circle cx="140" cy="69" r="1.5" fill="#38bdf8" />

          {/* Direct data bridge from Chip into ELTECH 'E' */}
          <path d="M 52 38 L 74 38" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="74" cy="38" r="2.2" fill="#38bdf8" />

          {/* Circuit connection from INC. to the Crescent Waves */}
          <path d="M 390 38 L 418 38" strokeWidth="1.6" strokeDasharray="3 2" strokeLinecap="round" />
          <circle cx="418" cy="38" r="2" fill="#38bdf8" />
        </g>

        {/* ================= 2. FUSED MICROPROCESSOR / ECU SILICON CHIP ================= */}
        <g transform="translate(32, 38)">
          {/* Subtle Ambient Radial Glow */}
          <circle cx="0" cy="0" r="26" fill={`url(#${id}-coreGlow)`} />

          {/* Dual-inline Metallic Pins with terminal via dots */}
          {[-12, -6, 0, 6, 12].map((p, i) => (
            <React.Fragment key={`pin-${i}`}>
              {/* Left pins */}
              <line x1="-22" y1={p} x2="-15" y2={p} stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="-22" cy={p} r="1.2" fill="#38bdf8" />
              
              {/* Right pins */}
              <line x1="15" y1={p} x2="22" y2={p} stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="22" cy={p} r="1.2" fill="#38bdf8" />
              
              {/* Top pins */}
              <line x1={p} y1="-22" x2={p} y2="-15" stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx={p} cy="-22" r="1.2" fill="#38bdf8" />
              
              {/* Bottom pins */}
              <line x1={p} y1="15" x2={p} y2="22" stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx={p} cy="22" r="1.2" fill="#38bdf8" />
            </React.Fragment>
          ))}

          {/* Microprocessor Ceramic Body */}
          <rect
            x="-16"
            y="-16"
            width="32"
            height="32"
            rx="4"
            fill={`url(#${id}-chipBody)`}
            stroke={isDark ? "#0284c7" : "#0369a1"}
            strokeWidth="1.6"
          />

          {/* Inner Silicon Wafer Die */}
          <rect
            x="-10"
            y="-10"
            width="20"
            height="20"
            rx="2"
            fill={isDark ? "#0369a1" : "#0284c7"}
            stroke="#38bdf8"
            strokeWidth="1"
          />

          {/* Central Active Processing Core */}
          <rect x="-5" y="-5" width="10" height="10" fill="#38bdf8" />
          <rect x="-2" y="-2" width="4" height="4" fill="#ffffff" />

          {/* Pin 1 Orientation Index */}
          <circle cx="-12" cy="-12" r="1.2" fill="#f8fafc" />
        </g>

        {/* ================= 3. TYPOGRAPHY: ELTECH INC. & ELECTRONIC TECHNOLOGY ================= */}
        <g transform="skewX(-13)">
          {/* Primary Wordmark: ELTECH INC. */}
          <g mask={`url(#${id}-stencilMask)`}>
            <text
              x="82"
              y="42"
              fontFamily="'Inter', 'Montserrat', 'Segoe UI', system-ui, -apple-system, sans-serif"
              fontSize="37"
              fontWeight="900"
              letterSpacing="0.04em"
              fill={`url(#${id}-textGrad)`}
              className="tracking-wider"
            >
              ELTECH INC.
            </text>
          </g>

          {/* Cyber Stencil Neon Accent Slicing the 'E' */}
          <rect
            x="76"
            y="23.5"
            width="20"
            height="2.5"
            fill={isDark ? "#38bdf8" : "#0284c7"}
            filter={isDark ? `url(#${id}-neonGlow)` : undefined}
          />

          {/* Secondary Line: ELECTRONIC TECHNOLOGY */}
          {showTagline && (
            <g>
              <text
                x="84"
                y="63"
                fontFamily="'Inter', 'Montserrat', 'Segoe UI', system-ui, -apple-system, sans-serif"
                fontSize="12"
                fontWeight="800"
                letterSpacing="0.30em"
                fill={isDark ? "#38bdf8" : "#334155"}
              >
                ELECTRONIC TECHNOLOGY
              </text>
            </g>
          )}
        </g>

        {/* ================= 4. CONCENTRIC CRESCENT WAVE ARCS (PULSING SIGNAL) ================= */}
        <g className="transition-transform duration-300 hover:scale-105 origin-center">
          {/* Wave 1: Outer & Largest Crescent */}
          <path
            d="M 430.00 12.56 A 32.00 32.00 0 1 0 430.00 65.44 A 29.8 29.8 0 1 1 430.00 12.56 Z"
            fill={`url(#${id}-waveGrad)`}
            filter={isDark ? `url(#${id}-neonGlow)` : undefined}
          />

          {/* Wave 2: Middle Crescent */}
          <path
            d="M 438.25 20.20 A 24.00 24.00 0 1 0 438.25 57.80 A 22.3 22.3 0 1 1 438.25 20.20 Z"
            fill={`url(#${id}-waveGrad)`}
          />

          {/* Wave 3: Inner Crescent */}
          <path
            d="M 445.75 27.07 A 16.50 16.50 0 1 0 445.75 50.93 A 15.1 15.1 0 1 1 445.75 27.07 Z"
            fill={`url(#${id}-waveGrad)`}
          />

          {/* Pulse Signal Frequency Dots */}
          <circle cx="458" cy="38" r="1.8" fill={isDark ? "#38bdf8" : "#1e40af"} opacity="0.85" />
          <circle cx="468" cy="38" r="1.2" fill={isDark ? "#7dd3fc" : "#2563eb"} opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default EltechLogo;
