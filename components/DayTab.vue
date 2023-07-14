<script lang="ts" setup>
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = 'Saturday';
</script>

<template>
    <div class="flex overflow-x-auto px-5 no-scrollbar">
        <ul class="flex gap-1 p-1 bg-secondary rounded-xl mx-auto">
            <li v-for="(day, i) in days" :key="i">
                <DayTabItem :name="day" :active="day == today" />
            </li>
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
