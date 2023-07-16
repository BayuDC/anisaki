export default async function useAnime() {
    const anime: Anime[][] = [[], [], [], [], [], [], []];

    const shows = await useAnilist();
    shows.forEach((show: Anime) => {
        if (!show.nextAiringEpisode) return;

        const date = new Date(0);
        date.setUTCSeconds(show.nextAiringEpisode.airingAt);
        const day = date.getDay();

        anime[day].push(show);
    });

    return anime;
}
