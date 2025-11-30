import type React from "react"
import './index.scss'
import HomePreview from "./components/HomePreview"
import LittleAbout from "./components/LittleAbout"
import RollingLinks from "../../components/RollingLinks"
import Footer from "../../components/Footer"
import GamesPreview, { type IGameCard } from "./components/GamesPreview"

const games: Array<IGameCard> = [
    {
        name: "Panda",
        description: "Лучшая игра в мире, максимально советую",
        backgroundImage: "preview.png"
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

const HomePage: React.FC = () => {

    return (
        <>
        <main>
            <div className="preview-image">
                <HomePreview />
                <LittleAbout minimal_ratio={0.4} />
            </div>
            <GamesPreview games={games}/>
        </main>
        <Footer />
        </>
    )
}

export default HomePage