import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";;
import { ImBehance2 } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { FaArtstation } from "react-icons/fa";
import { SocialLinks } from "@/lib/data/aboutPageData";

type Props = {
  image: string;
  name: string;
  role: string;
  links?: SocialLinks;
  className?: string;
};

function TeamCard({ image, name, role, links, className }: Props) {
  return (
    <div
      className={`group outline outline-gray-700/10 dark:outline-gray-700 rounded-lg hover:shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.10)] transition-all duration-300
        w-full max-w-68 min-w-66.5 h-100  flex-1 text-secondary-foreground ${className}  
      `}>
      <div className="flex flex-col   ">
        <div className="w-full h-full">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className=" w-full object-cover rounded-t-lg"
            loading="lazy" // Lazy load
          />
        </div>

        <div className="p-3">
          <div className="   text-center">
            <h1 className="text-[25px] font-semibold text-secondary-foreground/95 ">
              {name}
            </h1>
            <p className="text-[14px] font-medium text-secondary-foreground/70 ">
              {role}
            </p>
          </div>
          <div className="flex w-full justify-center items-center mt-2.5 gap-2.5">
            {links?.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 transition-transform duration-300 hover:scale-120"/>
              </a>
            )}

            {links?.behance && (
              <a href={links.behance} target="_blank" rel="noopener noreferrer">
                <ImBehance2   className="w-5.5 h-5.5 transition-transform duration-300 hover:scale-120"/>
              </a>
            )}

            {links?.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className="w-6.5 h-6.5 transition-transform duration-300 hover:scale-120"/>
              </a>
            )}
            {links?.artstation && (
              <a href={links.artstation} target="_blank" rel="noopener noreferrer">
                <FaArtstation className="w-6 h-6 transition-transform duration-300 hover:scale-120"/>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
