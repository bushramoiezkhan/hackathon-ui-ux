const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Extend the default color palette with custom colors
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      // Add custom spacing values
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Add custom font sizes
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      // Add custom border-radius
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      // Add custom shadows
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      // Define custom breakpoints
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  // Configure plugins
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.card': {
          borderRadius: theme('borderRadius.xl'),
          backgroundColor: theme('colors.card'),
          color: theme('colors.card-foreground'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.soft'),
        },
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: theme('fontWeight.bold'),
          borderRadius: theme('borderRadius.md'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          backgroundColor: theme('colors.primary'),
          color: theme('colors.primary-foreground'),
          '&:hover': {
            backgroundColor: theme('colors.primary-dark'),
          },
        },
      });
    }),
  ],
  // Enable dark mode
  darkMode: 'class',
};
