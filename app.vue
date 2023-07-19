<script lang="ts" setup>
const appConfig = useAppConfig();
const nuxtApp = useNuxtApp();
const loading = useLoading();

nuxtApp.hook('app:mounted', () => {
    loading.value[0] = false;
});

onMounted(() => {
    useFontMonitor().then(() => {
        loading.value[1] = false;
    });
});

useSeoMeta({
    title: appConfig.name,
    description: appConfig.description,
    author: appConfig.author,
    themeColor: appConfig.color,
    ogType: 'website',
    ogSiteName: appConfig.name,
    ogUrl: appConfig.url,
    ogTitle: appConfig.name,
    ogDescription: appConfig.description,
    ogImage: appConfig.banner.url,
    ogImageType: appConfig.banner.type,
    ogImageHeight: appConfig.banner.height,
    ogImageWidth: appConfig.banner.width,
    twitterImage: appConfig.banner.url,
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <Html>
        <Head>
            <Title>{{ appConfig.name }} | {{ appConfig.description }}</Title>

            <Link rel="canonical" :href="appConfig.url" />
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
                <Loading v-if="loading[0] || loading[1] || loading[2]" />
            </Transition>
            <SiteInfo />
            <ClientOnly>
                <DayTab />
                <Anime />
            </ClientOnly>
        </Body>
    </Html>
</template>
