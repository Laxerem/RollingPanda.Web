import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { IAboutBlock } from '../data/about_blocks';
import type { IGameCard } from '../components/GameCard';
import type { ILink } from '../components/StudioLinks';
import type { INewsContent } from '../pages/home/components/NewsPreview';
import type { IGameMark } from '../data/games';
import { blocks_content_fallback } from '../data/about_blocks';
import { gamesPreviewFallback } from '../data/games_preview';
import { gamesFallback as gamesFullFallback } from '../data/games';
import { headerLinksDataFallback, footerLinksDataFallback } from '../data/links';
import { newsPreviewFallback } from '../data/news_preview';
import { getImageUrl } from '../utils/imageUrl';

// Hook for About Blocks
export function useAboutBlocks() {
    const [data, setData] = useState<Array<IAboutBlock>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        apiService.getAboutBlocks()
            .then(response => {
                const mapped = response.map(item => ({
                    heading: item.heading,
                    text: item.text
                }));
                setData(mapped);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading about blocks, using fallback data:', err);
                setData(blocks_content_fallback);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}

// Hook for Games Preview
export function useGamesPreview() {
    const [data, setData] = useState<Array<IGameCard>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        apiService.getGamesPreview()
            .then(response => {
                const mapped = response.map(item => ({
                    name: item.name,
                    mainImage: getImageUrl(item.mainImage),
                    backgroundImage: getImageUrl(item.backgroundImage),
                    marks: item.marks as Array<IGameMark>,
                    author: item.author,
                    description: item.description,
                    install: item.install,
                    link: item.link
                }));
                setData(mapped);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading games preview, using fallback data:', err);
                setData(gamesPreviewFallback);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}

// Hook for All Games
export function useGames() {
    const [data, setData] = useState<Array<IGameCard>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        apiService.getGames()
            .then(response => {
                const mapped = response.map(item => ({
                    name: item.name,
                    mainImage: getImageUrl(item.mainImage),
                    backgroundImage: getImageUrl(item.backgroundImage),
                    marks: item.marks as Array<IGameMark>,
                    author: item.author,
                    description: item.description,
                    install: item.install,
                    link: item.link
                }));
                setData(mapped);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading games, using fallback data:', err);
                setData(gamesFullFallback);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}

// Hook for Links
export function useLinks() {
    const [headerLinks, setHeaderLinks] = useState<ILink>({});
    const [footerLinks, setFooterLinks] = useState<ILink>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        apiService.getLinks()
            .then(response => {
                const header: ILink = {};
                const footer: ILink = {};

                response.forEach(link => {
                    if (link.icon) {
                        // Простая логика разделения - можно улучшить
                        if (header && Object.keys(header).length < 5) {
                            header[link.icon] = link.url;
                        } else {
                            footer[link.icon] = link.url;
                        }
                    }
                });

                setHeaderLinks(header);
                setFooterLinks(footer);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading links, using fallback data:', err);
                setHeaderLinks(headerLinksDataFallback);
                setFooterLinks(footerLinksDataFallback);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { headerLinks, footerLinks, loading, error };
}

// Hook for News
export function useNews() {
    const [data, setData] = useState<Array<INewsContent>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        apiService.getNews()
            .then(response => {
                const mapped = response.map(item => ({
                    mainDate: new Date(item.date),
                    otherDate: new Date(item.date),
                    heading: item.title,
                    content: item.content,
                    mainImage: getImageUrl(item.mainImageUrl || item.image),
                    secondImage: getImageUrl(item.secondImageUrl || item.image)
                }));
                setData(mapped);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading news, using fallback data:', err);
                setData(newsPreviewFallback);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}
