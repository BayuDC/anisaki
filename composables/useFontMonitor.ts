import FontFaceObserver from 'fontfaceobserver';
export default async function useFontMonitor() {
    const fonts = [
        new FontFaceObserver('Inter', { weight: 400 }),
        new FontFaceObserver('Inter', { weight: 600 }),
        new FontFaceObserver('Inter', { weight: 700 }),
        new FontFaceObserver('Inter', { weight: 800 }),
    ];
    await Promise.all(fonts.map((font) => font.load()));
}
