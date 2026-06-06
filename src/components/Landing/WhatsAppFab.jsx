import React from "react";
import { WHATSAPP } from "../../constants/content";
import { useT } from "../../utils/i18n";
import { WhatsappIcon } from "./icons";

// Floating WhatsApp button. Sits opposite the BrandColorSwitcher (which is on
// the inline-start corner in RTL), so this lives on the inline-end corner.
const WhatsAppFab = () => {
  const { t, isAr } = useT();
  const href = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(t(WHATSAPP.message))}`;
  const side = isAr ? "right-5" : "left-5";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 ${side} z-[60] group flex items-center gap-2 rounded-full pe-4 ps-3 py-3 text-white font-semibold shadow-lg fab-bob`}
      style={{ background: "#25D366", boxShadow: "0 12px 30px -8px rgba(37,211,102,0.6)" }}
      aria-label={t(WHATSAPP.label)}
    >
      <WhatsappIcon className="w-6 h-6" />
      <span className="text-sm hidden sm:inline">{t(WHATSAPP.label)}</span>
    </a>
  );
};

export default WhatsAppFab;
