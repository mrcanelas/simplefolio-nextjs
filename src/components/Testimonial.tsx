"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export default function Testimonial() {
  const testimonials: TestimonialItem[] = [
    {
      name: "Kauê Miquéias",
      role: "Aluno - EMEF Clotilde R. H. Elias",
      text: "A Professora Ane foi uma excelente professora de arte e dança. Suas aulas eram envolventes, e as apresentações, sempre incríveis. Todos aprenderam e se divertiram muito. Esperam que um dia ela possa voltar para ensinar e fazer novas apresentações.",
    },
    {
      name: "Renan Maragoni",
      role: "Diretor Artístico em Grupo Corpo Molde",
      text: "Tive o prazer de trabalhar com a Ane em diversos projetos. Sua dedicação e profissionalismo são admiráveis, além de sua criatividade única na criação de coreografias.",
    },
    {
      name: "Daiana da Silva Franco",
      role: "Assistente de Diretor - EMEF Clotilde R. H. Elias",
      text: "Lecionou artes com compromisso, ressignificando espaços da escola para aprendizagem e consciência corporal através da dança. Motivou alunos com dança, desenho e música, valorizando cultura, diversidade e respeito.",
    },
  ];

  return (
    <section className="relative w-full" id="testimonial">
      <div className="bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/70 py-24">
          <div className="max-w-2xl mx-auto px-4">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ dynamicBullets: true, clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="testimonial-slider"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center space-y-6">
                    <div>
                      <h4 className="text-white font-lato font-medium text-2xl">
                        {testimonial.name}
                      </h4>
                      <h2 className="text-gray-300 font-lato font-light text-sm font-italic">
                        {testimonial.role}
                      </h2>
                    </div>
                    <FaQuoteRight className="text-white text-2xl mx-auto" />
                    <p className="text-white/70 font-lato font-light text-base md:text-lg leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
