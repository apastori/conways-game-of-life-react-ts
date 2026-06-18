/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: 'rgb(var(--neon-cyan) / <alpha-value>)',
          blue: 'rgb(var(--neon-blue) / <alpha-value>)',
          purple: 'rgb(var(--neon-purple) / <alpha-value>)',
          magenta: 'rgb(var(--neon-magenta) / <alpha-value>)',
          teal: 'rgb(var(--neon-teal) / <alpha-value>)',
          ice: 'rgb(var(--neon-ice) / <alpha-value>)',
          amber: 'rgb(var(--neon-amber) / <alpha-value>)',
        },
        space: {
          black: 'rgb(var(--space-black) / <alpha-value>)',
          deep: 'rgb(var(--space-deep) / <alpha-value>)',
          panel: 'rgb(var(--space-panel) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        tech: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgb(var(--neon-cyan) / 0.4), 0 0 40px rgb(var(--neon-cyan) / 0.15)',
        'glow-purple': '0 0 20px rgb(var(--neon-purple) / 0.4), 0 0 40px rgb(var(--neon-purple) / 0.15)',
        'glow-magenta': '0 0 20px rgb(var(--neon-magenta) / 0.4), 0 0 40px rgb(var(--neon-magenta) / 0.15)',
        'glow-cyan-sm': '0 0 10px rgb(var(--neon-cyan) / 0.5)',
        'panel': '0 8px 32px rgb(0 0 0 / 0.5), inset 0 1px 0 rgb(var(--neon-cyan) / 0.08)',
      },
      dropShadow: {
        'glow-cyan-sm': '0 0 8px rgb(var(--neon-cyan) / 0.6)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
        'glow-breathe': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'cell-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '60%': { transform: 'scale(1.08)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'cell-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.6)', opacity: '0.3' },
        },
        'beam-drift': {
          '0%': { transform: 'translateX(-30%) rotate(-12deg)', opacity: '0' },
          '20%': { opacity: '0.15' },
          '80%': { opacity: '0.15' },
          '100%': { transform: 'translateX(130%) rotate(-12deg)', opacity: '0' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(-30px) translateX(15px)', opacity: '0.8' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'panel-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'energy-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgb(var(--neon-cyan) / 0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgb(var(--neon-cyan) / 0)' },
          '100%': { boxShadow: '0 0 0 0 rgb(var(--neon-cyan) / 0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'glow-breathe': 'glow-breathe 3s ease-in-out infinite',
        'cell-in': 'cell-in 0.25s ease-out forwards',
        'cell-out': 'cell-out 0.2s ease-in forwards',
        'beam-drift': 'beam-drift 12s ease-in-out infinite',
        'float-particle': 'float-particle 8s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'panel-in': 'panel-in 0.6s ease-out forwards',
        'energy-pulse': 'energy-pulse 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
