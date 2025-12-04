import type React from "react"
import './index.scss'
import GamesCatalog from "./components/GamesCatalog"
import { games } from "../../data/games"

const GamesCatalogPage: React.FC = () => (
    <main>
        <div className="games-catalog-container">
            <h1>ИГРЫ</h1>
            <GamesCatalog games={games} />
        </div>
    </main>
)

export default GamesCatalogPage