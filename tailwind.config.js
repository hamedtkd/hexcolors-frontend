const {
  fontFamily
} = require("tailwindcss/defaultTheme");
import tailwindcssAnimated from 'tailwindcss-animated';
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    fontFamily: {
      'Proxima': ["Proxima Nova Font", 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
    },

    extend: {

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        'sm': '0px',
        'md': '768px',
        'lg': "1024px",
        'xl': "1366px",
        '2xl': "1536px",
        '3xl': "1920px",
      },
      boxShadow: {
        'custom': '-2px 6px 0px 0px #c8d2d9',
      }
    },
  },
  plugins: [
    tailwindcssAnimated,
    tailwindcssAnimate,
    function ({
      addComponents
    }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            // minWidth: '0',
            padding: "0 1rem",
          },
          "@screen md": {
            // minWidth: '768px',
            padding: "0 1rem",
          },
          "@screen lg": {
            // minWidth: '1024px',
            padding: "0 1.5rem",
          },
          "@screen xl": {
            // minWidth: '1366px',
            padding: "0 2rem",
          },
          "@screen 2xl": {
            // minWidth: '1536px',
            padding: "0 64px",
          },
          "@screen 3xl": {
            // minWidth: '1920px',
            padding: "0 64px",
          },
        },
      });
    },
  ],
};