import React from "react";
import MenuButton from "../../components/MenuButton";
import HeadingSection from "../../components/HeadingSection";
import { useMenuStore } from "../../store/useMenuStore";
import { useLanguageStore } from "../../store/useLanguageStore";
import { SERVICES } from "../../constants/services";
import Button from "../../components/Button";
import { PATHS } from "../../constants/paths";

const LightbulbIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);

const LayersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>
);

const icons = {
  lightbulb: LightbulbIcon,
  layers: LayersIcon,
  rocket: RocketIcon,
};

const ServiceCard = ({ service, language }) => {
  const content = service[language] || service.en;
  const Icon = icons[service.icon];

  return (
    <div className="glass-card p-8 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300 cursor-default">
      <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 flex-shrink-0">
        <Icon />
      </div>

      <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-500 border border-primary-500/20">
        {content.badge}
      </span>

      <h3 className="text-xl font-bold m-0">
        {content.title}
      </h3>

      <p className="text-sm leading-relaxed font-light text-neutral-600 dark:text-neutral-300 flex-1 m-0">
        {content.description}
      </p>

      <Button stylee="btn__secondary" navigateTo={PATHS.CONTACT.ROOT}>
        {language === "ar" ? "ابدأ معي" : "Get Started"}
      </Button>
    </div>
  );
};

const Services = () => {
  const { isMenuOpen } = useMenuStore();
  const { language } = useLanguageStore();

  return (
    <section className="style__section fade-in">
      <MenuButton />

      {!isMenuOpen && (
        <div className="w-full">
          <HeadingSection title={{ en: "My Services", ar: "خدماتي" }} />

          <p className="text-center text-base font-light text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-12 leading-relaxed">
            {language === "ar"
              ? "أساعد المؤسسين وأصحاب الأفكار على إطلاق مشاريعهم بذكاء — من التحقق من الفكرة حتى إطلاق المنتج."
              : "I help founders and idea owners launch their products smartly — from validating the idea to shipping the product."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} language={language} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              {language === "ar"
                ? "لديك فكرة ولا تعرف من أين تبدأ؟"
                : "Have an idea but not sure where to start?"}
            </p>
            <Button stylee="btn__primary" navigateTo={PATHS.CONTACT.ROOT}>
              {language === "ar" ? "لنتحدث عنها" : "Let's Talk About It"}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
