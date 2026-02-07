/**
 * Утилита для работы с URL изображений
 * Преобразует относительные пути в полные URL для загрузки с сервера админки
 */

const IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL || 'http://localhost:5012';

/**
 * Преобразует относительный путь изображения в полный URL
 * @param relativePath - относительный путь типа "/uploads/game-main/filename.jpg"
 * @returns полный URL типа "http://localhost:5012/uploads/game-main/filename.jpg"
 */
export function getImageUrl(relativePath: string | undefined): string {
    if (!relativePath) {
        return '';
    }

    // Если путь уже содержит протокол (http:// или https://), возвращаем как есть
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
        return relativePath;
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
