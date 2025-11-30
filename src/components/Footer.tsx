import type React from "react";
import StudioLinks from "./StudioLinks";

const Footer: React.FC = () => {

    return (
        <footer>
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
                <StudioLinks className="footer-links" flexdefault/>
                <div></div>
            </div>
        </footer>
    )
}

export default Footer;