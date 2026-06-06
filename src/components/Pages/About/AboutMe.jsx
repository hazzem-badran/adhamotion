import React from "react";
import { useLanguageStore } from "../../../store/useLanguageStore";

const AboutMe = () => {
  const { language } = useLanguageStore();

  if (language === "ar") {
    return (
      <p className="text-base leading-8 font-light">
        بدأت كمطور برمجيات أركز على <strong>الكود النظيف</strong> والبنية التقنية المتينة — أبني تطبيقات حقيقية من الصفر بـ React.js وReact Native.
        <br /><br />
        مع الوقت، لاحظت نمطاً متكرراً: أفكار رائعة تفشل — ليس بسبب سوء الكود، بل لأن <strong>الجانب التقني كان منفصلاً عن أهداف البيزنس الحقيقية</strong>. ميزانيات تضيع، جداول زمنية تتمدد، وميزات تُبنى لا يحتاجها أحد.
        <br /><br />
        هذا غيّر توجهي. اليوم أعمل عند تقاطع <strong>الهندسة والاستراتيجية</strong> — أساعد المؤسسين وفرق المنتجات على التحرك بذكاء: التحقق قبل البناء، واختيار التقنية الأنسب، وإطلاق MVP يحقق أثراً حقيقياً.
      </p>
    );
  }

  return (
    <p className="text-base leading-8 font-light">
      I started as a software developer focused on <strong>clean code</strong> and solid architecture — building real applications from scratch with React.js and React Native.
      <br /><br />
      Over time, I noticed a recurring pattern: great ideas failing — not because of bad code, but because the <strong>technical side was disconnected from real business goals</strong>. Budgets wasted. Timelines stretched. Features built that users never needed.
      <br /><br />
      That shifted my focus. Today, I work at the intersection of <strong>engineering and strategy</strong> — helping founders and product teams move smarter: validate before building, choose tech that fits the business, and ship MVPs that actually matter.
    </p>
  );
};

export default AboutMe;
