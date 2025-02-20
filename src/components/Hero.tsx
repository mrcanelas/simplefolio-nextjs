"use client";
import Image from "next/image";
import { LuChevronsDown } from "react-icons/lu";

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-[url(/background.jpg)] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-white/80">
      <div className="relative z-10 space-y-7">
        <div className="relative w-[200px] h-[200px] mx-auto rounded-full overflow-hidden">
          <Image src="/avatar.webp" alt="Profile" fill className="object-cover" />
        </div>
        <h1 className="text-[42px] font-lato font-light text-primary">Ane Caroline Matos</h1>
        <p className="inline-block m-0 px-[30px] py-2.5 uppercase tracking-[2px] font-lato font-light bg-white text-primary">
          Artista & Educadora
        </p>
      </div>
      <button onClick={scrollToPortfolio} className="absolute bottom-10 cursor-pointer">
        <LuChevronsDown className="animate-bounce h-6 w-6 text-primary hover:text-secondary transition-colors" />
      </button>
    </section>
  );
}
