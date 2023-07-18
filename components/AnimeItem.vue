<script lang="ts" setup>
import { useLazyload } from 'vue3-lazyload';

const props = defineProps<{
    anime: Anime;
}>();

const imgLoaded = ref(false);
const img = useLazyload(ref(props.anime.coverImage.large), {
    lifecycle: {
        loaded(el) {
            imgLoaded.value = true;
        },
    },
});
</script>

<template>
    <li>
        <div>
            <div class="w-full rounded-lg overflow-hidden aspect-[5/7] bg-dark2">
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
