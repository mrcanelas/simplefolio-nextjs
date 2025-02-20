import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <ImInstagram className="w-10 h-10 hover:text-white rounded-md transition-colors" />,
      link: "#",
    },
    {
      name: "Facebook",
      icon: <ImFacebook2 className="w-10 h-10 hover:text-white rounded-md transition-colors" />,
      link: "#",
    },
    {
      name: "Linkedin",
      icon: <ImLinkedin className="w-10 h-10 hover:text-white rounded-md transition-colors" />,
      link: "#",
    },
  ];

  return (
    <footer className="bg-primary py-28 px-8 text-center font-lato font-light text-white/70">
      <div>
        <p>
          <strong>
            Designed by Silas Alves © 2025, All Rights Reserved
          </strong>
        </p>
        <div className="pt-8 flex justify-center gap-3">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
