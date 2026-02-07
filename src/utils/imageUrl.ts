/**
 * Утилита для работы с URL изображений
 * Преобразует относительные пути в полные URL для загрузки с сервера админки
 */

const IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL || '';

/**
 * Преобразует относительный путь изображения в полный URL
 * @param relativePath - относительный путь типа "/uploads/game-main/filename.jpg"
 * @returns полный URL или относительный путь
 */
export function getImageUrl(relativePath: string | undefined): string {
    if (!relativePath) {
        return '';
    }

    // Если путь уже содержит протокол (http:// или https://), возвращаем как есть
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
        return relativePath;
    }

    // Если IMAGES_BASE_URL не задан, используем относительный путь (nginx proxy)
    if (!IMAGES_BASE_URL) {
        return relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
    }

    // Убираем ведущий слеш если он есть, чтобы избежать двойного слеша
    const cleanPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;

    return `${IMAGES_BASE_URL}${cleanPath}`;
}

/**
 * Преобразует массив относительных путей в массив полных URL
 */
export function getImageUrls(relativePaths: string[]): string[] {
    return relativePaths.map(path => getImageUrl(path));
}
