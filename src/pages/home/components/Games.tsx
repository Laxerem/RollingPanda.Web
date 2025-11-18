import type React from "react";

interface GameCard {
    name: string,
    description: string
}

interface GamesContainerProps {
    games: Array<GameCard>
}

const GamesContainer: React.FC<GamesContainerProps> = ({games}) => {
    return (
        <div className="games-container">
            
        </div>
    )
}