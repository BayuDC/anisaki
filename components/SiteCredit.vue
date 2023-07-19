<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
    <footer class="px-5 py-6 mt-auto mx-auto">
        <p class="text-sm text-light/60 font-semibold">
            Made with ❤️ by
            <NuxtLink
                :to="appConfig.author.url"
                :external="true"
                class="hover:underline hover:text-light/80 transition-[color]"
            >
                {{ appConfig.author.name }}
            </NuxtLink>
        </p>
    </footer>
</template>

<style scoped></style>
