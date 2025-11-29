import type React from "react"
import './index.scss'
import HomePreview from "./components/HomePreview"
import LittleAbout from "./components/LittleAbout"
import RollingLinks from "../../components/RollingLinks"
import Footer from "../../components/Footer"

const HomePage: React.FC = () => {

    return (
        <>
        <main>
            <div className="preview-image">
                <HomePreview />
                <LittleAbout minimal_ratio={0.3} />
            </div>
        </main>
        <Footer />
        </>
    )
}

export default HomePage