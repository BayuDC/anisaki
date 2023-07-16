<script lang="ts" setup>
import { Media } from 'currently-airing-anime';

const props = defineProps<{
    anime: Media;
}>();
</script>

<template>
    <li>
        <div>
            <img class="rounded-lg w-full" :src="anime.coverImage.large" />
            <h4 class="mt-2 md:mt-4 text-sm font-bold opacity-60">{{ anime.title.romaji }}</h4>
        </div>
    </li>
</template>

<style scoped></style>
