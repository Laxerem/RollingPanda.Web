import type React from "react";

export interface ILink {
    [key:string]: string
}

interface StudioLinksProps {
    links: ILink
    className?: string,
    flexdefault?: boolean,
    style?: React.CSSProperties
}

const StudioLinks: React.FC<StudioLinksProps> = ({links, className, flexdefault, style}) => {
    return (
        <div
            className={className}
            style={{
                ...(flexdefault
                    ? {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "0.5vw"
                      }
                    : {}),
                ...style
            }}
        >
            {(Object.keys(links)).map((key, index) => 
                <img key={index} src={key} onClick={() => window.open(links[key], "_blank")}/>
            )}
        </div>
    )
}

export default StudioLinks;