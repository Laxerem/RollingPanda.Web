import type { IGameCard } from "../components/GameCard";

export type IGameMarksImages = {
    [K in IGameMark]: string;
};

export type IGameMark = "GameJam" | "Скачиваемая"

export const gamesMarksDict: IGameMarksImages = {
    "GameJam": "gamejam.svg",
    "Скачиваемая": "install.svg"
}

export const games: Array<IGameCard> = [
    {
        name: "VdVM07",
        description: "Главный герой - наемник, получивший заказ устранить учёного, чьи эксперименты вышли из-под контроля. Он пробирается через пещеру в лабораторию, чтобы добраться до цели.",
        backgroundImage: "game2.png",
        marks: ["GameJam"],
        mainImage: "game1.png",
        author: "Александр Прудников, Виктория Рубан, Никита Спасский"
    },
    {
        name: "SpellShot",
        description: "Русская рулетка, но в более динамичной и необычной обёртке. Пули имеют свои особенности (на данный момент только урон и лечение). Игрок загружает в барабан желаемые пули, после чего поочереди с соперником делает выстрелы. Порядок пуль случаен, игрок знает лишь количество. Ваша задача - выжить и дойти до босса",
        backgroundImage: "game4.png",
        mainImage: "game3.png",
        author: "Домуховский Артём, Карфидов Вячеслав, Кирилл Борисов, Даниил Валишин"
    },
    {
        name: "SFERA",
        description: "SFERA — экшен платформер. Микс 3D и ретро 2D. Ты наёмный убийца. Тебе поручено уничтожить банду роботов. Выполни заказ и заработай много денег.",
        backgroundImage: "game5.png",
        mainImage: "game3.png",
        author: "SergioPoverony"
    }
]