<script lang="ts" setup>
import { Media } from 'currently-airing-anime';
import { useLazyload } from 'vue3-lazyload';

const props = defineProps<{
    anime: Media;
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
            <h4 class="mt-2 md:mt-4 text-sm font-bold opacity-60">{{ anime.title.romaji }}</h4>
        </div>
    </li>
</template>

<style scoped></style>
