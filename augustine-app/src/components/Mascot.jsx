export default function Mascot() {
  // Stylized icon: halo + book to represent St. Augustine
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" aria-label="St. Augustine Mascot">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#facc15"/>
          <stop offset="1" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="10" rx="12" ry="4" fill="url(#g1)" opacity="0.9"/>
      <circle cx="32" cy="28" r="12" fill="#93c5fd" opacity="0.25"/>
      <rect x="16" y="36" width="32" height="16" rx="2" fill="#f3f4f6" />
      <path d="M16 36 L32 44 L48 36" stroke="#111827" strokeWidth="2" fill="none" />
      <path d="M24 40 H40" stroke="#6b7280" strokeWidth="2" />
    </svg>
  )
}
