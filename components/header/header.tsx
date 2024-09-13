"use client"

import React, { useEffect, useState } from 'react';
import { tinaField, useTina } from 'tinacms/dist/react';
import Image from "next/image";
import { Button } from '../../@/components/ui/button';
import { usePathname } from 'next/navigation';
import { PageQuery } from '@/tina/__generated__/types';


export function Header(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {

  const currentPath = usePathname()

  const getLinkClass = (path) => {
    return currentPath === path
      ? "text-atlantiBlue decoration-2 underline decoration-atlantiBlue underline-offset-4"
      : "text-gray-600 hover:text-atlantiBlue";
  };


  const { data } = useTina(props);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
  <div className="h-24 mx-2 px-4 py-3 flex items-center justify-between font-roboto">
    <div className="max-h-full w-64 flex items-center">
      <Image
        className="pr-2 w-full h-auto"  
        src={"/logo/atlantinivel-logo-1.svg"}
        alt={"AtlantiNivel logo"}
        width={240} 
        height={0}
        priority
      />
    </div>
      <div className='mx-20'>
      <nav className="hidden md:flex space-x-14">
          <a href="/" className={`${getLinkClass('/')}`}><strong>Home</strong></a>
          <a href="/company" className={`${getLinkClass('/company')}`}><strong>Empresa</strong></a>
          <a href="/services" className={`${getLinkClass('/services')}`}><strong>Serviços</strong></a>
          <a href="/portfolio" className={`${getLinkClass('/portfolio')}`}><strong>Portfólio</strong></a>
          <a href="/news" className={`${getLinkClass('/news')}`}><strong>Notícias</strong></a>
          <a href="/contacts" className={`${getLinkClass('/contacts')}`}><strong>Contactos</strong></a>
        </nav>
      </div>
        

        <Button variant="outline" className="border-2 border-atlantiBlue text-atlantiBlue hover:bg-atlantiBlue hover:text-white" >
            Pedir Orçamento
          </Button>


        <div className="md:hidden">

        {/* Inserir Hamburguer */}
        </div>
      </div>
    </header>
  );
}