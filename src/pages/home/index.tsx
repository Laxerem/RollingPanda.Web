import type React from "react"
import './index.scss'
import HomePreview from "./components/HomePreview"
import LittleAbout from "./components/LittleAbout"
import GamesPreview from "./components/GamesPreview"
import NewsPreview from "./components/NewsPreview"
import { gamesPreview } from "../../data/games_preview"
import { newsPreview } from "../../data/news_preview"
import AnnoouncementsContainer from "./components/Announcements"
import { annoouncements } from "../../data/annoouncements"

const HomePage: React.FC = () => (
    <main>
        <div className="preview-image">
            <HomePreview />
            <LittleAbout minimal_ratio={0.4} />
        </div>
        <GamesPreview games={gamesPreview} />
        <NewsPreview props={newsPreview} />
        {/* <AnnoouncementsContainer props={annoouncements} /> */}
    </main>
)

export default HomePage