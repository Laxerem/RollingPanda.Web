import type React from "react";

const links = {
    "telegram.svg": "",
    "youtube.svg": "",
    "tic-tok.svg": "",
    "steam.svg": "https://store.steampowered.com/",
    "twich.svg": ""
} as const;

interface StudioLinksProps {
    className?: string,
    flexdefault?: boolean
}

const StudioLinks: React.FC<StudioLinksProps> = ({className, flexdefault}) => {

    return (
        <div 
        className={className} 
        style={ flexdefault ? { 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5vw"
        } : {}}
        >
            {(Object.keys(links) as Array<keyof typeof links>).map((key, index) => 
                <img key={index} src={key} onClick={() => window.open(links[key], "_blank")}/>
            )}
        </div>
    )
}

export default StudioLinks;