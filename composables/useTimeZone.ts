export default function useTimeZone() {
    return (new Date().getTimezoneOffset() / 60) * -1;
}
