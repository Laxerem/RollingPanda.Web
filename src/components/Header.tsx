import type React from "react"
import { useEffect, useState } from "react";
import StudioLinks from "./StudioLinks";
import { useNavigate } from "react-router-dom";

type Menu = Record<string, string>;

interface IHeaderCatalog {
    menu: Menu
}

const HeaderMobileCatalog: React.FC<IHeaderCatalog> = ({menu}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
        <div className="header-catalog-mobile">
            <div className="catalog-icon" onClick={() => {setIsOpen(!isOpen)}} />
            {isOpen ? (
                <div className="menu-catalog">
                    {Object.keys(menu).map((key, index) => 
                        <span 
                        key={index}
                        onClick={() => navigate(menu[key])}
                        >
                            {key}
                        </span>
                    )}
                    <StudioLinks className="menu-links"/>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

const Header: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    
    const navigate = useNavigate()

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
        setIsMobile(width < 750)
    }, [width])


    // Data
    const menu: Menu = {
        "Главная": "",
        "О нас": "",
        "Анонсы": "",
        "Игры": "/games",
        "Контакты": ""
    }

    return (
        <header>
            <div className="header-content">
                <div className="studio-logo">
                    <img src="/studio-logo.svg" className="logo-image"/>
                    <span>Rolling Panda</span>
                </div>
                {isMobile ? (
                    <HeaderMobileCatalog menu={menu} />
                ) : (
                    <>
                    <StudioLinks className="links"/>
                    <div className="site-catalog">
                        {Object.keys(menu).map((key, index) => (
                            <a
                            key={index}
                            onClick={() => navigate(menu[key])}
                            >
                                {key}
                            </a>
                        ))}
                    </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header