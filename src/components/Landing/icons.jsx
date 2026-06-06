import React from "react";

const base = "w-6 h-6";
const s = (p) => ({ fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", ...p });

export const FireIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M12 3c0 3-4 4-4 8a4 4 0 1 0 8 0c0-1.5-1-2.5-1-2.5C15 12 12 12 12 9c0-2-1-4-1-4Z" /></svg>
);
export const WrongIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M3 7l4-4 4 4M7 3v9M21 17l-4 4-4-4M17 21v-9" /></svg>
);
export const MazeIcon = ({ className = base }) => (
  <svg className={className} {...s()}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h6v6H9M17 7v10H7" /></svg>
);
export const LightbulbIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.7 1 1.3 1 2.5h6c0-1.2.2-1.8 1-2.5A6 6 0 0 0 12 3Z" /></svg>
);
export const LayersIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 18l9 5 9-5" /></svg>
);
export const RocketIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M14 4c3 0 6 3 6 6-2 5-7 7-7 7l-3-3s2-5 7-7c0-1 0-2-3-3ZM7 14l-3 3 3 1 1 3 3-3M5 19l-1 1" /></svg>
);
export const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} {...s()}><path d="M5 13l4 4L19 7" /></svg>
);
export const ArrowIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} {...s()}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const PlusIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} {...s()}><path d="M12 5v14M5 12h14" /></svg>
);
export const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} {...s()}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);

// ---- Motion / video icons (Adham) ----
export const VideoIcon = ({ className = base }) => (
  <svg className={className} {...s()}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3V9Z" /></svg>
);
export const MotionIcon = ({ className = base }) => (
  <svg className={className} {...s()}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg>
);
export const MegaphoneIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1ZM8 14v4M18 8a4 4 0 0 1 0 8" /></svg>
);
export const BrandIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M12 3l2.2 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.8-.6L12 3Z" /></svg>
);
export const BuildingIcon = ({ className = base }) => (
  <svg className={className} {...s()}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" /></svg>
);
export const GradIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M12 4 2 9l10 5 10-5-10-5ZM6 11.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5M22 9v5" /></svg>
);
export const SwipeIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11M12 8.5a1.5 1.5 0 0 1 3 0V11M15 9.5a1.5 1.5 0 0 1 3 0V14a5 5 0 0 1-5 5h-1.5a4 4 0 0 1-3.3-1.74L4.5 13.5a1.6 1.6 0 0 1 2.5-2L9 14V8.5a1.5 1.5 0 0 1 0 0Z" /></svg>
);
export const ClockIcon = ({ className = base }) => (
  <svg className={className} {...s()}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const GemIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M6 3h12l3 6-9 12L3 9l3-6ZM3 9h18M9 3l-1.5 6L12 21M15 3l1.5 6L12 21" /></svg>
);
export const PlayIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5Z" /></svg>
);
export const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} {...s()}><path d="M6 6l12 12M18 6 6 18" /></svg>
);

export const StarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="m12 2 2.95 5.98 6.6.96-4.77 4.65 1.12 6.57L12 17.02 6.1 20.13l1.12-6.57L2.45 8.9l6.6-.96L12 2Z" /></svg>
);
export const QuoteIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.2 0 .4 0 .6-.05C7.7 16.7 6.3 18 4.5 18.4c-.4.1-.6.5-.5.9.1.4.5.6.9.5C8.6 19 11 16 11 12v-1.5C11 8 9 6 7.5 6Zm9 0C14 6 12 8 12 10.5S14 15 16.5 15c.2 0 .4 0 .6-.05-.4 1.75-1.8 3.05-3.6 3.45-.4.1-.6.5-.5.9.1.4.5.6.9.5C17.6 19 20 16 20 12v-1.5C20 8 18 6 16.5 6Z" /></svg>
);
export const ShieldIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6l-7-3Z" /><path d="m9.5 12 1.8 1.8L15 10" /></svg>
);
export const RefreshIcon = ({ className = base }) => (
  <svg className={className} {...s()}><path d="M20 11a8 8 0 0 0-14-4.5L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4.5L20 15M20 20v-5h-5" /></svg>
);
export const WhatsappIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12 3.5A8.5 8.5 0 0 0 4.6 16.3L3.5 20.5l4.3-1.13A8.5 8.5 0 1 0 12 3.5Z" /></svg>
);

export const GUARANTEE_ICONS = { clock: ClockIcon, refresh: RefreshIcon, shield: ShieldIcon, gem: GemIcon };

export const SERVICE_ICONS = {
  video: VideoIcon,
  motion: MotionIcon,
  megaphone: MegaphoneIcon,
  brand: BrandIcon,
  building: BuildingIcon,
  grad: GradIcon,
  // legacy keys kept as fallbacks
  lightbulb: LightbulbIcon,
  layers: LayersIcon,
  rocket: RocketIcon,
};
export const PAIN_ICONS = {
  swipe: SwipeIcon,
  clock: ClockIcon,
  gem: GemIcon,
  // legacy keys kept as fallbacks
  fire: FireIcon,
  wrong: WrongIcon,
  maze: MazeIcon,
};
