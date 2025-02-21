import { AiFillFacebook, AiFillInstagram, AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <AiFillInstagram className="w-12 h-12 hover:text-white rounded-md transition-colors" />,
      link: "https://www.instagram.com/anecmatos/",
    },
    {
      name: "Facebook",
      icon: <AiFillFacebook className="w-12 h-12 hover:text-white rounded-md transition-colors" />,
      link: "https://www.facebook.com/caroline.matos02s",
    },
    {
      name: "TikTok",
      icon: <AiFillTikTok className="w-12 h-12 hover:text-white rounded-md transition-colors" />,
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
            <a key={index} href={social.link} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
