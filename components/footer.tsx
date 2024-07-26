"use client"

import React from 'react';
import { tinaField, useTina } from 'tinacms/dist/react';
import { PageQuery } from "../tina/__generated__/types";
import Image from "next/image";


export function Footer(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {

  const { data } = useTina(props);
  const isMobile = true;
  return (
    <footer className='w-full h-auto mx-auto px-12 bg-atlantiBlue text-white font-roboto container' >
      <div className='fill grid grid-cols-1 md:grid-cols-4 gap-20 text-gray-400 text-[14px] py-20'>

        <div className=''>

          <div className='mb-8 font-extrabold text-2xl' >
            <h6>AtlantiNivel</h6>
          </div>
          <div className=' leading-relaxed' >
            <p>Procuramos ter uma dinâmica que nos permita um crescimento continuado das nossas competências.</p>
          </div>

        </div>
        <div className=''>
          <ul>
            <li className='mb-[10px]'><a href="https://atlantinivel.pt/wp-content/uploads/2018/11/Apresenta%C3%A7%C3%A3o.pdf">Download Apresentação</a></li>
            <li className='mb-[10px]'><a href="https://atlantinivel.pt/wp-content/uploads/2018/11/PortefolioAtlantinivel.pdf">Download Portfolio</a></li>
            <li className='mb-[10px]'><a href="https://atlantinivel.pt/contactos">Pedido de Orçamento</a></li>
            <li className='mb-[10px]'><a href="https://atlantinivel.pt/contactos/">Contactos</a></li>
          </ul>
        </div>
        <div className=''>
          <Image
            className="relative place-content-center"
            src={"/logo/atlantinivel-symbol.svg"}
            alt={""}
            width={130}
            height={0}
            priority
          />
        </div>
        <div className='text-end flex flex-col  gap-2 '>
          <div> Rua Alto da Ribeira, 570</div>

          <div> 4440-104 Campo, Valongo, Portugal</div>

          <div> <strong>T.</strong>+351 224 151 167</div><div> <strong>M.</strong>+351 961 743 080</div>

          <div> <strong>E.</strong><a href="mailto:geral@atlantinivel.pt">geral@atlantinivel.pt</a></div>

          <a className='my-8' href="https://maps.app.goo.gl/uvW6cK1kzHfBrkbg9"><strong>Ver Mapa</strong></a>
        </div>
      </div>
      <div className='fill grid grid-cols-1 md:grid-cols-2 gap-20 text-gray-400 text-[14px]'>
        <div className=' leading-relaxed' >
          <p>© 2024 Atlântinível | <a href="https://atlantinivel.pt/privacidade">Politica de Privacidade</a></p>
        </div>

      </div>
    </footer>
  );
}