<script lang="ts" setup>
const props = defineProps<{
    name: string;
    active?: boolean;
}>();
</script>

<template>
    <div class="font-extrabold px-3 py-2 rounded-lg inline-block" :class="{ 'bg-primary ': active }">
        {{ name }}
    </div>
</template>

<style scoped></style>
