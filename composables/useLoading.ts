export default function useLoading() {
    return useState('loading', () => [true, true, true]);
}

export function checkLoading() {
    const loading = useLoading();
    return computed(() => {
        return loading.value[0] || loading.value[1] || loading.value[2];
    });
}
