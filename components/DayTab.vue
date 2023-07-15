<script lang="ts" setup>
const route = useRoute();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const selected = computed(() => {
    const input = route.query.day as string;

    if (!input || !/^(sun|mon|tues|wednes|thurs|fri|satur)day$/i.test(input)) {
        return days[new Date().getDay()].toLowerCase();
    }

    return input.toLowerCase();
});
</script>

<template>
    <div class="flex overflow-x-auto px-5 no-scrollbar">
        <ul class="flex gap-1 p-1 bg-secondary rounded-xl mx-auto">
            <DayTabItem v-for="(day, i) in days" :key="i" :name="day" :active="day.toLowerCase() == selected" />
        </ul>
    </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
