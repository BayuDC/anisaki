<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
    <div class="px-5 py-6">
        <div class="flex flex-col items-center text-center">
            <div class="text-5xl font-extrabold">{{ appConfig.name }}</div>
            <p class="mt-4 text-sm font-bold sm:max-w-none max-w-[200px] opacity-80">
                {{ appConfig.description }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>
