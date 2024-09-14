"use client";


import { useTina, tinaField } from "tinacms/dist/react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { PageTop } from "../page-top/pageTop";
import { PageQuery } from "@/tina/__generated__/types";
import { TextAndLink } from "../text-and-link/textAndLink";
import Image from "next/image";
import { Test } from "../test/test";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header data={data} variables={props.variables} query={props.query} />

      <PageTop data={data} variables={props.variables} query={props.query} imageURL="/portfolio/serviceTop.jpeg" title="Crescer e Ser Melhor"
        text="A Atlântinível tem hoje em dia diversas competências, que lhe permitem actuar nas diferentes áreas da construção civil."
        isImageLeft={true} />
      <div className="my-10" />
      <div className="leading-7 text-gray-400 text-[14px] font-roboto">
        <TextAndLink title="Construção e Reabilitação" isTitleHidden={false}
          text="Criar de raiz ou dar uma nova vida a um espaço existente: é esta a essência da construção e reabilitação, duas áreas chave em que a Atlântinível tem construído um caminho sólido e especializado. Independentemente da escala, nenhum projeto é impossível, nenhuma obra demasiada complexa. Qualquer que seja o passo inicial, o resultado final é sempre o mesmo: uma obra à sua medida, pensada e construída exclusivamente para si."
          linkUrl="/home"
          imageURL="/portfolio/oficina.jpg"
          isLeft={true} />

        <TextAndLink title="Construção e Reabilitação" isTitleHidden={false}
          text="Criar de raiz ou dar uma nova vida a um espaço existente: é esta a essência da construção e reabilitação, duas áreas chave em que a Atlântinível tem construído um caminho sólido e especializado. Independentemente da escala, nenhum projeto é impossível, nenhuma obra demasiada complexa. Qualquer que seja o passo inicial, o resultado final é sempre o mesmo: uma obra à sua medida, pensada e construída exclusivamente para si."
          linkUrl="/home"
          imageURL="/portfolio/caxinas.jpg"
          isLeft={false} />
        <TextAndLink title="Construção e Reabilitação" isTitleHidden={false}
          text="Criar de raiz ou dar uma nova vida a um espaço existente: é esta a essência da construção e reabilitação, duas áreas chave em que a Atlântinível tem construído um caminho sólido e especializado. Independentemente da escala, nenhum projeto é impossível, nenhuma obra demasiada complexa. Qualquer que seja o passo inicial, o resultado final é sempre o mesmo: uma obra à sua medida, pensada e construída exclusivamente para si."
          linkUrl="/home"
          imageURL="/portfolio/caxinas.jpg"
          isLeft={true} />
      </div>

      <div className="my-10" />

      <Test data={data} variables={props.variables} query={props.query}></Test>

      <div className="my-10" />


      <Footer data={data} variables={props.variables} query={props.query} />
    </main>
  );
}
