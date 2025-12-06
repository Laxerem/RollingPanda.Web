import type { INewsContent } from "../pages/home/components/NewsPreview";

export const newsPreview: Array<INewsContent> = [
    {
        mainDate: new Date(2025, 10, 3),
        otherDate: new Date(2025, 10, 3),
        heading: "Немного изнутри: работы 4-го курса!",
        content: "Наши студенты не просто изучают 3D-моделирование - они уже создают работы, достойные настоящих игровых проектов.",
        mainImage: "news1.png",
        secondImage: "news2.png"
    },
    {
        mainDate: new Date(2025, 10, 14),
        otherDate: new Date(2025, 10, 15),
        heading: "Неделя до GameJam!",
        content: "Мы провели подготовительный митап, чтобы зарядить участников идеями и полезными инструментами.",
        mainImage: "news3.png",
        secondImage: "news4.png"
    },
    {
        mainDate: new Date(2025, 10, 22),
        otherDate: new Date(2025, 10, 3),
        heading: "GameJam: прогресс первого дня",
        content: "Старт GameJam-а: У команд уже созданы первые персонажи, выбран стиль и сеттинг, собраны ключевые механики.",
        mainImage: "news5.png",
        secondImage: "news6.png"
    },
    {
        mainDate: new Date(2025, 10, 22),
        otherDate: new Date(2025, 10, 22),
        heading: "Вечерний взгляд на GameJam",
        content: "Команды активно продвигаются вперёд: появляются все более детализированные персонажи, анимации, игровые тайлы, элементы интерфейса и базовая логика на движке.",
        mainImage: "news7.png",
        secondImage: "news8.png"
    },
    {
        mainDate: new Date(2025, 10, 23),
        otherDate: new Date(2025, 10, 23),
        heading: "Наблюдай за GameJam онлайн!",
        content: "Наши геймдизайнеры ведут собственные мини-дневники, где показывают, как рождаются персонажи, уровни, механики и первые прототипы.",
        mainImage: "news9.png",
        secondImage: "news10.png"
    }
]