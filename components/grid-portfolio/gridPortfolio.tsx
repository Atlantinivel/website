"use client"

import React, { useEffect, useState } from 'react';
import { tinaField, useTina } from 'tinacms/dist/react';
import { PageQuery } from '@/tina/__generated__/types';
import { Card } from '@/@/components/ui/card';
import Image from 'next/image';


export function GridPortfolio(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {

    const images = [
        { src: "/portfolio/caxinas.jpg", title: "Centro Comunitario das Caxinas",subtitle:"Cultura, Desporto e Educacao" },
        { src: "/portfolio/oficina.jpg", title: "Image 2" },
        { src: "/portfolio/caxinas.jpg", title: "Image 1",subtitle:"Urbanismo" },
        { src: "/portfolio/caxinas.jpg", title: "Image 1",subtitle:"Urbanismo" },
        { src: "/portfolio/oficina.jpg", title: "Image 5" },
        { src: "/portfolio/caxinas.jpg", title: "Image 1",subtitle:"Urbanismo" },
        { src: "/portfolio/oficina.jpg", title: "Image 7" },
        { src: "/portfolio/caxinas.jpg", title: "Image 1",subtitle:"Urbanismo" },
        { src: "/portfolio/caxinas.jpg", title: "Image 1",subtitle:"Urbanismo" },
      ];


  const { data } = useTina(props);

  return (
<div>
    <div className=' h-[2px] bg-atlantiBlue mx-12  mt-20'>
        
    </div>

    <div className="flex flex-wrap mx-10 my-10">
      {images.map((image, index) => (
        <div key={index} className=" sm:w-1/2 md:w-1/4 p-1">
          <Card className="relative overflow-hidden group aspect-square">

            <Image 
                src={image.src}
                alt={image.title}
                width={1920}
                height={1080}
                className="h-full object-cover transition-transform duration-300 group-hover:scale-110">

            </Image>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
                <h3 className="text-white text-4xl translate-y-10 font-bold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mb-2">
                  {image.title}
                </h3>
                <p className="text-white text-xl translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75  ">
                  {image.subtitle}
                </p>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>

    </div>
  );}