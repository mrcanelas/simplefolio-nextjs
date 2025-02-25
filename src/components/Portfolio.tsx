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
  role: string;
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
      role: "Professora de Arte",
      description: `Como professora de Arte, utiliza a dança para ampliar a expressão dos alunos, explorando diversos estilos e culturas. Ela promove eventos e apresentações na escola, criando momentos para que os estudantes compartilhem sua arte com a família. A dança se torna uma ferramenta de aprendizado, inclusão e fortalecimento da identidade cultural no ambiente escolar.`,
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
      role: "Assistente de Direção e Coreografia",
      description: `O projeto resgata as ancestralidades corporais dos participantes por meio de exercícios e reflexões, culminando na coreografia "O chão que a gente pisa". Explora identidade, corporeidade e valoriza mestres da cultura tradicional e clássica brasileira, reconhecendo o corpo como território de memória e pertencimento.`,
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
      title: "Projeto FRONTEIRA",
      subTitle: "Grupo Corpo Molde",
      role: "Assistente de Produção e Social Media",
      description: `O projeto FRONTEIRA - O dia que o mar definiu a liberdade busca expressar indignações sobre as relações humanitárias e os fluxos migratórios entre territórios, periferias, centros, estados e países. Também explora a construção de vínculos, pertencimento e sobrevivência, reforçando a ideia de que nenhum corpo é ilegal.`,
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
      title: "Projeto SAPIENS",
      subTitle: "Grupo Corpo Molde",
      role: "Interprete, Assistente de Produção e Social Media",
      description: `O projeto SAPIENS explora a busca por um ser "além", pautado em status social, político e cultural. Reflete sobre a construção e reconstrução da sociedade contemporânea, questionando como a cultura resiste em um país que pouco a reconhece. A partir das ruínas dessa cultura, surge a reflexão: o que ainda podemos construir para garantir sua sobrevivência?`,
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
      role: "Interprete",
      description: `Bambaquerê - Uma Dança em Confusão convida o público a refletir sobre a infância por meio da Dança Contemporânea e das Danças Tradicionais Brasileiras. A coreografia explora o desenvolvimento motor infantil e seus padrões sociais, familiares e lúdicos, dialogando com brincadeiras e jogos de criança para criar uma interação envolvente com o público.`,
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
      role: "Assistente de Produção e Social Media",
      description: `O nome Pèrègun - A Nativa une termos do candomblé Ketu e da cultura indígena para nomear a planta usada para afastar energias negativas. O projeto busca, por meio da arte, "limpar" o cenário atual de intolerância, pandemia, falta de humanidade e guerras, promovendo reflexão e transformação diante desses desafios.`,
      images: [
        "/peregun1.JPG",
        "/peregun2.JPG",
        "/peregun3.JPG",
        "/peregun4.JPG",
        "/peregun5.JPG",
      ],
    },
    {
      id: 6,
      category: "production",
      title: "Projeto: Caminho, Ancestralidade e Evolução",
      subTitle: "Grupo Afoxé Omodé Obá",
      role: "Assistente de Produção e Social Media",
      description: `O projeto Caminhos | Ancestralidade | Evolução do AFOXÉ ỌMỌDÉ ỌBA (Crianças do Rei) promove encontros culturais negros, valorizando as raízes e tradições. Os afoxés, além da música e dança, representam uma rica identidade e memória, resgatando e fortalecendo a ancestralidade afro-brasileira, reafirmando essa herança cultural nas gerações.`,
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
      role: "Interprete",
      description: "Participou como intérprete-dançarina nos festivais de dança de Teresina e da UFPI. No Festival de Dança de Teresina, seu grupo conquistou o 5º lugar, e no da UFPI, garantiu o 3º lugar. Cada apresentação evidenciou sua dedicação e evolução artística, tornando essas experiências momentos marcantes em sua trajetória na dança.",
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
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-full max-w-[710px] flex flex-col"
            onClick={(e) => e.stopPropagation()}
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
              <div>
                <h4 className="tracking-[2px] text-base font-lato uppercase font-normal text-primary">
                  {selectedProject.title}
                </h4>
                <h5 className="text-sm font-lato font-light text-gray-600">
                  {selectedProject.role}
                </h5>
              </div>
              <p className="text-gray-600 font-lato font-light text-justify mt-2 line-clamp-4">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
