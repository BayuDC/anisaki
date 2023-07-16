export default async function useAnilist() {
    const query = `
    query (
        $page: Int, $perPage: Int, $season: MediaSeason, $seasonYear: Int, $status: MediaStatus
    ) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                perPage
            }
            media(
                type: ANIME, sort: FAVOURITES_DESC, season: $season, seasonYear: $seasonYear, status: $status,
                isAdult: false,
            ) {
                id
                title {
                    romaji
                    english
                    native
                }
                type
                nextAiringEpisode {
                    id
                    episode
                    airingAt
                    timeUntilAiring
                }
                status
                coverImage {
                    large
                }
            }
        }
    }`;

    const variables = {
        page: 1,
        season: 'SUMMER',
        seasonYear: 2023,
        status: 'RELEASING',
    };

    const { data } = await useFetch('https://graphql.anilist.co', {
        method: 'post',
        body: { variables, query },
        transform: (data: any) => data.data.Page.media,
        default: () => [],
    });

    return data.value as Anime[];
}
