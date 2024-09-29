"use client";


import { useTina, tinaField } from "tinacms/dist/react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { PageTop } from "../page-top/pageTop";
import { PageQuery } from "@/tina/__generated__/types";
import { NewsGrid } from "../news-grid/newsGrid";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);


  const photoModels = [
    { imageSrc: "/portfolio/portfolioTop.jpg", title: "Atlantinível distinguida como empresa qualificada R.U.-I.S.", date: "15 Junho, 2018" },
    { imageSrc: "/portfolio/portfolioTop.jpg", title: "Atlantinível distinguida como empresa qualificada R.U.-I.S.", date: "15 Junho, 2018" },
    { imageSrc: "/portfolio/portfolioTop.jpg", title: "Atlantinível distinguida como empresa qualificada R.U.-I.S.", date: "15 Junho, 2018" },
    { imageSrc: "/portfolio/portfolioTop.jpg", title: "Atlantinível distinguida como empresa qualificada R.U.-I.S.", date: "15 Junho, 2018" },
    { imageSrc: "/portfolio/portfolioTop.jpg", title: "Atlantinível distinguida como empresa qualificada R.U.-I.S.", date: "15 Junho, 2018" },
    { imageSrc: "/portfolio/portfolioTop.jpg", title: "Atlantinível distinguida como empresa qualificada R.U.-I.S.", date: "15 Junho, 2018" },

  ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header data={data} variables={props.variables} query={props.query} />

      <PageTop data={data} variables={props.variables} query={props.query} imageURL="/portfolio/companyTop.jpg" title="Mantenha-se informado"
        text="Veja as novas noticias no nosso blog"
        isImageLeft={true} />
      <div className="my-5" />

      <div className="w-full  py-8 ">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-atlantiBlue">Últimas Notícias</h2>

        <NewsGrid list={photoModels} />
      </div>
        </div>

      <div className="my-10" />


      <Footer data={data} variables={props.variables} query={props.query} />
    </main>
  );
}
