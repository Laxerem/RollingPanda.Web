import type React from "react";
import StudioLinks from "./StudioLinks";
import { footerLinksData } from "../data/links";

const Footer: React.FC = () => {

    return (
        <footer id="footer">
            <div className="footer-content">
                <div>
                    <div className="footer-preview">
                        <img src="studio-logo.svg"/>
                        <div className="footer-preview-text">
                            <h1>Rolling Panda</h1>
                            <p>Telegram</p>
                        </div>
                    </div>
                </div>
                <StudioLinks className="footer-links" flexdefault links={footerLinksData}/>
                <div></div>
            </div>
        </footer>
    )
}

export default Footer;