import { ImageResponse } from 'next/og';

export const alt = 'Muhammed Faiz Seitz — AI Engineer & Lead Systems Architect';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#090a0f',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.12) 0%, transparent 50%)',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Subtle grid line accents */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #38bdf8, #34d399, #a855f7)',
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '9999px',
                backgroundColor: '#10b981',
              }}
            />
            AVAILABLE FOR SENIOR AI ARCHITECTURE & CONTRACTS
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#94a3b8',
              fontSize: '18px',
            }}
          >
            <span>Durban, South Africa 🇿🇦</span>
            <span style={{ color: '#475569' }}>•</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>SAST (UTC+2)</span>
          </div>
        </div>

        {/* Main Hero Information */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              display: 'flex',
              gap: '16px',
            }}
          >
            <span>Muhammed Faiz</span>
            <span
              style={{
                background: 'linear-gradient(90deg, #38bdf8, #34d399)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Seitz
            </span>
          </div>

          <div
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#cbd5e1',
              letterSpacing: '-0.01em',
            }}
          >
            AI Engineer & Full-Stack Systems Architect
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#94a3b8',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Architecting autonomous agent pipelines, civic intelligence platforms, and high-concurrency digital experiences.
          </div>
        </div>

        {/* Metrics Bar */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '20px 24px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#38bdf8' }}>15+</span>
            <span style={{ fontSize: '14px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Production Systems
            </span>
          </div>
          <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#34d399' }}>37</span>
            <span style={{ fontSize: '14px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Apify Cloud Actors
            </span>
          </div>
          <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#a855f7' }}>11,900+</span>
            <span style={{ fontSize: '14px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              DBE Papers Ingested
            </span>
          </div>
          <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#fbbf24' }}>11</span>
            <span style={{ fontSize: '14px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              SA Official Languages
            </span>
          </div>
        </div>

        {/* Footer info & Tech tags */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Next.js 16', 'TypeScript', 'Supabase', 'PostGIS', 'fal.ai', 'Apify'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '14px',
                  color: '#e2e8f0',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: '16px',
              color: '#38bdf8',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>byseitz.agency@gmail.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
