import React, { useState } from "react";
import MenuButton from "../../components/MenuButton";
import Skills from "../../components/Pages/About/Skills";
import AboutMe from "../../components/Pages/About/AboutMe";
import Education from "../../components/Pages/About/Education";
import Intership from "../../components/Pages/About/Intership";
import Projects from "../../components/Pages/About/Projects";
import { useMenuStore } from "../../store/useMenuStore";
import { useLanguageStore } from "../../store/useLanguageStore";
import MyImage from "../../assets/images/hazem.png";
import Button from "../../components/Button";
import { PATHS } from "../../constants/paths";
import HeadingSection from "../../components/HeadingSection";
import Career from "../../components/Pages/About/Career";

const tabs = [
  { key: "career",     en: "Career",     ar: "المسيرة المهنية", component: <Career /> },
  { key: "education",  en: "Education",  ar: "التعليم",         component: <Education /> },
  { key: "internShip", en: "Internship", ar: "التدريب",         component: <Intership /> },
  { key: "projects",   en: "Projects",   ar: "المشاريع",        component: <Projects /> },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("career");
  const { isMenuOpen } = useMenuStore();
  const { language } = useLanguageStore();

  return (
    <section className="style__section fade-in">
      <MenuButton />

      {!isMenuOpen && (
        <div className="w-full relative">
          <HeadingSection title={{ en: "About Me", ar: "عني" }} />

          <div className="flex justify-around gap-16 px-4 flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-2/5 overflow-hidden flex justify-center lg:justify-start">
              <img
                src={MyImage}
                alt="Hazem Badran - Product-Focused Technical Consultant"
                className="w-full max-w-96 h-96 object-cover rounded-lg border border-gray-200"
                loading="lazy"
                width="384"
                height="384"
              />
            </div>

            <div className="w-full lg:w-3/5">
              <AboutMe />
              <Skills />

              <div className="mt-5">
                {tabs.map(({ key, en, ar }) => (
                  <button
                    key={key}
                    className={`
                      py-1 bg-transparent border-none capitalize inline-block text-lg cursor-pointer
                      font-medium mr-8 last:mr-0 relative transition-all duration-300 ease-in-out
                      ${activeTab === key
                        ? "text-red-500 opacity-100 after:w-full after:bg-red-500"
                        : "text-gray-700 opacity-50 hover:after:w-full"
                      }
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px
                      after:w-0 after:bg-gray-700 after:transition-all after:duration-300
                    `}
                    onClick={() => setActiveTab(key)}
                  >
                    {language === "ar" ? ar : en}
                  </button>
                ))}
              </div>

              <div className="py-10">
                {tabs.find((tab) => tab.key === activeTab)?.component}
              </div>

              <Button stylee="btn__secondary" navigateTo={PATHS.CONTACT.ROOT}>
                {language === "ar" ? "تواصل معي" : "Contact Me"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
