import type React from "react";
import StudioLinks from "./StudioLinks";
import { useEffect, useState } from "react";
import { developersData } from "../data/developers";
import { useLinks } from "../hooks/useApiData";

export interface IDevelopers {
    name: string,
    role: string,
    link?: string
}

interface IFooterContentProps extends React.PropsWithChildren {
    footerLinks: ILink
}

const FooterContent: React.FC<IFooterContentProps> = ({children, footerLinks}) => {

    return (
        <div className="footer-content">
            <div className="footer-preview">
                <img src="studio-logo.svg"/>
                <div className="footer-preview-text">
                    <h1>Rolling Panda</h1>
                </div>
            </div>
            <StudioLinks
            className="footer-links"
            flexdefault
            links={footerLinks}
            style={{
                justifyContent: "flex-end"
            }}
            />
            {children}
        </div>
    )
}

const Footer: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { footerLinks } = useLinks();

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
        
    }, [])

    useEffect(() => {
        setIsMobile(width < 700)
    }, [width])

    return (
        <footer id="footer">
            {isMobile ? (
                <>
                <FooterContent footerLinks={footerLinks} />
                <div className="text"
                style={{
                    alignItems: "center"
                }}
                >
                    <div className="developers"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "10px",
                        width: "50%"
                    }}
                    >
                        {developersData.map((dev, i) => (
                            <p onClick={dev.link ? () => window.open(dev.link, "_blank") : undefined} key={i}>
                                <span>{dev.role}</span> {dev.name}
                            </p>
                        ))}
                    </div>
                </div>
                </>
            ) : (
                <FooterContent footerLinks={footerLinks}>
                    <div className="text"
                    style={{
                        alignItems: "flex-end"
                    }}
                    >
                        <div className="developers">
                            {developersData.map((dev, i) => (
                                <p onClick={dev.link ? () => window.open(dev.link, "_blank") : undefined} key={i}>
                                    <span>{dev.role}</span> {dev.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </FooterContent>
            )}
        </footer>
    )
}

export default Footer;