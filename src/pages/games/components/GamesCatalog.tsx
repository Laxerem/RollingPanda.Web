import type React from "react"
import GameCard, { type IGameCard } from "../../../components/GameCard"

interface IGamesCatalogProps {
    games: Array<IGameCard>
}

const GamesCatalog: React.FC<IGamesCatalogProps> = ({games}) => {

    return (
        <div className="games-catalog">
            {games.map((card, index) => (
                <GameCard
                    key={index}
                    game={card}
                />
            ))}
        </div>
    )
}

export default GamesCatalog