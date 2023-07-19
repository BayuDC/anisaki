<script lang="ts" setup>
import { useLazyload } from 'vue3-lazyload';
import { useMotion } from '@vueuse/motion';

const props = defineProps<{
    anime: Anime;
}>();

const imgLoaded = ref(false);
const img = useLazyload(ref(props.anime.coverImage.large), {
    lifecycle: { loaded: (el) => (imgLoaded.value = true) },
});

const target = ref<HTMLElement>();

useMotion(target, {
    initial: {
        scale: 0,
        opacity: 0,
    },
    visibleOnce: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: Math.random() * 300,
        },
    },
});

const airing = computed<string>(() => {
    const date = new Date(0);
    date.setUTCSeconds(props.anime.nextAiringEpisode.airingAt);
    return date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
});
</script>

<template>
    <li>
        <div ref="target">
            <div class="w-full rounded-lg overflow-hidden aspect-[5/7] bg-dark2 relative">
                <div class="absolute top-0 left-0 right-0 z-10 flex justify-between p-2">
                    <AnimeItemBadge class="bg-secondary">
                        {{ airing }}
                    </AnimeItemBadge>
                    <AnimeItemBadge class="bg-primary">Ep {{ anime.nextAiringEpisode.episode }}</AnimeItemBadge>
                </div>

                <img
                    class="object-cover w-full h-full transition duration-300"
                    :class="[imgLoaded ? 'opacity-100 blur-none' : 'opacity-0 blur']"
                    ref="img"
                />
            </div>
            <h4 class="mt-2 md:mt-4 text-sm font-bold opacity-60 two-lines">{{ anime.title.romaji }}</h4>
        </div>
    </li>
</template>

<style>
.two-lines {
    /* width: 100px; */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
