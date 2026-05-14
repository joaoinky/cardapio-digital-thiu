export function PancakeIllustration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Steam wisps */}
      <path d="M35 18 Q37 10 35 4" stroke="#F5DEB3" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M45 15 Q47 7 45 1" stroke="#F5DEB3" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M55 18 Q57 10 55 4" stroke="#F5DEB3" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
      </path>
      {/* Sauce drip on right */}
      <path d="M78 30 Q82 35 80 42 Q78 48 82 52" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
      {/* Bottom pancake */}
      <ellipse cx="50" cy="65" rx="38" ry="7" fill="#D4A055" opacity="0.9"/>
      <ellipse cx="50" cy="63" rx="38" ry="7" fill="#C8893E"/>
      {/* Middle pancake */}
      <ellipse cx="50" cy="52" rx="35" ry="6.5" fill="#D4A055" opacity="0.9"/>
      <ellipse cx="50" cy="50" rx="35" ry="6.5" fill="#C8893E"/>
      {/* Filling layer */}
      <ellipse cx="50" cy="48" rx="33" ry="3" fill="#A0522D" opacity="0.6"/>
      {/* Top pancake */}
      <ellipse cx="50" cy="38" rx="33" ry="6" fill="#E8B86D"/>
      <ellipse cx="50" cy="36" rx="33" ry="6" fill="#D4A055"/>
      {/* Cheese/sauce on top */}
      <ellipse cx="50" cy="33" rx="28" ry="4" fill="#F5CBA7" opacity="0.8"/>
      {/* Small oregano dots */}
      <circle cx="42" cy="32" r="1.5" fill="#2D6A4F" opacity="0.7"/>
      <circle cx="52" cy="31" r="1.5" fill="#2D6A4F" opacity="0.7"/>
      <circle cx="60" cy="33" r="1.5" fill="#2D6A4F" opacity="0.7"/>
    </svg>
  );
}

export function OreganoBranch({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30 Q40 15 70 8" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      <ellipse cx="20" cy="24" rx="6" ry="3.5" fill="#40916C" opacity="0.6" transform="rotate(-30 20 24)"/>
      <ellipse cx="32" cy="18" rx="6" ry="3.5" fill="#2D6A4F" opacity="0.6" transform="rotate(-20 32 18)"/>
      <ellipse cx="46" cy="13" rx="6" ry="3.5" fill="#40916C" opacity="0.6" transform="rotate(-10 46 13)"/>
      <ellipse cx="60" cy="10" rx="5" ry="3" fill="#2D6A4F" opacity="0.6" transform="rotate(-5 60 10)"/>
    </svg>
  );
}

export function SauceDrip({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0 L100 0 L100 15 Q85 18 80 28 Q76 36 78 44 Q80 52 74 58 Q68 62 66 55 Q64 48 68 38 Q72 28 65 20 Q55 12 40 18 Q28 22 22 35 Q18 45 20 55 Q22 62 16 60 Q10 58 12 48 Q14 38 10 28 Q5 18 0 15 Z" fill="#8B0000" opacity="0.15"/>
    </svg>
  );
}

export function SteamLines({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 38 Q13 28 15 20 Q17 12 15 4" stroke="#F5DEB3" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M30 38 Q28 26 30 16 Q32 8 30 2" stroke="#F5DEB3" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite"/>
      </path>
      <path d="M45 38 Q43 28 45 18 Q47 10 45 4" stroke="#F5DEB3" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.8s" repeatCount="indefinite"/>
      </path>
    </svg>
  );
}

export function PancakeSmall({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="48" rx="30" ry="5.5" fill="#C8893E"/>
      <ellipse cx="40" cy="37" rx="27" ry="5" fill="#D4A055"/>
      <ellipse cx="40" cy="35" rx="27" ry="5" fill="#C8893E"/>
      <ellipse cx="40" cy="32" rx="24" ry="3" fill="#A0522D" opacity="0.5"/>
      <ellipse cx="40" cy="26" rx="25" ry="5" fill="#E8B86D"/>
      <ellipse cx="40" cy="24" rx="25" ry="5" fill="#D4A055"/>
      <ellipse cx="40" cy="21" rx="21" ry="3.5" fill="#F5CBA7" opacity="0.8"/>
      <path d="M28 10 Q30 4 28 0" stroke="#F5DEB3" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M40 8 Q42 2 40 -2" stroke="#F5DEB3" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5">
        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.3s" repeatCount="indefinite"/>
      </path>
    </svg>
  );
}
