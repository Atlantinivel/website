"use client";

import { PageQuery } from "../../tina/__generated__/types";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { Button } from "../../@/components/ui/button";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { CarouselHome } from "../carousel/carousel";
import { Info } from "../info-text/info";
import { ServiceRowHome } from "../services-home/serviceRowHome";




export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  const services = [
    {
      title: 'Construçaõ e Reabilitação',
      description: 'Criar de raiz ou dar uma nova vida a um espaço existente: é esta a essência da construção e reabilitação.',
    },
    {
      title: 'Infra-estruturas',
      description: 'As infraestruturas são cruciais para o funcionamento pleno de qualquer espaço.',
    },
    {
      title: 'Projetos',
      description: 'Quando colocamos as mãos numa obra, o ponto de partida é sempre o projeto.',
    },
    {
      title: 'Demolições',
      description: 'Por vezes, para se poder construir é necessário primeiro demolir.',
    },
  ];

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Header data={data} variables={props.variables} query={props.query} />
      <div className="h-24 md:h-20"></div>

      <CarouselHome data={data} variables={props.variables} query={props.query} />

      <ServiceRowHome data={data} variables={props.variables} query={props.query} services={services} />

      
      <div className="h-24 md:h-20"></div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p
          data-tina-field={tinaField(data.page, "header")}
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          {data.page.header}
        </p>
        
      </div>

      <div
        // @ts-ignore
        data-tina-field={tinaField(data.page.logo, "url")}
        className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={data.page.logo?.url || "/next.svg"}
          alt={data.page.logo?.alt || ""}
          width={180}
          height={37}
          priority
        />
      </div>
      <div
        // @ts-ignore
        data-tina-field={tinaField(data.page.logo, "url")}
        className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={data.page.logo?.url || "/next.svg"}
          alt={data.page.logo?.alt || ""}
          width={180}
          height={37}
          priority
        />
      </div>
      

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data.page.links?.map((link) => {
          return (
            <a
              key={link?.url}
              href={link?.url || ""}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2
                // @ts-ignore
                data-tina-field={tinaField(link, "header")}
                className={`mb-3 text-2xl font-semibold`}
              >
                {link?.header}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p
                // @ts-ignore
                data-tina-field={tinaField(link, "description")}
                className={`m-0 max-w-[30ch] text-sm opacity-50`}
              >
                {link?.description}
              </p>
            </a>
          );
        })}
      </div>
      <Button className="bg-red-500">algo</Button>
      <Footer data={data} variables={props.variables} query={props.query} />
    </main>
  );
}
