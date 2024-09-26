"use client";

import { PageQuery } from "@/tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { useState, useEffect } from "react";
import { PageTop } from "../page-top/pageTop";
import { GridPortfolio } from "../grid-portfolio/gridPortfolio";
import Image from "next/image";
import { OtherNewsItem } from "../other-news-item/otherNewsItem";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header data={data} variables={props.variables} query={props.query} />

      <PageTop data={data} variables={props.variables} query={props.query} imageURL="/portfolio/portfolioTop.jpg" title="Noticia Base"
        text="Veja o que aconteceu"
        isImageLeft={false} />

      <div className="flex flex-col-reverse lg:flex-row p-10">

      <div className="max-w-md mx-auto mt-20  lg:mt-0  lg:mr-20 ">
      <h1 className="text-2xl font-bold mb-6 text-atlantiBlue">Últimas Notícias</h1>

      <div className="flex-col lg:flex-row">


      <OtherNewsItem
        imageURL="/portfolio/portfolioTop.jpg"
        newsDate="15 Junho, 2018"
        linkText="Atlantinível distinguida como empresa qualificada R.U.-I.S."
        linkUrl="/"
      />
      <OtherNewsItem
        imageURL="/portfolio/portfolioTop.jpg"
        newsDate="15 Junho, 2018"
        linkText="Atlantinível distinguida como empresa qualificada R.U.-I.S."
        linkUrl="/"
      />
      <OtherNewsItem
        imageURL="/portfolio/portfolioTop.jpg"
        newsDate="15 Junho, 2018"
        linkText="Atlantinível distinguida como empresa qualificada R.U.-I.S."
        linkUrl="/"
      />
      </div>
      </div>

      <div className="max-w-3xl mx-auto ">
        <h1 className="text-4xl font-bold mb-1 text-atlantiBlue">Isto Vem do Tina</h1>
        <div className="w-1/6 h-[2px] bg-atlantiBlue mb-2"></div>
        <p className="text-sm text-gray-600 mb-4">16/08/2024</p>
        
        {/* Todas estas infos vem do Tina. Se fossem componentes, faria sentido ter nos props, aqui deve ser parte da construcao da pagina */}
        <Image
          src="/contacts/contactTop.jpeg"
          alt="Algum alt"
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-1"
        />

        <p className="mb-5">O mesmo alt da imagem</p>

        <h2 className="text-xl font-semibold mb-2 text-atlantiBlue">SubTitulo Base</h2>

        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      

      </div>

      <Footer data={data} variables={props.variables} query={props.query} />
    </main>
  );
}