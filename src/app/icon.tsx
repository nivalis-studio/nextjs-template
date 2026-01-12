import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        color: '#000',
        fontSize: 24,
        lineHeight: 1,
        fontFamily:
          'ui-sans-serif, system-ui, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"',
      }}
    >
      ▲
    </div>,
    size,
  );
}
