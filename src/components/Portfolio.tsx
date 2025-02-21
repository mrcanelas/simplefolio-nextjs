"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { LuX } from "react-icons/lu";
import SectionTitle from "./SectionTitle";

interface selectedProject {
  id: number;
  category: string;
  title: string;
  subTitle: string;
  description: string;
  images: string[];
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] =
    useState<selectedProject | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedProject]);

  const categories = [
    { key: "all", label: "Todos" },
    { key: "interpreter", label: "Intérprete" },
    { key: "production", label: "Produção" },
    { key: "education", label: "Educação" },
  ];

  const projects: selectedProject[] = [
    {
      id: 0,
      category: "education",
      title: "Professora de Arte",
      subTitle: "Secretaria Municipal de Educação de São Paulo",
      description: "",
      images: [
        "/pmsp1.jpg",
        "/pmsp2.jpg",
        "/pmsp3.jpg",
        "/pmsp4.jpg",
        "/pmsp5.jpg",
        "/pmsp6.jpg",
      ],
    },
    {
      id: 1,
      category: "production",
      title: "Projeto Corpo Brasilidades",
      subTitle: "São Paulo Escola de Dança e Grupo Corpo Molde",
      description: "",
      images: [
        "/corpo1.jpg",
        "/corpo2.jpg",
        "/corpo3.jpg",
        "/corpo4.jpg",
        "/corpo5.jpg",
      ],
    },
    {
      id: 2,
      category: "production",
      title: "Espetáculo Djovenski",
      subTitle: "Grupo Corpo Molde",
      description: "",
      images: [
        "/djovenski1.jpg",
        "/djovenski2.jpg",
        "/djovenski3.jpg",
        "/djovenski4.jpg",
        "/djovenski5.jpg",
      ],
    },
    {
      id: 3,
      category: "interpreter",
      title: "Espetáculo Sapiens",
      subTitle: "Grupo Corpo Molde",
      description: "",
      images: [
        "/sapiens1.jpg",
        "/sapiens2.jpg",
        "/sapiens3.jpg",
        "/sapiens4.jpg",
        "/sapiens5.jpg",
        "/sapiens6.jpg",
      ],
    },
    {
      id: 4,
      category: "interpreter",
      title: "Espetáculo Bambaquerê",
      subTitle: "Grupo Corpo Molde",
      description: "",
      images: [
        "/bambaquere1.png",
        "/bambaquere2.jpg",
        "/bambaquere3.jpg",
        "/bambaquere4.jpg",
      ],
    },
    {
      id: 5,
      category: "production",
      title: "Espetáculo Pèrègun A Nativa",
      subTitle: "Núcleo Pèrègun",
      description: "",
      images: [
        "/peregum1.JPG",
        "/peregum2.JPG",
        "/peregum3.JPG",
        "/peregum4.JPG",
        "/peregum5.JPG",
      ],
    },
    {
      id: 6,
      category: "production",
      title: "Projeto: Caminho, Ancestralidade e Evolução",
      subTitle: "Grupo Afoxé Omodé Obá",
      description: "",
      images: [
        "/afoxe1.jpg",
        "/afoxe2.jpg",
        "/afoxe3.jpg",
        "/afoxe4.jpg",
        "/afoxe5.jpg",
      ],
    },
    {
      id: 7,
      category: "interpreter",
      title: "Festival de Dança de Teresina",
      subTitle: "Companhia de Dança Rocked",
      description: "",
      images: [
        "/rocked1.JPG",
        "/rocked2.JPG",
        "/rocked3.JPG",
        "/rocked4.JPG",
        "/rocked5.JPG",
      ],
    },
  ];

  return (
    <section id="portfolio">
      <div className="w-full space-y-16 flex flex-col items-center justify-center">
        <SectionTitle title="Últimos Projetos" />
        <div className="w-full flex flex-wrap justify-center gap-4 items-center">
          <ul className="flex flex-wrap justify-center gap-4 uppercase tracking-[2px] font-lato text-secondary text-sm relative">
            {categories.map((category, index) => (
              <li
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`relative cursor-pointer transition-colors px-2 ${
                  selectedCategory === category.key
                    ? "text-primary"
                    : "text-secondary"
                } hover:text-primary`}
              >
                {category.label}
                {index < categories.length - 1 && (
                  <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-gray-400 rounded-full"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-7xl">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
          >
            <AnimatePresence>
              {projects
                .filter(
                  (project) =>
                    selectedCategory === "all" ||
                    project.category === selectedCategory
                )
                .map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative group overflow-hidden cursor-pointer h-[245px] md:h-[229px] lg:h-[335px]"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={100}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/90 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                      <span className="absolute left-[30px] bottom-[30px] w-[70px] h-[70px] border-l border-b border-primary transition-all duration-300 ease-out"></span>
                      <span className="absolute right-[30px] top-[30px] w-[70px] h-[70px] border-r border-t border-primary transition-all duration-300 ease-out"></span>
                      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
                        <h4 className="text-sm uppercase tracking-[2px] text-primary font-lato opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 delay-[200ms]">
                          {project.title}
                        </h4>
                        <span className="text-base tracking-[1px] text-[#505050] font-lato font-light opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 delay-[400ms]">
                          {project.subTitle}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-full max-w-[710px] flex flex-col"
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary p-2 z-10"
              onClick={() => setSelectedProject(null)}
            >
              <LuX size={20} />
            </button>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[470px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation
                pagination={{ dynamicBullets: true }}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                effect="fade"
                loop
                className="w-full h-full"
                style={
                  {
                    "--swiper-navigation-size": "20px",
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  } as React.CSSProperties
                }
              >
                {selectedProject.images.map((img, index) => (
                  <SwiperSlide key={index} className="bg-black">
                    <Image
                      src={img}
                      alt={selectedProject.title}
                      fill
                      sizes="100vw"
                      quality={100}
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="p-4 sm:p-6 md:p-8 space-y-4">
              <h4 className="tracking-[2px] text-sm font-lato uppercase font-normal text-primary">
                {selectedProject.title}
              </h4>
              <p className="text-gray-600 font-lato font-light mt-2 line-clamp-4">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
