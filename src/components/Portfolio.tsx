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
      id: 1,
      category: "production",
      title: "Espetáculo Djovenski",
      subTitle: "Grupo Corpo Molde",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.",
      images: ["/djovenski.jpg"],
    },
    {
      id: 2,
      category: "interpreter",
      title: "Espetáculo Sapiens",
      subTitle: "Grupo Corpo Molde",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.",
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
      id: 3,
      category: "interpreter",
      title: "Espetáculo Bambaquerê",
      subTitle: "Grupo Corpo Molde",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.",
      images: [
        "/bambaquere1.png",
        "/bambaquere2.jpg",
        "/bambaquere3.jpg",
        "/bambaquere4.jpg",
      ],
    },
    {
      id: 4,
      category: "interpreter",
      title: "Projeto 4",
      subTitle: "Grupo Corpo Molde",
      description: "Descrição do Projeto 4",
      images: ["/sapiens4.jpg"],
    },
  ];

  return (
    <section className="w-full space-y-16 flex flex-col items-center justify-center" id="portfolio">
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
                  className="relative group overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    style={{ width: "100%", height: "auto" }}
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
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-full max-w-[710px] overflow-hidden"
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary p-2 z-10"
              onClick={() => setSelectedProject(null)}
            >
              <LuX size={20} />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              navigation
              pagination={{ dynamicBullets: true }}
              autoplay={{ delay: 2000, disableOnInteraction: true }}
              effect="fade"
              loop
              className="w-full h-[470px]"
              style={
                {
                  "--swiper-navigation-size": "20px",
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                } as React.CSSProperties
              }
            >
              {selectedProject.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={selectedProject.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    style={{ width: "100%", height: "auto" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="p-8 space-y-4">
              <h4 className="tracking-[2px] text-sm font-lato uppercase font-normal text-primary">
                {selectedProject.title}
              </h4>
              <p className="text-gray-600 font-lato font-light mt-2">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
