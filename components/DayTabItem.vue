<script lang="ts" setup>
const props = defineProps<{
    name: string;
    active?: boolean;
}>();
</script>

<template>
    <NuxtLink
        :to="`?day=` + name"
        class="font-extrabold px-3 py-2 rounded-lg inline-block"
        :class="{ 'bg-primary ': active }"
    >
        {{ name }}
    </NuxtLink>
</template>

<style scoped></style>
