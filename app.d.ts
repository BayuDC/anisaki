declare global {
    interface Anime {
        id: number;
        title: {
            romaji: string;
            english: string;
            native: string;
        };
        type: string;
        nextAiringEpisode: {
            id: number;
            episode: number;
            airingAt: number;
            timeUntilAiring: number;
        };
        status: string;
        coverImage: {
            large: string;
        };
    }
}

export {};
