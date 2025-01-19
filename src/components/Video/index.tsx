"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const ImageWithText = () => {
  return (
    <section id="projects" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Suntem gata să vă ajutăm"
          paragraph="Echipa noastră este aici pentru a oferi soluții inovatoare adaptate nevoilor dumneavoastră specifice. Haideți să lucrăm împreună pentru a transforma ideile în realitate."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/team/help.svg"
                  alt="Suntem gata să vă ajutăm"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/team/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default ImageWithText;
