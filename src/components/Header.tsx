import type React from "react"
import { useEffect, useState } from "react";

interface IHeaderCatalog {
    menu: {
        [name:string]: string
    },
    links: {
        [image:string]: string
    }
}

const HeaderMobileCatalog: React.FC<IHeaderCatalog> = ({menu, links}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="header-catalog-mobile">
            <div className="catalog-icon" onClick={() => {setIsOpen(!isOpen)}} />
            {isOpen ? (
                <div className="menu-catalog">
                    {Object.keys(menu).map((key, index) => 
                        <span key={index}>{key}</span>
                    )}
                    <div className="menu-links">
                        {Object.keys(links).map((key, index) => 
                            <img key={index} src={`${key}`} />
                        )}
                    </div>
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

    const links = {
        "telegram.svg": "",
        "youtube.svg": "",
        "tic-tok.svg": "",
        "steam.svg": "",
        "twich.svg": ""
    };

    return (
        <header>
            <div className="header-content">
                <div className="studio-logo">
                    <img src="studio-logo.svg" className="logo-image"/>
                    <span>Rolling Panda</span>
                </div>
                {isMobile ? (
                    <HeaderMobileCatalog menu={menu} links={links} />
                ) : (
                    <>
                    <div className="links">
                        {Object.keys(links).map((key, index) => 
                            <img key={index} src={key}/>
                        )}
                    </div>
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