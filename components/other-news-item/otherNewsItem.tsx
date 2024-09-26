import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TextAndLink } from "../text-and-link/textAndLink";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";



export function OtherNewsItem(props: {
    imageURL:string;
    newsDate:string;
    linkText:string;
    linkUrl:string;
}) {



  return (
    <a href={props.linkUrl}>
    <div className="flex items-center space-x-4 mb-10">
    <Image
      src={props.imageURL}
      alt={props.linkText}
      width={100}
      height={100}
      className="w-24 h-24 object-cover rounded-sm"
    />
    <div>
      <h2 className="text-base font-semibold text-atlantiBlue mb-1">{props.linkText}</h2>
      <p className="text-sm text-gray-600">{props.newsDate}</p>
    </div>
  </div>
  </a>
  );
};