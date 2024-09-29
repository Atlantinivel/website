import Image from "next/image";
import { Card, CardContent } from "@/@/components/ui/card";
import { title } from "process";
import { NewsInfo } from "./INewsInfo";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "tinacms";



export function NewsGrid(props: {
  list: NewsInfo[];
    
}) {



  return (

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {props.list.map((item, index) => (
    <Card key={index} className="group shadow-none border-white transition-all duration-300">
    <CardContent className="p-2 overflow-hidden">
      <div className="relative">
        <Image
          src={item.imageSrc}
          alt={title}
          width={300}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute -bottom-3 left-0 w-full h-1 bg-atlantiBlue transform scale-x-[0.2] group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
      <div className="pt-4 pb-4">
        <h3 className="text-lg text-atlantiBlue font-bold mb-2 group-hover:text-atlantiBlue-dark transition-colors duration-300">{item.title}</h3>
        <div className="flex items-center text-gray-500 mb-4">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{item.date}</span>
        </div>
        <Button  className=" border-none p-0 h-auto text-gray-500 hover:text-atlantiBlue transition-colors duration-300 flex items-center">
          Ler mais
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </CardContent>
  </Card>

))}
  </div>
  );
};