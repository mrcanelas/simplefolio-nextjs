import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section className="w-full space-y-10 md:space-y-20 flex flex-col items-center justify-center" id="about">
      <SectionTitle title="Sobre Mim" />
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <Image 
          src="/about-me.jpg" 
          alt="About" 
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          style={{ width: "100%", height: "auto" }}
          className="w-full max-w-[250px] md:max-w-[300px] h-auto" 
        />
        <div className="text-[#505050] text-base md:text-xl text-justify font-lato font-light">
            <p className="mb-4">Formada em Licenciatura e Bacharelado em Dança pela Universidade Anhembi Morumbi, com experiência em Balé
              Clássico, Dança Moderna, Dança Contemporânea, Danças Populares Brasileiras, Urbanas e Dança do Ventre.
              Atuou como intérprete em Companhia de Dança Rocked (PI) e Grupo Corpo Molde (SP), onde também foi
              pesquisadora e assistente de direção. </p>
            <p>
              Realizou projetos contemplados por editais renomados, como o Fomento
              à Dança e Apoio às Culturas Negras. Possui experiência em produção cultural, social media e ensino de
              dança, com destaque para Zumba, Dança Criativa e Forró. Entre 2023 e 2024, foi Professora de Arte pela
              Secretaria Municipal de Educação de São Paulo, aliando prática pedagógica a sua vivência artística.</p>
          </div>
      </div>
    </section>
  );
}
