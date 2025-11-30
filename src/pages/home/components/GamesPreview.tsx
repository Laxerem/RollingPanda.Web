import type React from "react";
import "./styles/games.scss"
import { useEffect, useState } from "react";
import { hover, number } from "motion";

export interface IGameCard {
    name: string,
    description: string,
    backgroundImage: string
}

interface IGameCardProps {
    className?: string,
    card: IGameCard,
    index: number,
    backgroundColorDefault?: string,
    backgroundColorHover?: string
}

interface GamesContainerProps {
    games: Array<IGameCard>
}

const defaultWidth = 33

const GameCard: React.FC<IGameCardProps> = ({className, card, index, backgroundColorDefault, backgroundColorHover}) => {
    const [isHovered, setIsHovered] = useState<number | null>(null)
    const [width, setWidth] = useState<number>(defaultWidth)
    const [backgroundColor, setBackgroundColor] = useState<string | undefined>(backgroundColorDefault)

    useEffect(() => {
        if (isHovered != null) {
            setWidth(50)
            setBackgroundColor(backgroundColorHover)
        }
        else {
            setWidth(defaultWidth)
            setBackgroundColor(backgroundColorDefault)
        }
    }, [isHovered])


    return (
        <div 
        className={className ?? undefined}
        key={index}
        style={{
            background: ` linear-gradient(${backgroundColor}, ${backgroundColor}), 
            url(${card.backgroundImage}) top no-repeat`,
            backgroundSize: "cover",
            width: `${width}%`
        }}
        onMouseEnter={() => setIsHovered(index)}
        onMouseLeave={() => setIsHovered(null)}
        >
            <h1>{card.name}</h1>
            <h2>{card.description}</h2>
        </div>
    )
}

const GamesPreview: React.FC<GamesContainerProps> = ({games}) => {


    return (
        <div className="games-container">
            <h1>Игры</h1>
            <div className="games-preview">
                {games.map((card, i) => 
                    <GameCard 
                    key={i} 
                    className="game-card-preview" 
                    card={card} 
                    index={i}
                    backgroundColorDefault="rgba(51, 6, 11, 0.5)"
                    backgroundColorHover="rgba(51, 6, 11, 0.2)"
                    />
                )}
            </div>        
        </div>
    )
}

export default GamesPreview;