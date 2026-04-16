import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}
function AboutCard({
  image,
  title,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={`outline flex justify-center  outline-gray-100 dark:outline-gray-800 rounded-xl 
         w-full py-5 px-5 max-w-69 min-w-60   text-secondary-foreground ${className}  
      `}>
      <div className="flex flex-col items-center justify-around  ">
        <div className="flex justify-center items-center  ">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className=" w-30  
        
         transition-all duration-300 ease-in-out
        group-hover:scale-110 
        "/>
        </div>
        <div
          className="  rounded-lg transition-all duration-200 group-hover:border-secondary-foreground/5">
          <div className="space-y-2 text-center">
            <h1 className="text-[35px] lg:text-[52px] font-medium text-secondary-foreground/95 ">
              {title}
            </h1>
            <p className="text-[20px] lg:text-[25px] text-secondary-foreground/95 ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
