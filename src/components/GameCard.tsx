import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gamesMarksDict, type IGameMark, type IGameMarksImages } from "../data/games";

export interface IGameCard {
    name: string,
    mainImage: string,
    backgroundImage: string,
    marks?: Array<IGameMark>,
    author?: string,
    description?: string
}

interface IGameCardProps {
    game: IGameCard
}

interface IGameCardButtonProps {
    link: string
}

interface IGameMarkProps {
    text: string,
    image: string,
    widthCompression?: number
}

const GameMark: React.FC<IGameMarkProps> = ({text, image, widthCompression = 0}) => {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)

        return (
            window.removeEventListener('resize', handleWidth)
        )
    }, [])

    return (
        <div className="mark">
            {width > widthCompression ? (
                <div 
                className="mark-image" 
                style={{
                    background: `url(${image}) no-repeat center`,
                    backgroundSize: "100%"
                }}
                />
            ) : (
                <></>
            )}
            <span>{text}</span>
        </div>
    )
}

const GameCardButton: React.FC<IGameCardButtonProps> = ({link}) => {
    const navigation = useNavigate()

    return (
        <div className="game-card-button">
            <span onClick={() => navigation(link)}>Подробнее</span>
        </div>
    )
}


const GameCard: React.FC<IGameCardProps> = ({ game }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <div
            className="game-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <>
                <div
                className="game-card-image"
                style={{
                    background: `url(${game.backgroundImage}) no-repeat center`,
                    backgroundSize: "100%",
                    width: "100%",
                    height: "45%"
                }}
                />
                <div className="game-card-content">
                    <h1>{game.name}</h1>
                    <h2>{game.author}</h2>
                    {game.marks ? (
                        <div className="marks-container">
                            {game.marks.map((mark, i) => (
                                <GameMark key={i} text={mark} image={gamesMarksDict[mark]} widthCompression={700} />
                            ))}
                        </div>
                    ) : (<></>)}
                    <GameCardButton link={game.name}/>
                </div>
                </>
            ) : (
                <div 
                className="game-card-image" 
                style={{
                    background: `url(${game.mainImage}) no-repeat`,
                    height: "100%"        
                }}
                />
            )}
        </div>
    );
};

export default GameCard;