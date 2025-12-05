import type { IGameCard } from "../components/GameCard";

export type IGameMarksImages = {
    [K in IGameMark]: string;
};

export type IGameMark = "GameJam" | "Скачиваемая"

export const gamesMarksDict: IGameMarksImages = {
    "GameJam": "",
    "Скачиваемая": "install.svg"
}

export const games: Array<IGameCard> = [
    {
        name: "Mario",
        description: "Обажаю эту игру",
        backgroundImage: "game1.png",
        marks: ["Скачиваемая", "GameJam"],
        mainImage: "game1.png",
        author: "Лев Лихачёв"
    },
    {
        name: "BrawlStars",
        description: "Обажаю эту игру",
        backgroundImage: "game1.png",
        mainImage: "game1.png",
        marks: ["GameJam"],
        author: "",
    },
    {
        name: "Mario",
        description: "Обажаю эту игру",
        backgroundImage: "game1.png",
        mainImage: "game1.png",
        marks: ["Downloaded"],
        author: ""
    },
    {
        name: "Mario",
        description: "Обажаю эту игру",
        backgroundImage: "game1.png",
        mainImage: "game1.png"
    }
]