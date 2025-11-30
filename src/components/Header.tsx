import type React from "react"
import { useEffect, useState } from "react";
import StudioLinks from "./StudioLinks";

interface IHeaderCatalog {
    menu: {
        [name:string]: string
    }
}

const HeaderMobileCatalog: React.FC<IHeaderCatalog> = ({menu}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="header-catalog-mobile">
            <div className="catalog-icon" onClick={() => {setIsOpen(!isOpen)}} />
            {isOpen ? (
                <div className="menu-catalog">
                    {Object.keys(menu).map((key, index) => 
                        <span key={index}>{key}</span>
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
    const menu = {
        "Главная": "",
        "О нас": "",
        "Анонсы": "",
        "Игры": "",
        "Контакты": ""
    }


    return (
        <header>
            <div className="header-content">
                <div className="studio-logo">
                    <img src="studio-logo.svg" className="logo-image"/>
                    <span>Rolling Panda</span>
                </div>
                {isMobile ? (
                    <HeaderMobileCatalog menu={menu} />
                ) : (
                    <>
                    <StudioLinks className="links"/>
                    <div className="site-catalog">
                        <a>Главная</a>
                        <a>О нас</a>
                        <a>Анонсы</a>
                        <a>Игры</a>
                        <a>Контакты</a>
                    </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header