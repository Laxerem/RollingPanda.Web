import type React from "react"
import { useEffect, useState } from "react";
import StudioLinks, { type ILink } from "./StudioLinks";
import { useNavigate } from "react-router-dom";
import { headerLinksData } from "../data/links";

type ScrollAction = { scrollTo: string };
type MenuAction = string | ScrollAction;
type Menu = Record<string, MenuAction>;

interface IHeaderCatalog {
    links: ILink
    menu: Menu
}

const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

const handleMenuClick = (action: MenuAction, navigate: Function) => {
    if (typeof action === "string") {
        navigate(action);
    } else {
        // если мы уже на этой странице → просто скроллим
        if (location.pathname === "/") {
            scrollToId(action.scrollTo);
        } else {
            // иначе: передаём параметр, чтобы Home потом скроллил сам
            navigate(`/?scrollTo=${action.scrollTo}`);
        }
    }
};


const HeaderMobileCatalog: React.FC<IHeaderCatalog> = ({links, menu}) => {
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
                        onClick={() => handleMenuClick(menu[key], navigate)}
                        >
                            {key}
                        </span>
                    )}
                    <StudioLinks className="menu-links" links={links}/>
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
        "Главная": { scrollTo: "home" },
        "О нас": { scrollTo: "about_us" },
        "Анонсы": "",
        "Игры": "/games",
        "Контакты": { scrollTo: "footer" }
    }

    return (
        <header>
            <div className="header-content">
                <div className="studio-logo">
                    <img src="/studio-logo.svg" className="logo-image"/>
                    <span>Rolling Panda</span>
                </div>
                {isMobile ? (
                    <HeaderMobileCatalog menu={menu} links={headerLinksData}/>
                ) : (
                    <>
                    <StudioLinks className="links" links={headerLinksData}/>
                    <div className="site-catalog">
                        {Object.keys(menu).map((key, index) => (
                            <a
                            key={index}
                            onClick={() => handleMenuClick(menu[key], navigate)}
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