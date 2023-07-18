<script lang="ts" setup>
const day = useState<number>('day');
const zone = useTimeZone();
const { data } = await useAnime(zone);
</script>

<template>
    <Transition
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-10"
        leave-active-class="transition"
        mode="out-in"
    >
        <div class="px-5 py-10 container max-w-screen-lg mx-auto" :key="day">
            <ul class="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                <AnimeItem v-for="a in data?.schedule[day]" :anime="a" :key="a.id" />
            </ul>
        </div>
    </Transition>
</template>

<style scoped></style>
