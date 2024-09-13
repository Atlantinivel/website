import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TextAndLink } from "../text-and-link/textAndLink";
import Image from "next/image";



export function Info(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {

  const { data } = useTina(props);


  return (
      <div className="w-full mx-10 leading-7 text-gray-400 text-[14px] font-roboto">
        

        <Image
          src={"/logo/atlantinivel-background.png"}
          alt={""}
          width={560}
          height={0}
          style={{
              position: "absolute",
              objectFit: "cover",
              zIndex: 0,
              marginLeft: "25rem"
          }}
        >
        </Image>
        
    
        
      <div className="mt-20"></div>
      <TextAndLink title="algo" isTitleHidden={true}
        text="A actuar no mercado da construção civil e obras públicas, com o alvará n.º 58193, a empresa Atlântinível apresenta-se em grande expansão no mercado, sendo já uma referência na sua área de domínio, revelando elevados valores como a qualidade e profissionalismo que coloca ao seu dispor.A Atlântinível tem hoje em dia diversas competências que lhe permitem actuar nas diferentes áreas da construção civil O seu percurso evolutivo e consistente caracterizados pelas diferentes experiências e aprendizagens permitem hoje uma elevada habilitação para o ramo"
        linkUrl="/portfolio/caxinas.jpg" linkText="Saiba Mais" isLeft={true} />
        <div className="mb-40"/>
    </div>
  );
};