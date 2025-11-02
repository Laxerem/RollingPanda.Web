import type React from "react"

const Header: React.FC = () => {
    return (
        <header>
            <div className="studio-logo">
                <img src="studio-logo.png" className="logo-image"/>
                <span>Rolling Panda</span>
            </div>
            <div className="site-catalog">
                <a>Главная</a>
                <a>О нас</a>
                <a>Анонсы</a>
                <a>Игры</a>
                <a>Контакты</a>
            </div>
        </header>
    )
}

export default Header