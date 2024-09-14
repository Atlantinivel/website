import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";

export function TextAndLink(props: {
  title: string;
  isTitleHidden: boolean;
  text: string;
  linkUrl: string;
  isLeft: boolean;
  imageURL: string;
}) {



  return (
    <div className="w-full h-full bg-atlantiBlue">
      <div className={`flex items-center ${props.isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-1/2 px-24 z-10  ${props.isLeft ? 'mr-auto' : 'ml-auto'}`}>

        <h1 className={`text-3xl p-6 font-bold text-white ${props.isTitleHidden ? 'hidden' : ''}`}>{props.title}</h1>
        <div className={`border-t-2  border-white ml-6 `}></div>
        <div className=" p-6">
          <p className="text-white text-[18px] mb-4">{props.text}</p>

          <a href={props.linkUrl} className="text-white hover:underline flex flex-row text-lg "><FaArrowAltCircleRight className="w-8 h-8 mr-2 " />Saiba Mais</a>

        </div>

      </div>
      <div className="w-1/2">

        <Image
          src={props.imageURL}
          alt={""}
          width={1920}
          height={1080}

        >
        </Image>

      </div>
      </div>
    </div>

  );
};