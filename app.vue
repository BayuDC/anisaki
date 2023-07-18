<script lang="ts" setup>
const appConfig = useAppConfig();
const nuxtApp = useNuxtApp();
const loading = ref(true);

nuxtApp.hook('app:mounted', () => {
    loading.value = false;
});
</script>

<template>
    <Html>
        <Head>
            <Title>{{ appConfig.name }} | {{ appConfig.description }}</Title>
            <Meta name="description" :content="appConfig.description" />

            <Link rel="preconnect" href="https://fonts.googleapis.com" />
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
            <Link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
            />
            <Link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
            <Link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        </Head>
        <Body class="text-light bg-dark">
            <Transition leave-from-class="opacity-100" leave-to-class="opacity-0" leave-active-class="transition">
                <Loading v-if="loading" />
            </Transition>
            <SiteInfo />
            <ClientOnly>
                <DayTab />
            </ClientOnly>
            <Anime />
        </Body>
    </Html>
</template>
