import { PageQuery } from "@/tina/__generated__/types";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import { Button } from "@/@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/@/components/ui/alert";
import image from "next/image";
import { title } from "process";

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

        <div className="relative h-[70vh] w-full" style={{ position: 'relative', width: '100%' }}>

            <div className={`absolute w-full h-[70vh] bg-cover bg-center z-[-1] `}>
                <Image className="w-full h-full object-cover"
                    src={props.imageURL}
                    alt={""}
                    width={1920}
                    height={0}
                    priority />
            </div>
            <div className={`absolute inset-0 bg-atlantiBlue opacity-50 w-[80vw] z-10 ${props.isImageLeft ? '' : ''}`}>
            </div>


        <div className="w-[80vw] absolute inset-0 flex items-center justify-start text-white z-20">
            <div className="p-8 m-  ">
                <h1 className="text-6xl font-bold text-atlantiBlue mb-4">
                {props.title}
                </h1>
                <p className="text-white">
                {props.text}
                </p>
            </div>
        </div>
            
        </div>

        
    );
}