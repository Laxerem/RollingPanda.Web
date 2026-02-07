import type { ILink } from "../components/StudioLinks";

// Статические данные закомментированы - теперь данные загружаются из API
/*
export const headerLinksData: ILink = {
    "/telegram.svg": "https://t.me/rollingpanda_GS",
    "/youtube.svg": "https://www.youtube.com/@RollingPandaGS",
    "/tic-tok.svg": "https://www.tiktok.com/@rollingpandags",
    "/hh.svg": "https://habr.com/ru/users/RollingPanda/",
    "/twich.svg": "https://www.twitch.tv/rollingpandags"
} as const;

export const footerLinksData: ILink = {
    "/vk.svg": "https://vk.com/rollingpanda",
    "/reddit.svg": "https://www.reddit.com/r/RollingPandaGS/",
    "/boosty.svg": "https://boosty.to/rollingpanda",
    "/tic-tok.svg": "https://www.tiktok.com/@rollingpandags",
    "/hh.svg": "https://habr.com/ru/users/RollingPanda/"
} as const;
*/

// Fallback данные на случай ошибки API
export const headerLinksDataFallback: ILink = {
    "/telegram.svg": "https://t.me/rollingpanda_GS",
    "/youtube.svg": "https://www.youtube.com/@RollingPandaGS",
    "/tic-tok.svg": "https://www.tiktok.com/@rollingpandags",
    "/hh.svg": "https://habr.com/ru/users/RollingPanda/",
    "/twich.svg": "https://www.twitch.tv/rollingpandags"
} as const;

export const footerLinksDataFallback: ILink = {
    "/vk.svg": "https://vk.com/rollingpanda",
    "/reddit.svg": "https://www.reddit.com/r/RollingPandaGS/",
    "/boosty.svg": "https://boosty.to/rollingpanda",
    "/tic-tok.svg": "https://www.tiktok.com/@rollingpandags",
    "/hh.svg": "https://habr.com/ru/users/RollingPanda/"
} as const;

