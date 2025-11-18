import type React from "react"

const links_list = ["telegram.svg", "youtube.svg", "tic-tok.svg", "steam.svg", "twich.svg"];

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-content">
                <div className="studio-logo">
                    <img src="studio-logo.svg" className="logo-image"/>
                    <span>Rolling Panda</span>
                </div>
                <div className="links">
                    {links_list.map((icon, i) => 
                        <img key={i} src={icon}/>
                    )}
                </div>
                <div className="site-catalog">
                    <a>Главная</a>
                    <a>О нас</a>
                    <a>Анонсы</a>
                    <a>Игры</a>
                    <a>Контакты</a>
                </div>
            </div>
        </header>
    )
}

export default Header