<script lang="ts" setup>
const day = useState<number>('day');
const anime = await useAnime();
</script>

<template>
    <div class="px-5 py-10 container max-w-screen-lg mx-auto">
        <ul class="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            <AnimeItem v-for="a in anime[day]" :anime="a" :key="a.id" />
        </ul>
    </div>
</template>

<style scoped></style>
