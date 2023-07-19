const query = `
query (
    $page: Int, $perPage: Int, 
) {
    data: Page(page: $page, perPage: $perPage) {
        pageInfo {
            total
            perPage
        }
        animes: media(
            type: ANIME,
            format_in: [TV],
            status: RELEASING,
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
}
`;

export default defineEventHandler(async (event) => {
    const animes: Anime[] = [];
    let page = 1;

    while (true) {
        const { data } = await $fetch<{
            data: {
                data: {
                    animes: Anime[];
                };
            };
        }>('https://graphql.anilist.co', {
            method: 'post',
            body: {
                query,
                variables: {
                    page,
                    status: 'RELEASING',
                },
            },
        });

        animes.push(...data.data.animes);
        if (data.data.animes.length < 50) break;
        page++;
    }

    const schedule: Anime[][] = [[], [], [], [], [], [], []];

    animes.forEach((anime) => {
        if (!anime.nextAiringEpisode) return;
        const date = new Date(0);
        date.setUTCSeconds(anime.nextAiringEpisode.airingAt);
        date.setHours(date.getHours() + 0);
        schedule[date.getDay()].push(anime);
    });

    return { lastUpdatedAt: new Date(), schedule };
});
