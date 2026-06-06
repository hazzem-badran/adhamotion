import React from "react";
import MenuButton from "../../components/MenuButton";
import HeadingSection from "../../components/HeadingSection";
import ContactInfo from "../../components/Pages/Contact/ContactInfo";
import { useMenuStore } from "../../store/useMenuStore";
import Form from "../../components/Pages/Contact/Form";

const Contact = () => {
  const { isMenuOpen } = useMenuStore();

  return (
    <section className="style__section fade-in">
      <MenuButton />

      {!isMenuOpen && (
        <div className="w-full">
          <HeadingSection title="Contact Me" />

          <div className="flex gap-16 flex-wrap-reverse md:flex-nowrap">
            <Form />
            <ContactInfo />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
