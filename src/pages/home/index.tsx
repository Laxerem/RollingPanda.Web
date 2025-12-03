import type React from "react"
import './index.scss'
import HomePreview from "./components/HomePreview"
import LittleAbout from "./components/LittleAbout"
import Footer from "../../components/Footer"
import GamesPreview, { type IGameCard } from "./components/GamesPreview"
import ProfileCard from "../../components/ProfileCard"
import NewsPreview, { type INewsContent } from "./components/NewsPreview"

const games: Array<IGameCard> = [
    {
        name: "Panda",
        description: "Лучшая игра в мире, максимально советую",
        backgroundImage: "paper.png"
    },
    {
        name: "Топ игра",
        description: "Не ребят ну это топ типа",
        backgroundImage: "studio-logo.png"
    },
    {
        name: "Game",
        description: "Нет слов, одни эмоции",
        backgroundImage: ""
    }
]

const news: Array<INewsContent> = [
    {
        date: new Date(25, 11, 3),
        heading: "Немного изнутри: работы 4-го курса!",
        content: "Наши студенты не просто изучают 3D-моделирование - они уже создают работы, достойные настоящих игровых проектов.",
        mainImage: "game1.png",
        secondImage: "game2.png"
    },
    {
        date: new Date("2025-13-03T10:20:00Z"),
        heading: "Неделя до GameJam!",
        content: "Мы провели подготовительный митап, чтобы зарядить участников идеями и полезными инструментами.",
        mainImage: "game3.png",
        secondImage: "game4.png"
    }
]

const HomePage: React.FC = () => {

    return (
        <>
        <main>
            <div className="preview-image">
                <HomePreview />
                <LittleAbout minimal_ratio={0.4} />
            </div>
            <GamesPreview games={games} />
            <NewsPreview props={news}/>
        </main>
        <Footer />
        </>
    )
}

export default HomePage