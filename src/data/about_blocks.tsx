export interface IAboutBlock {
    heading: string,
    text: string
}

// Статические данные закомментированы - теперь данные загружаются из API
/*
const blocks_content: Array<IAboutBlock> = [
    {
        heading: "Команда",
        text: "В студии работает более тридцати студентов"
    },
    {
        heading: "Game Jam",
        text: "Мы провели 9 событий за 4 года"
    },
    {
        heading: "",
        text: ""
    },
    {
        heading: "Таланты",
        text: "Самому младшему участнику студии 15 лет"
    },
]

export default blocks_content
*/

// Fallback данные на случай ошибки API
export const blocks_content_fallback: Array<IAboutBlock> = [
    {
        heading: "Команда",
        text: "В студии работает более тридцати студентов"
    },
    {
        heading: "Game Jam",
        text: "Мы провели 9 событий за 4 года"
    },
    {
        heading: "",
        text: ""
    },
    {
        heading: "Таланты",
        text: "Самому младшему участнику студии 15 лет"
    },
]