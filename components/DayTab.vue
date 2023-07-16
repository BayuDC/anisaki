<script lang="ts" setup>
const route = useRoute();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = useState<number>('day', () => new Date().getDay());

watchEffect(() => {
    const input = route.query.day as string;
    if (!input) return;

    const index = days.findIndex((d) => d.toLowerCase() == input.toLowerCase());
    if (index == -1) return;

    day.value = index;
});
</script>

<template>
    <div class="flex overflow-x-auto px-5 no-scrollbar">
        <ul class="flex gap-1 p-1 bg-secondary rounded-xl mx-auto">
            <DayTabItem v-for="(d, i) in days" :key="i" :name="d" :active="i == day" />
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
