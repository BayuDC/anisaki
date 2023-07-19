export default function useLoading() {
    return useState('loading', () => [true, true, true]);
}
