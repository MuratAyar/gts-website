/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'; // <— eklentiyi ESM olarak içe al

export default {
  darkMode: 'class',

  // Tailwind’in tarayacağı tüm dosyalar
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',   // .md/.mdx vs. ekledim
  ],

  theme: {
    extend: {
      /* TURUNCU KURUMSAL PALET  */
      colors: {
        brand: {
          100: '#fcd8b6',
          400: '#fb8239',
          600: '#e75710',   // ✅ ana turuncu
          800: '#a51200',
          900: '#450b00',
        },

        /* ÖNCEKİ primary paletiniz hâlâ lazım olabilir */
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },

      /* İsteğe bağlı – daha geniş container sınırı */
      maxWidth: {
        '8xl': '90rem',
      },
    },

    /* Varsayılan font ailesi */
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ],
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ],
    },
  },

  plugins: [
    forms,           // @tailwindcss/forms
    // typography vb. ekleyecekseniz buraya import edip koyabilirsiniz
  ],
};