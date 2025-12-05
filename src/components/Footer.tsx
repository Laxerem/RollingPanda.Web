import type React from "react";
import StudioLinks from "./StudioLinks";
import { footerLinksData } from "../data/links";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isMobile, setIsMobile] = useState<boolean>(false);

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
            <div className="footer-content">
                <div>
                    <div className="footer-preview">
                        <img src="studio-logo.svg"/>
                        <div className="footer-preview-text">
                            <h1>Rolling Panda</h1>
                        </div>
                    </div>
                </div>
                <StudioLinks className="footer-links" flexdefault links={footerLinksData}/>
                {isMobile ? (
                    <></>    
                ) : (
                    <div></div>
                )}
            </div>
        </footer>
    )
}

export default Footer;