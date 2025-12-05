import type { INewsContent } from "../pages/home/components/NewsPreview";

export const newsPreview: Array<INewsContent> = [
    {
        date: new Date(2025, 11, 3),
        heading: "Немного изнутри: работы 4-го курса!",
        content: "Наши студенты не просто изучают 3D-моделирование - они уже создают работы, достойные настоящих игровых проектов.",
        mainImage: "game1.png",
        secondImage: "game2.png"
    },
    {
        date: new Date(2025, 11, 14),
        heading: "Неделя до GameJam!",
        content: "Мы провели подготовительный митап, чтобы зарядить участников идеями и полезными инструментами.",
        mainImage: "game3.png",
        secondImage: "game4.png"
    },
    {
        date: new Date(2025, 11, 22),
        heading: "GameJam: прогресс первого дня",
        content: "Старт GameJam-а: У команд уже созданы первые персонажи, выбран стиль и сеттинг, собраны ключевые механики.",
        mainImage: "game3.png",
        secondImage: "game4.png"
    },
    {
        date: new Date(2025, 11, 22),
        heading: "Вечерний взгляд на GameJam",
        content: "Команды активно продвигаются вперёд: появляются все более детализированные персонажи, анимации, игровые тайлы, элементы интерфейса и базовая логика на движке.",
        mainImage: "game3.png",
        secondImage: "game4.png"
    },
    {
        date: new Date(2025, 11, 22),
        heading: "Наблюдай за GameJam онлайн!",
        content: "Наши геймдизайнеры ведут собственные мини-дневники, где показывают, как рождаются персонажи, уровни, механики и первые прототипы.",
        mainImage: "game3.png",
        secondImage: "game4.png"
    }
]