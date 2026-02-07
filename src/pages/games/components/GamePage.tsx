import { useParams } from "react-router-dom";
import { useGames } from "../../../hooks/useApiData";
import '../game.scss'

const GamePage = () => {
    const { id } = useParams();
    const { data: games, loading } = useGames();
    const game = games.find(g => g.name === id);

    if (loading) {
        return (
            <main>
                <div className="game-container">
                    <h1>Загрузка...</h1>
                </div>
            </main>
        );
    }

    if (!game) {
        return (
            <main>
                <div className="game-container">
                    <h1>Игра не найдена</h1>
                    <p>Игра с именем "{id}" не существует.</p>
                </div>
            </main>
        );
    }

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
                    {game.link ? (
                        <div className="game-install-container">
                            <div className="button-link"  onClick={() => window.open(game.link, "_blank")}/>
                            <div className="text-install" onClick={() => window.open(game.link, "_blank")}>
                                <span>Ссылка</span>
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
                            background: `url(${game.backgroundImage}) no-repeat`,
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