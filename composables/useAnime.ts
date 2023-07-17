export default function useAnime(zone: string) {
    return useFetch<{ schedule: Anime[][] }>(`https://anisaki-data-bayudc.vercel.app/data${zone}.json`);
}
