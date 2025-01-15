import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <rect
          x="4"
          y="6"
          width="32"
          height="22"
          rx="2"
          fill="currentColor"
          opacity="0.8"
        />
        <rect
          x="6"
          y="8"
          width="28"
          height="18"
          rx="1"
          fill="white"
          opacity="0.5"
        />
        <rect
          x="16"
          y="32"
          width="8"
          height="2"
          fill="currentColor"
        />
        <rect
          x="12"
          y="35"
          width="16"
          height="3"
          rx="1"
          fill="currentColor"
        />
      </svg>

    ),
    title: "Creare site-uri web",
    paragraph:
      "De la site-uri de prezentare până la magazine online complexe, oferim soluții personalizate pentru afacerea ta."
  },
  {
    id: 2,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="23"
          y1="23"
          x2="32"
          y2="32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

    ),
    title: "SEO și promovare online",
    paragraph:
      "Îmbunătățește-ți vizibilitatea online cu servicii complete de optimizare SEO și campanii de promovare."
  },
  {
    id: 3,
    icon: (
      <svg width="50" height="50" viewBox="0 0 40 40" className="fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="5" width="20" height="30" rx="3" ry="3" fill="currentColor" opacity="0.5" />
        <rect x="14" y="9" width="12" height="22" rx="1" fill="white" opacity="0.8" />
        <circle cx="20" cy="33" r="2" fill="white" />
      </svg>

    ),
    title: "Creare aplicații mobile",
    paragraph:
      "Oferim servicii complete pentru dezvoltarea aplicațiilor mobile pe platforme iOS și Android, utilizând cele mai noi tehnologii.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <rect
          x="5"
          y="5"
          width="30"
          height="10"
          rx="2"
          fill="currentColor"
          opacity="0.8"
        />
        <rect
          x="5"
          y="15"
          width="30"
          height="10"
          rx="2"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="5"
          y="25"
          width="30"
          height="10"
          rx="2"
          fill="currentColor"
          opacity="0.4"
        />
        <circle cx="10" cy="10" r="2" fill="white" />
        <circle cx="10" cy="20" r="2" fill="white" />
        <circle cx="10" cy="30" r="2" fill="white" />
      </svg>

    ),
    title: "Găzduire web",
    paragraph:
      "Planuri de găzduire fiabile pentru site-uri web rapide și sigure, de la Basic la PRO."
  },
  {
    id: 5,
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 40 33"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <rect
          x="10"
          y="10"
          width="20"
          height="15"
          rx="3"
          ry="3"
          fill="currentColor"
          opacity="0.7"
        />

        <circle cx="15" cy="17" r="2" fill="white" />
        <circle cx="25" cy="17" r="2" fill="white" />

        <rect
          x="14"
          y="22"
          width="12"
          height="2"
          rx="1"
          fill="white"
        />

        <rect
          x="19"
          y="5"
          width="2"
          height="5"
          fill="currentColor"
        />
        <circle cx="20" cy="4" r="2" fill="currentColor" />
      </svg>

    ),
    title: "Creare chatbot",
    paragraph:
      "Dezvoltăm chatboti avansați care facilitează comunicarea eficientă cu clienții."
  },
  {
    id: 6,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <path
          d="M5 5C5 3.34315 6.34315 2 8 2H32C33.6569 2 35 3.34315 35 5V25C35 26.6569 33.6569 28 32 28H15L7 35V28H8C6.34315 28 5 26.6569 5 25V5Z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>

    ),
    title: "Consultanță IT",
    paragraph:
      "Oferim consultanță personalizată pentru integrarea celor mai bune soluții IT adaptate nevoilor tale."
  },
];

export default featuresData;
