import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Hái Lộc Lời Chúa Đầu Xuân 2026';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 60,
                    background: 'linear-gradient(to bottom right, #FFD700, #FF8C00)', // Gold to Dark Orange
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'serif',
                    textAlign: 'center',
                    padding: '40px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                        fontSize: 100,
                    }}
                >
                    ✝
                </div>
                <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    Hái Lộc Lời Chúa
                </div>
                <div style={{ fontSize: 40, opacity: 0.9 }}>
                    Đầu Xuân 2026
                </div>
                <div style={{ fontSize: 30, marginTop: 40, background: 'rgba(255,255,255,0.2)', padding: '10px 30px', borderRadius: 50 }}>
                    anhfrassati.io.vn
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
