export default function useTimeZone() {
    const offset = (new Date().getTimezoneOffset() / 60) * -1;
    return offset >= 0 ? `+${offset}` : `${offset}`;
}
