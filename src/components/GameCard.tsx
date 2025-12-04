import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IGameCard {
    name: string,
    description: string,
    backgroundImage: string,
    author?: string
}

interface IGameCardProps {
    game: IGameCard
}

interface IGameCardButtonProps {
    link: string
}

const GameCardButton: React.FC<IGameCardButtonProps> = ({link}) => {
    const navigation = useNavigate()

    return (
        <div className="game-card-button">
            <span onClick={() => navigation(link)}>Подробнее</span>
        </div>
    )
}


const BASE_SCREEN_WIDTH = 2200;
const BASE_CARD_WIDTH = 570;
const BASE_CARD_HEIGHT = 759;
const MIN_RATIO = 0.4; // можешь настроить

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
    const [ratio, setRatio] = useState(1);
    const [isHovered, setIsHovered] = useState<boolean>(false)

    useEffect(() => {
        const calculateRatio = () => {
            let r = window.innerWidth / BASE_SCREEN_WIDTH;
            if (r < MIN_RATIO) r = MIN_RATIO;
            setRatio(r);
        };

        calculateRatio();
        window.addEventListener("resize", calculateRatio);
        return () => window.removeEventListener("resize", calculateRatio);
    }, []);

    useEffect(() => {

    }, [isHovered])

    const { width, height } = useMemo(() => {
        return {
            width: BASE_CARD_WIDTH * ratio,
            height: BASE_CARD_HEIGHT * ratio,
        };
    }, [ratio])

    return (
        <div
            className="game-card"
            style={{
                width,
                height,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
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
                <p>{game.description}</p>
                {isHovered ? (
                    <GameCardButton link={game.name}/>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default GameCard;