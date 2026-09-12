import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Share a Cursor canvas, Claude HTML artifact, or markdown online'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background: '#141414',
          color: '#E4E4E4',
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#599CE7',
            marginBottom: 18,
          }}
        >
          brianmunene.me/canvas
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            maxWidth: 980,
          }}
        >
          The agent report your teammate cannot open
        </div>
        <div style={{ fontSize: 24, color: '#E4E4E48D', marginTop: 24 }}>
          Drop .canvas.tsx · .md · .html · .json · short link · no account
        </div>
      </div>
    ),
    { ...size }
  )
}
