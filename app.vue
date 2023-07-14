<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
    <Html>
        <Head>
            <Title>{{ appConfig.name }} | {{ appConfig.description }}</Title>
            <Meta name="description" :content="appConfig.description" />
        </Head>
        <Body class="bg-dark text-light">
            <SiteInfo />
        </Body>
    </Html>
</template>
