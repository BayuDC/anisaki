<script lang="ts" setup>
const props = defineProps<{
    x: number;
    w: number;
}>();

const first = ref(true);
const style = computed(() => {
    return `transform: translateX(${props.x - 4}px); width: ${props.w}px`;
});

onUpdated(() => {
    setTimeout(() => {
        first.value = false;
    }, 50);
});
</script>

<template>
    <div
        class="h-10 bg-primary rounded-lg absolute inset-0 m-1"
        :class="{ 'transition-[width,transform] duration-200': !first }"
        :style="style"
    ></div>
</template>

<style scoped></style>
