export default function useAnime(zone: number) {
    return useFetch<{ schedule: Anime[][] }>(`https://anisaki-data-bayudc.vercel.app/data_${zone}.json`);
}
