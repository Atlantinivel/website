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
      <div
        className={`flex flex-col md:flex-row items-center ${
          props.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div
          className={`w-full md:w-1/2 px-6 md:px-12 lg:px-24 z-10 ${
            props.isLeft ? 'md:mr-auto' : 'md:ml-auto'
          }`}
        >
          <h1
            className={`text-2xl md:text-3xl p-6 font-bold text-white ${
              !props.title ? 'hidden' : ''
            }`}
          >
            {props.title}
          </h1>
          <div className={`border-t-2 border-white ml-6`}></div>
          <div className=" p-6">
            <p className="text-white text-[16px] md:text-[18px] mb-4">{props.text}</p>
            <a href={props.linkUrl} className="text-white hover:underline flex flex-row text-base md:text-lg">
              <FaArrowAltCircleRight className="w-6 h-6 md:w-8 md:h-8 mr-2" />
              Veja o nosso Portfolio!
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={props.imageURL} alt="" width={1920} height={1080} />
        </div>
      </div>
    </div>

  );
};