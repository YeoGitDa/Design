/**
 * 여백 Tailwind preset — tokens.json 과 같은 값
 * 쓰는 법 (Web_page/tailwind.config.js):
 *   import yb from './design/tokens/tailwind.preset.js'
 *   export default { presets: [yb], content: [...] }
 */
export default {
  theme: {
    extend: {
      colors: {
        // 회색·바탕은 Tailwind 기본 slate 그대로 (gray-600=slate-600 · gray-500=slate-500 · gray-200=slate-200 · bg=slate-50)
        yb: {
          leaf: '#3A8C75',
          forest: '#31594E',
          deep: '#09402C',
          night: '#0A261C',
          ink: '#0D0D0D',
          'leaf-6': '#F3F8F7',
          'leaf-12': '#E7F1EE',
          'leaf-24': '#D0E3DE',
          danger: '#DC2626',
        },
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        rest: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        hover: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'system-ui', 'sans-serif'],
        brand: ['Montserrat', '"Pretendard Variable"', 'sans-serif'],
      },
      maxWidth: {
        content: '1024px',
      },
    },
  },
}
