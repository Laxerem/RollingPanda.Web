# API Integration Guide

## Обзор

Фронтенд RollingPanda.Web теперь получает данные из API админ-панели вместо статических файлов.

## Изменения

### 1. Статические данные закомментированы

Все статические данные в папке `src/data/` были закомментированы и заменены на fallback данные:

- `about_blocks.tsx` - блоки "О нас"
- `games_preview.tsx` - игры на главной
- `games.tsx` - все игры
- `links.tsx` - ссылки в header и footer
- `news_preview.tsx` - новости

### 2. API Сервис

Создан API сервис в `src/services/api.ts`:

```typescript
import { apiService } from './services/api';

// Получить блоки "О нас"
const aboutBlocks = await apiService.getAboutBlocks();

// Получить игры для главной
const gamesPreview = await apiService.getGamesPreview();

// Получить все игры
const games = await apiService.getGames();

// Получить ссылки
const links = await apiService.getLinks();

// Получить новости
const news = await apiService.getNews();
```

### 3. React Hooks

Созданы кастомные хуки в `src/hooks/useApiData.ts`:

```typescript
import { useAboutBlocks, useGamesPreview, useGames, useLinks, useNews } from './hooks/useApiData';

// В компоненте
const { data, loading, error } = useAboutBlocks();
```

Каждый хук возвращает:
- `data` - загруженные данные (или fallback данные при ошибке)
- `loading` - флаг загрузки
- `error` - объект ошибки (если есть)

### 4. Обновленные компоненты

Следующие компоненты теперь используют API:

- `pages/home/components/LittleAbout.tsx` - использует `useAboutBlocks()`
- `pages/home/index.tsx` - использует `useGamesPreview()` и `useNews()`
- `pages/games/index.tsx` - использует `useGames()`
- `components/Header.tsx` - использует `useLinks()`
- `components/Footer.tsx` - использует `useLinks()`

## Настройка

### 1. Конфигурация API URL

Создайте файл `.env.local` в корне проекта:

```bash
VITE_API_URL=http://localhost:5012/api
```

Для production используйте реальный URL:

```bash
VITE_API_URL=https://api.rollingpanda.com/api
```

### 2. Запуск админ-панели

Перед запуском фронтенда запустите админ-панель:

```bash
cd RollingPanda.Admin/RollingPanda.Web
dotnet run
```

Админка будет доступна на `http://localhost:5012`

### 3. Запуск фронтенда

```bash
cd RollingPanda.Web
npm install  # если еще не установлены зависимости
npm run dev
```

## Fallback механизм

Если API недоступен, приложение автоматически использует fallback данные из:

- `blocks_content_fallback` (about_blocks.tsx)
- `gamesPreviewFallback` (games_preview.tsx)
- `gamesFallback` (games.tsx)
- `headerLinksDataFallback` и `footerLinksDataFallback` (links.tsx)
- `newsPreviewFallback` (news_preview.tsx)

Это обеспечивает работу сайта даже при недоступности API.

## API Endpoints

| Endpoint | Метод | Описание |
|----------|-------|----------|
| `/api/about-blocks` | GET | Блоки "О нас" |
| `/api/games-preview` | GET | Игры на главной (макс. 3) |
| `/api/games` | GET | Все игры |
| `/api/links` | GET | Ссылки |
| `/api/news` | GET | Новости |

## Маппинг данных

### About Blocks

API возвращает:
```json
{
  "id": 1,
  "heading": "Команда",
  "text": "В студии работает более тридцати студентов",
  "displayOrder": 0
}
```

Маппится в:
```typescript
{
  heading: "Команда",
  text: "В студии работает более тридцати студентов"
}
```

### Games

API возвращает:
```json
{
  "id": 1,
  "name": "VdVM07",
  "mainImage": "/uploads/game-main/image.png",
  "backgroundImage": "/uploads/game-background/image.png",
  "marks": ["GameJam"],
  "author": "Александр Прудников",
  "description": "Описание игры",
  "install": true,
  "link": "https://example.com"
}
```

### News

API возвращает:
```json
{
  "id": 1,
  "title": "Заголовок новости",
  "date": "2025-01-15T00:00:00",
  "content": "Содержание новости",
  "image": "/uploads/news-main/image.png"
}
```

Маппится в:
```typescript
{
  mainDate: new Date("2025-01-15"),
  otherDate: new Date("2025-01-15"),
  heading: "Заголовок новости",
  content: "Содержание новости",
  mainImage: "/uploads/news-main/image.png",
  secondImage: "/uploads/news-main/image.png"
}
```

## Отладка

### Проверка подключения к API

Откройте консоль браузера (F12) и проверьте Network tab:
- Должны быть запросы к `http://localhost:5012/api/*`
- Статус ответов должен быть 200 OK

### Ошибки CORS

Если видите ошибки CORS, убедитесь что:
1. Админка запущена
2. В `appsettings.json` админки указан правильный URL фронтенда:

```json
"Cors": {
  "AllowedOrigins": [
    "http://localhost:5173",
    "http://localhost:3000"
  ]
}
```

### Ошибки загрузки данных

В консоли будут сообщения:
```
Error loading about blocks, using fallback data: [ошибка]
```

Это нормально - приложение продолжит работу с fallback данными.

## Production Deployment

1. Обновите `.env.production`:
```bash
VITE_API_URL=https://api.yourdomain.com/api
```

2. Соберите проект:
```bash
npm run build
```

3. Разверните содержимое папки `dist/` на хостинге

4. Убедитесь, что админ-панель доступна по указанному URL

## Примечания

- Все изображения теперь должны загружаться через админ-панель
- URL изображений начинаются с `/uploads/` и автоматически формируются админкой
- Fallback данные используют старые статические пути к изображениям
