import { useParams } from "react-router-dom";
import { games } from "../../../data/games";
import type { IGameCard } from "../../../components/GameCard";
import '../game.scss'

const GamePage = () => {
    const { id } = useParams();
    const game = games.find(g => g.name === id) as IGameCard

    return (
        <main>
            <div className="game-container">
                <div className="game-heading">
                    <h1>{game.name}</h1>
                    {game.install ? (
                        <div className="game-install-container">
                            <div className="button-install" />
                            <div className="text-install">
                                <span>Скачать</span>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="game-content-container">
                    <div>
                        <div 
                        className="game-content-image"
                        style={{
                            background: `url(/${game.backgroundImage}) no-repeat`,
                            backgroundSize: "cover"
                        }}
                        />
                        <div className="game-text-content">
                            <div>
                                <h2>Разработчики:</h2>
                                <h3>{game.author}</h3>
                            </div>
                            <div>
                                <h2>Описание:</h2>
                                <p>{game.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GamePage