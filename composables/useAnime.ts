export default function useAnime(zone: number) {
    return useFetch<{ schedule: Anime[][] }>(`/api/anime/${zone}`);
}
