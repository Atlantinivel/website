import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TextAndLink } from "../text-and-link/textAndLink";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/@/components/ui/card";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll"



export function Test(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {

    const projects = [
        { id: 1, image: '/portfolio/caxinas.jpg', title: "Centro ", desc: "Industria" },
        { id: 2, image: '/portfolio/oficina.jpg', title: "Associacao Homens do Mar", desc: "Associacao" },
        { id: 3, image: '/portfolio/caxinas.jpg', title: "Project 3", desc: 'Algo' },
        { id: 1, image: '/portfolio/caxinas.jpg', title: "Centro Comunitário das Caxinas", desc: "Industria" },
        { id: 2, image: '/portfolio/oficina.jpg', title: "Associacao Homens do Mar", desc: "Associacao" },
        { id: 3, image: '/portfolio/caxinas.jpg', title: "Project 3", desc: 'Algo' },
        { id: 1, image: '/portfolio/caxinas.jpg', title: "Centro Comunitário das Caxinas", desc: "Industria" },
        { id: 2, image: '/portfolio/oficina.jpg', title: "Associacao Homens do Mar", desc: "Associacao" },
        { id: 3, image: '/portfolio/caxinas.jpg', title: "Project 3", desc: 'Algo' },
      ]

  const { data } = useTina(props);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState(0);


  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 2,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full"
      setApi={setApi}
    >
      <CarouselContent className="h-full">
        {projects.map((src, index) => (
          <CarouselItem key={index} className= "pl-0 basis-1/4" >
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-0">
              
                <Image 
                src={src.image}
                alt={src.title}
                width={1920}
                height={1080}
                className="h-full object-cover ">

                </Image>
            
              </CardContent>
              
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};




