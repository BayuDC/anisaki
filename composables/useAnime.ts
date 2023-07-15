import getAnime, { AiringAnime, Media } from 'currently-airing-anime';

export default async function useAnime() {
    const anime: Media[][] = [[], [], [], [], [], [], []];

    const { shows } = await getAnime({
        season: 'SUMMER',
        seasonYear: 2023,
        includeSchedule: true,
        isReleasing: true,
    });

    for (const show of shows) {
        if (!show.nextAiringEpisode) continue;

        const date = new Date(0);
        date.setUTCSeconds(show.nextAiringEpisode.airingAt);
        const day = date.getDay();

        anime[day].push(show);
    }

    return anime;
}
