// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// API Service
class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async fetchData<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching ${endpoint}:`, error);
            throw error;
        }
    }

    // About Blocks
    async getAboutBlocks() {
        return this.fetchData<Array<{
            id: number;
            heading: string;
            text: string;
            displayOrder: number;
        }>>('/about-blocks');
    }

    // Games Preview
    async getGamesPreview() {
        return this.fetchData<Array<{
            id: number;
            name: string;
            mainImage: string;
            backgroundImage: string;
            marks: string[];
            author?: string;
            description?: string;
            install: boolean;
            link?: string;
        }>>('/games-preview');
    }

    // All Games
    async getGames() {
        return this.fetchData<Array<{
            id: number;
            name: string;
            mainImage: string;
            backgroundImage: string;
            marks: string[];
            author?: string;
            description?: string;
            install: boolean;
            link?: string;
        }>>('/games');
    }

    // Links
    async getLinks() {
        return this.fetchData<Array<{
            id: number;
            url: string;
            icon?: string;
        }>>('/links');
    }

    // News
    async getNews() {
        return this.fetchData<Array<{
            id: number;
            title: string;
            date: string;
            content: string;
            image?: string;
            mainImageUrl?: string;
            secondImageUrl?: string;
        }>>('/news');
    }
}

export const apiService = new ApiService(API_BASE_URL);
