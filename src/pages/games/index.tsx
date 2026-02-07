import type React from "react"
import './index.scss'
import GamesCatalog from "./components/GamesCatalog"
import { useGames } from "../../hooks/useApiData"

const GamesCatalogPage: React.FC = () => {
    const { data: games, loading } = useGames()

    if (loading) {
        return (
            <main>
                <div className="games-catalog-container">
                    <h1>ИГРЫ</h1>
                    <p>Загрузка...</p>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className="games-catalog-container">
                <h1>ИГРЫ</h1>
                <GamesCatalog games={games} />
            </div>
        </main>
    )
}

export default GamesCatalogPage