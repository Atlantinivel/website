"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/@/components/ui/carousel"
import { PageQuery } from "@/tina/__generated__/types"
import { CarouselApi } from "@/@/components/ui/carousel"
import { Button } from "@/@/components/ui/button"
import { Card, CardContent } from "@/@/components/ui/card"

const projects = [
  { id: 1, image: '/portfolio/caxinas.jpg', title: "Caxinas", desc: "Industria" },
  { id: 2, image: '/portfolio/oficina.jpg', title: "Associacao Homens do Mar", desc: "Associacao" },
  { id: 3, image: '/portfolio/caxinas.jpg', title: "Project 3", desc: 'Algo' },
]


export function CarouselHome(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full mx-auto my-16">
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={project.id} className="h-full">
              <Card className="w-full ">
                <CardContent className="w-full p-0">
                  <img className='w-full h-[460px] object-cover'
                    src={project.image}
                    alt={project.title}>
                  </img>
                  <div className="ml-14 h-full">
                    <h1 className=" absolute top-11  text-white ">{project.desc}</h1>
                    <h1 className=" absolute top-24  text-white text-7xl font-roboto font-extrabold">{project.title}</h1>
                    <Button className="absolute bottom-14 bg-white text-black  hover:bg-atlantiBlue hover:text-white">Ver Projeto</Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-14 right-36  ">
          <CarouselPrevious className=" border-0 hover:bg-atlantiBlue hover:text-white">  </CarouselPrevious>

          {projects.map((_, i) => (
            <button key={i} className={`w-2 h-2 mx-2 rounded-full ${i === current ? 'bg-white' : 'bg-gray-500 opacity-50'}`}></button>
          ))}
          <CarouselNext className=" border-0 hover:bg-atlantiBlue hover:text-white">  </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};