"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-8 md:py-10 lg:py-14">
      <div className="container">
        <SectionTitle
          title="Prețuri Simple și Accesibile"
          paragraph="Alege planul care se potrivește cel mai bine nevoilor tale. Fără costuri ascunse, doar soluții clare și eficiente."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-4 flex justify-center md:mb-6 lg:mb-8">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              WordPress
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Coding
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Landing Page"
            price={isMonthly ? "350" : "650"}
            subtitle="Acest plan este ideal pentru startup-uri și afaceri mici, oferind un site de tip landing page cu funcționalitățile esențiale pentru a-ți lansa prezența online rapid și eficient."

          >
            <OfferList text="Design atractiv" status="active" />
            <OfferList text="Conținut clar" status="active" />
            <OfferList text="Call-to-action eficient" status="active" />
            <OfferList text="Optimizare pentru viteză" status="active" />
            <OfferList text="Responsive și mobil" status="active" />
            <OfferList text="SEO de bază" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Site Corporativ"
            price={isMonthly ? "600" : "1000"}
            subtitle="Acest plan este ideal pentru companii care doresc un site corporativ profesional, oferind funcționalități esențiale pentru a-ți prezenta brandul și serviciile la cel mai înalt nivel."
          >
            <OfferList text="Design atractiv" status="active" />
            <OfferList text="Structură intuitivă" status="active" />
            <OfferList text="Branding coerent" status="active" />
            <OfferList text="Pagini dedicate servicii" status="active" />
            <OfferList text="Integrare contact rapid" status="active" />
            <OfferList text="Securitate avansată" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Magazin Online"
            price={isMonthly ? "1000" : "2500"}
            subtitle="Acest plan este perfect pentru magazine online, oferind funcționalități esențiale pentru a vinde produse eficient și a gestiona comenzile cu ușurință."

          >
            <OfferList text="Design atractiv" status="active" />
            <OfferList text="Navigare ușoară" status="active" />
            <OfferList text="Filtre intuitive" status="active" />
            <OfferList text="Checkout simplificat" status="active" />
            <OfferList text="Securitate plăți" status="active" />
            <OfferList text="Suport clienți accesibil" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
