<script lang="ts" setup>
const appConfig = useAppConfig();
const day = useState('day');

function onTitleClick() {
    day.value = new Date().getDay();
}
</script>

<template>
    <header class="px-5 py-6">
        <div class="flex flex-col items-center text-center">
            <h1 class="text-5xl font-extrabold">
                <NuxtLink to="/" @click="onTitleClick">
                    {{ appConfig.name }}
                </NuxtLink>
            </h1>
            <p class="mt-4 text-sm font-bold sm:max-w-none max-w-[200px] opacity-80">
                {{ appConfig.description }}
            </p>
        </div>
    </header>
</template>

<style scoped></style>
