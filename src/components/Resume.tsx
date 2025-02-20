import { PiBriefcaseThin, PiNotebookThin } from "react-icons/pi";
import SectionTitle from "./SectionTitle";

interface ResumeItem {
  title: string;
  description: string;
  icon: "education" | "work";
}

function ResumeBox({ item }: { item: ResumeItem }) {
  return (
    <div className="flex items-start gap-6 text-left">
      <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center border-l border-b border-primary">
        {item.icon === "education" ? (
          <PiNotebookThin className="w-9 h-9 text-primary" />
        ) : (
          <PiBriefcaseThin className="w-9 h-9 text-primary" />
        )}
      </div>
      <div>
        <h4 className="text-primary font-lato font-medium tracking-wider text-sm uppercase mb-2">
          {item.title}
        </h4>
        <p className="text-[#505050] font-lato font-light text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Resume() {
  const items: ResumeItem[] = [
    {
      title: "UNIVERSIDADE ANHEMBI MORUMBI",
      description: "Licenciatura e Bacharelado em Dança, com experiência em Balé Clássico, Dança Moderna, Dança Contemporânea e Danças Populares Brasileiras.",
      icon: "education"
    },
    {
      title: "FORMAÇÃO COMPLEMENTAR",
      description: "Especialização em Danças Urbanas e Dança do Ventre, com foco em metodologias de ensino e criação coreográfica.",
      icon: "education"
    },
    {
      title: "GRUPO CORPO MOLDE",
      description: "Intérprete, pesquisadora e assistente de direção em diversos espetáculos e projetos contemplados por editais renomados.",
      icon: "work"
    },
    {
      title: "SECRETARIA MUNICIPAL DE EDUCAÇÃO DE SÃO PAULO",
      description: "Professora de Arte, aliando prática pedagógica à vivência artística no ensino fundamental.",
      icon: "work"
    }
  ];

  return (
    <section className="w-full space-y-24 flex flex-col items-center justify-center" id="education">
      <SectionTitle title="Educação & Experiência" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {items.map((item, index) => (
          <ResumeBox key={index} item={item} />
        ))}
      </div>
    </section>
  );
} 