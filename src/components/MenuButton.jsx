import React from "react";
import { useMenuStore } from "../store/useMenuStore";
import { useLanguageStore } from "../store/useLanguageStore";
import { Link } from "react-router-dom";
import { MenuIcon, CloseIcon } from "./Icons";
import { LINKS } from "../constants/links";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useMenuStore();
  const { language } = useLanguageStore();

  const handleLinkClick = () => {
    setTimeout(toggleMenu, 100);
  };

  return (
    <>
      {/* Language Toggle */}
      <LanguageToggle className="absolute right-32 top-5 z-10" />

      {/* Theme Toggle */}
      <ThemeToggle className="absolute right-20 top-5 z-10" />

      {/* Menu Toggle Button */}
      <div
        className="absolute right-6 top-5 w-10 h-10 cursor-pointer rounded-full bg-[#E8F9FF] dark:bg-neutral-800 border border-white/40 dark:border-neutral-600 flex items-center justify-center z-10 transition-all duration-300 hover:scale-105"
        onClick={toggleMenu}
      >
        <div className="relative w-6 h-6 text-[#e02f6b]">
          <div
            className={`
              absolute inset-0 transition-all duration-300 transform
              ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
            `}
          >
            <MenuIcon />
          </div>
          <div
            className={`
              absolute inset-0 transition-all duration-300 transform
              ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}
            `}
          >
            <CloseIcon />
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-white/10 dark:bg-black/10 backdrop-blur-sm z-20">
          <nav>
            <ul className="flex flex-col items-center gap-8">
              {LINKS.map((item, index) => (
                <li
                  key={item.to}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <Link
                    to={item.to}
                    onClick={handleLinkClick}
                    className="text-3xl font-semibold transition-all duration-300 hover:text-[#e02f6b] hover:scale-110 relative group"
                  >
                    {item[language] || item.en}
                    <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#e02f6b] rounded-full transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MenuButton;
