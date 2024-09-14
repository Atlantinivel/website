import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TextAndLink } from "../text-and-link/textAndLink";
import Image from "next/image";



export function Info(props: {
  data: PageQuery;
  variables: object;
  query: string;
    text:string;
    linkText:string;
    linkUrl:string;
    isLeft:boolean;
}) {

  const { data } = useTina(props);


  return (
      <div className="w-full mx-10 leading-7 text-gray-400 text-[14px] font-roboto">
        

        <Image
          src={"/logo/atlantinivel-background.png"}
          alt={""}
          width={560}
          height={0}
          style={{
              position: "absolute",
              objectFit: "cover",
              zIndex: 0,
              marginLeft: "25rem"
          }}
        >
        </Image>
        
    
        
      <div className="mt-20"></div>
      <div className={`w-1/2 px-24  z-10  ${props.isLeft? 'mr-auto' : 'ml-auto'}`}>
        <div className=" p-6">
          <p className="text-gray-700 mb-4">{props.text}a</p>
            <a href={props.linkUrl} className="text-black hover:text-atlantiBlue">------<strong>{props.linkText}</strong></a>
        </div>
      </div>

        <div className="mb-40"/>
    </div>
  );
};