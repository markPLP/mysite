/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Roboto Condensed', 'serif'],
        regular: ['Roboto', 'serif'],
      },
      // keyframes: {
      //   slideLeft: {
      //     '0%': { opacity: 0, transform: 'translateX(-100px)' },
      //     '100%': { opacity: 1, transform: 'translateX(0)' },
      //   },
      //   slideRight: {
      //     '0%': { opacity: 0, transform: 'translateX(100px)' },
      //     '100%': { opacity: 1, transform: 'translateX(0)' },
      //   },
      //   fadeUp: {
      //     '0%': { opacity: 0, transform: 'translateY(50px)' },
      //     '100%': { opacity: 1, transform: 'translateY(0)' },
      //   },
      // },
      // animation: {
      //   slideInLeft: 'slideLeft 1s ease-out forwards',
      //   slideInRight: 'slideRight 1s ease-out forwards',
      //   fadeInUp: 'fadeUp 1s ease-out forwards',
      // },
      keyframes: {
        blinkCursor: {
          '50%': { borderRightColor: 'transparent' },
        },
        typeAndDelete: {
          '0%, 10%': { width: '0' },
          '45%, 55%': { width: '13.2em' }, // Adjust width as needed
          '90%, 100%': { width: '0' },
        },
      },
      animation: {
        'blink-cursor': 'blinkCursor 0.5s step-end infinite alternate',
        'type-and-delete':
          'typeAndDelete 4s steps(11) infinite, blinkCursor 0.5s step-end infinite alternate',
      },
      screens: {
        // Add custom height-based breakpoints
        'h-sm': { raw: '(max-height: 640px)' }, // small height
        'h-md': { raw: '(min-height: 300px) and (max-height: 768px)' }, // medium height
        // 'h-md': { raw: '(min-height: 641px) and (max-height: 768px)' }, // medium height
        // 'h-lg': { raw: '(min-height: 769px)' }, // large height
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ec4899, #8b5cf6)', // Matches the Tailwind classes
        'custom-gradient-hover': 'linear-gradient(to right, #ff758c, #ff3c61)', // Matches the Tailwind classes
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / 1)',
          40: 'hsl(var(--primary) / 0.4)', // 40% opacity
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-rtl')],
};
