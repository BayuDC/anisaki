export default function useAnime(zone: number) {
    const loading = useLoading();

    return useFetch<{ schedule: Anime[][] }>(`/api/anime/${zone}`, {
        onResponse() {
            loading.value[2] = false;
        },
    });
}
