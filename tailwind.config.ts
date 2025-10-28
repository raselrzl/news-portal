// tailwind.config.ts
export default {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      theme: {
        extend: {
          fontFamily: {
            serifbangla: ['"Noto Serif Bengali"', '"Times New Roman"', 'serif'],
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/typography')
    ],
  };
  