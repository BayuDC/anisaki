<script lang="ts" setup>
const props = defineProps<{
    name: string;
    active?: boolean;
}>();
const self = ref<HTMLElement>();

onMounted(() => {
    if (props.active) {
        self.value?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
});
</script>

<template>
    <li ref="self">
        <NuxtLink
            :to="`?day=` + name"
            class="font-bold px-3 py-2 rounded-lg inline-block"
            :class="{ 'bg-primary ': active }"
            ref="self"
        >
            {{ name }}
        </NuxtLink>
    </li>
</template>

<style scoped></style>
