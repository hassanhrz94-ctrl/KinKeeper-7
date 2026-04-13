import React, { useEffect, useState } from 'react';

const ErrorPage = () => {
    const [glitch, setGlitch] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 200);
        }, 3000);

        const generated = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            delay: Math.random() * 4,
            duration: Math.random() * 3 + 2,
        }));
        setParticles(generated);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&display=swap');

                * { margin: 0; padding: 0; box-sizing: border-box; }

                .error-root {
                    --bg: #050508;
                    --accent: #ff2d55;
                    --accent2: #ff6b35;
                    --dim: #1a1a2e;
                    --text: #f0eaff;
                    --muted: #4a4a6a;
                    font-family: 'Space Mono', monospace;
                    background: var(--bg);
                    color: var(--text);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    position: relative;
                }

                .grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255,45,85,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,45,85,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    animation: gridDrift 20s linear infinite;
                }

                @keyframes gridDrift {
                    from { transform: translateY(0); }
                    to { transform: translateY(60px); }
                }

                .vignette {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at center, transparent 40%, #050508 100%);
                    pointer-events: none;
                }

                .particle {
                    position: absolute;
                    border-radius: 50%;
                    background: var(--accent);
                    opacity: 0;
                    animation: float var(--dur) var(--del) ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { opacity: 0; transform: translateY(0) scale(1); }
                    50% { opacity: 0.4; transform: translateY(-30px) scale(1.5); }
                }

                .content {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    padding: 2rem;
                    max-width: 700px;
                }

                .error-code-wrap {
                    position: relative;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                }

                .error-code {
                    font-family: 'Bebas Neue', cursive;
                    font-size: clamp(8rem, 20vw, 14rem);
                    line-height: 1;
                    background: linear-gradient(135deg, var(--accent), var(--accent2));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    letter-spacing: -4px;
                    position: relative;
                }

                .error-code.glitch {
                    animation: glitch 0.2s steps(2, end);
                }

                @keyframes glitch {
                    0%   { text-shadow: -3px 0 #00ffea, 3px 0 #ff2d55; transform: translate(-2px, 0); }
                    25%  { text-shadow: 3px 0 #00ffea, -3px 0 #ff2d55; transform: translate(2px, 0); }
                    50%  { text-shadow: -3px 0 #ff6b35, 3px 0 #00ffea; transform: translate(0, -1px); }
                    75%  { text-shadow: 3px 0 #ff6b35, -3px 0 #00ffea; transform: translate(1px, 1px); }
                    100% { text-shadow: none; transform: translate(0); }
                }

                .scanline {
                    position: absolute;
                    top: 0; left: -10%; right: -10%;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, rgba(255,45,85,0.6), transparent);
                    animation: scan 2.5s ease-in-out infinite;
                }

                @keyframes scan {
                    0%   { top: 0%; opacity: 0; }
                    10%  { opacity: 1; }
                    90%  { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }

                .badge {
                    display: inline-block;
                    background: rgba(255,45,85,0.12);
                    border: 1px solid rgba(255,45,85,0.3);
                    color: var(--accent);
                    font-size: 0.65rem;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    padding: 0.35rem 0.9rem;
                    border-radius: 2px;
                    margin-bottom: 1.5rem;
                    animation: fadeUp 0.8s 0.2s both;
                }

                .title {
                    font-size: clamp(1.2rem, 3vw, 1.7rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    margin-bottom: 1rem;
                    animation: fadeUp 0.8s 0.4s both;
                }

                .subtitle {
                    color: var(--muted);
                    font-size: 0.82rem;
                    line-height: 1.8;
                    max-width: 420px;
                    margin: 0 auto 2.5rem;
                    animation: fadeUp 0.8s 0.6s both;
                }

                .divider {
                    width: 60px;
                    height: 2px;
                    background: linear-gradient(90deg, var(--accent), var(--accent2));
                    margin: 1.5rem auto;
                    animation: fadeUp 0.8s 0.5s both;
                }

                .actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    animation: fadeUp 0.8s 0.8s both;
                }

                .btn-primary {
                    background: linear-gradient(135deg, var(--accent), var(--accent2));
                    color: white;
                    border: none;
                    padding: 0.85rem 2rem;
                    font-family: 'Space Mono', monospace;
                    font-size: 0.78rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 3px;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .btn-primary::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(255,255,255,0.12);
                    transform: translateX(-100%);
                    transition: transform 0.3s;
                }

                .btn-primary:hover::before { transform: translateX(0); }
                .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,45,85,0.35); }
                .btn-primary:active { transform: translateY(0); }

                .btn-ghost {
                    background: transparent;
                    color: var(--muted);
                    border: 1px solid var(--muted);
                    padding: 0.85rem 2rem;
                    font-family: 'Space Mono', monospace;
                    font-size: 0.78rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 3px;
                    transition: color 0.2s, border-color 0.2s, transform 0.2s;
                }

                .btn-ghost:hover { color: var(--text); border-color: var(--text); transform: translateY(-2px); }

                .status-bar {
                    margin-top: 3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                    animation: fadeUp 0.8s 1s both;
                }

                .status-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.65rem;
                    letter-spacing: 0.1em;
                    color: var(--muted);
                    text-transform: uppercase;
                }

                .dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: var(--accent);
                    animation: pulse 1.5s ease-in-out infinite;
                }

                .dot.ok { background: #00ff88; }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.8); }
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .error-code-wrap { animation: fadeUp 0.8s 0s both; }
            `}</style>

            <div className="error-root">
                <div className="grid-bg" />
                <div className="vignette" />

                {particles.map(p => (
                    <div key={p.id} className="particle" style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        '--dur': `${p.duration}s`,
                        '--del': `${p.delay}s`,
                    }} />
                ))}

                <div className="content">
                    <div className="badge">⚠ System Failure</div>

                    <div className="error-code-wrap">
                        <div className={`error-code ${glitch ? 'glitch' : ''}`}>404</div>
                        <div className="scanline" />
                    </div>

                    <div className="title">Page Not Found</div>
                    <div className="divider" />
                    <div className="subtitle">
                        The page you're looking for has drifted into the void.<br />
                        It may have been moved, deleted, or never existed.
                    </div>

                    <div className="actions">
                        <button className="btn-primary" onClick={() => window.history.back()}>
                            ← Go Back
                        </button>
                        <button className="btn-ghost" onClick={() => window.location.href = '/'}>
                            Home
                        </button>
                    </div>

                    <div className="status-bar">
                        <div className="status-item">
                            <div className="dot" />
                            Error 404
                        </div>
                        <div className="status-item">
                            <div className="dot ok" />
                            Server Online
                        </div>
                        <div className="status-item">
                            <div className="dot ok" />
                            API Active
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;