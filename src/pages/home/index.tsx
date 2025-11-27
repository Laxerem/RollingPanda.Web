import type React from "react"
import './index.scss'
import HomePreview from "./components/HomePreview"
import LittleAbout from "./components/LittleAbout"

const HomePage: React.FC = () => {

    return (
        <main>
            <HomePreview />
            <LittleAbout />
        </main>
    )
}

export default HomePage