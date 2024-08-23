import { PageQuery } from "@/tina/__generated__/types";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import { Footer } from "../footer";
import { Header } from "../header";
import { Button } from "@/@/components/ui/button";

export function PageTop(props: {
    data: PageQuery;
    variables: object;
    query: string;
    imageURL: string;
    title: string;
    text: string;
    isImageLeft: boolean;
}) {
    const { data } = useTina(props);

    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            setWindowHeight(window.innerHeight);
        };

        // Set initial height
        updateHeight();

        // Add event listener
        window.addEventListener('resize', updateHeight);

        // Clean up
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (


            <div style={{ position: 'relative', width: '100%', height: `${windowHeight}px` }}>
                <div className={`absolute w-2/3 h-full bg-cover bg-center z-[-1]  ${props.isImageLeft ? 'left-0' : 'right-0'}`}>
                    <Image className="w-full h-full"
                        src={props.imageURL}
                        alt={""}
                        width={1920}
                        height={0}
                        priority />
                </div>
                <div className={`${props.isImageLeft ? 'absolute w-1/2 pr-80 pt-80 right-0' : 'w-1/2 pl-80 pt-80'} `}>
                    <h1 className={`text-6xl font-bold text-atlantiBlue`}>{props.title}</h1>
                    <div className=" pt-6">
                        <p className="text-gray-700 mb-4">{props.text}</p>



                    </div>
                </div>


                <Button onClick={scrollDown} className="absolute bottom-5 left-1/2 border-none bg-none">
                    <ChevronDown className="h-4 w-4" />
                </Button>


            </div>
    );
}