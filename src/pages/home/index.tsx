import type React from "react"
import './index.scss'
import HomePreview from "./components/HomePreview"
import LittleAbout from "./components/LittleAbout"
import GamesPreview from "./components/GamesPreview"
import NewsPreview from "./components/NewsPreview"
import { useGamesPreview, useNews } from "../../hooks/useApiData"

const HomePage: React.FC = () => {
    const { data: gamesPreview, loading: gamesLoading } = useGamesPreview()
    const { data: newsPreview, loading: newsLoading } = useNews()

    return (
        <main>
            <div className="preview-image">
                <HomePreview />
                <LittleAbout minimal_ratio={0.4} />
            </div>
            {gamesLoading ? <div>Загрузка игр...</div> : <GamesPreview games={gamesPreview} />}
            {newsLoading ? <div>Загрузка новостей...</div> : <NewsPreview props={newsPreview} />}
            {/* <AnnoouncementsContainer props={annoouncements} /> */}
        </main>
    )
}

export default HomePage