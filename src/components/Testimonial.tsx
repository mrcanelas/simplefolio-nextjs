"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

interface TestimonialItem {
  name: string;
  text: string;
}

export default function Testimonial() {
  const testimonials: TestimonialItem[] = [
    {
      name: "Aluna de Dança",
      text: "As aulas da professora Ane são incríveis! Ela tem uma didática excepcional e consegue transmitir não só a técnica, mas também a paixão pela dança."
    },
    {
      name: "Diretor Artístico",
      text: "Tive o prazer de trabalhar com a Ane em diversos projetos. Sua dedicação e profissionalismo são admiráveis, além de sua criatividade única na criação de coreografias."
    },
    {
      name: "Coordenadora Pedagógica",
      text: "Como professora de Arte, a Ane desenvolveu um trabalho excepcional, conectando os alunos com diferentes formas de expressão artística através da dança."
    }
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
                    <h4 className="text-white font-lato font-medium text-xl">
                      {testimonial.name}
                    </h4>
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