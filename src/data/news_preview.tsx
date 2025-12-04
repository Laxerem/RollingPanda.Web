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
    }
]