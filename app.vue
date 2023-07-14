<script lang="ts" setup>
const appConfig = useAppConfig();
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
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
            />
        </Head>
        <Body class="bg-dark text-light">
            <SiteInfo />
            <DayTab />
        </Body>
    </Html>
</template>
