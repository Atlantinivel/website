

export function TextAndLink(props: {
    title:string;
    isTitleHidden:boolean;
    text:string;
    linkText:string;
    linkUrl:string;
    isLeft:boolean;
  }) {



    return (

      <div className={`w-1/2 px-24  z-10  ${props.isLeft? 'mr-auto' : 'ml-auto'}`}>
        <h1 className={`text-3xl p-6 font-bold text-atlantiBlue ${props.isTitleHidden? 'hidden' : ''}`}>{props.title}</h1>
        <div className=" p-6">
          <p className="text-gray-700 mb-4">{props.text}a</p>
          
            <a href={props.linkUrl} className="text-black hover:text-atlantiBlue">------<strong>{props.linkText}</strong></a>
          
        </div>
      </div>
 
    );
  };