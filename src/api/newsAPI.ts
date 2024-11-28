import axios from "axios";

// Интерфейсы для типизации
export interface NewsArticle {
    title: string;
    description: string | null;
    content: string | null;
    url: string;
    urlToImage: string | null;
}

export interface NewsResponse {
    articles: NewsArticle[];
}

// Базовый URL и ключ API
const BASE_URL = "https://newsapi.org/v2";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// Функция для получения новостей по категории
export const fetchNewsByCategory = async (category: string): Promise<NewsArticle[]> => {
    const response = await axios.get<NewsResponse>(`${BASE_URL}/top-headlines`, {
        params: {
            category,
            apiKey: API_KEY,
        },
    });
    return response.data.articles;
};
