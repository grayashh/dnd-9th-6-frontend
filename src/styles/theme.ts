import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  red: '#ff6b6b',
  bg: 'linear-gradient(180deg, #ffffff 0%, #dee2f1 100%)',
  grayscale: {
    white: '#ffffff',
    'gray-50': '#f8f9fc',
    'gray-100': '#e8ebf5',
    'gray-200': '#dcdcea',
    'gray-300': '#b8b8cc',
    'gray-400': '#9191a6',
    'gray-500': '#6c6c80',
    'gray-600': '#565666',
    'gray-700': '#434350',
    'gray-800': '#2b2b33',
    'gray-900': '#0b0b0d',
    black: '#000000',
  },
  glassicon: {
    blue: 'linear-gradient(85deg, #5d82fe 0%, #90a9fe 100%)',
    'blue 2': '#90a9fe73',
    blur2: 'linear-gradient(85deg, #ffffff 0%, #90a9fe 100%)',
    purple: 'linear-gradient(85deg, #8d70ff 0%, #b4a1ff 100%)',
    'purple 2': '#c7b9ff66',
  },
  primary: {
    'classcope-blue-5': '#678afe',
    'classcope-blue-4': '#7795fe',
    'classcope-blue-3': '#90a9fe',
    'classcope-blue-2': '#acbfff',
    'classcope-blue-1': '#cdd8ff',
    'classcope-blue-0': {
      '5': '#e5ebff',
    },
  },
  secondary: {
    'classcope-purple-5': '#8d70ff',
    'classcope-purple-4': '#9980ff',
    'classcope-purple-3': '#b4a1ff',
    'classcope-purple-2': '#c7b9ff',
    'classcope-purple-1': '#ded6ff',
    'classcope-purple-0': {
      '5': '#ebe5ff',
    },
  },
  search: {
    value: '0px 4px 18px 0px rgba(205, 216, 255, 0.24)',
    type: 'boxShadow',
  },
  'search-pressed': {
    value: '0px 2px 15.333px 0px rgba(172, 191, 255, 0.45)',
    type: 'boxShadow',
  },
  card: {
    value: '4px 3px 16px 0px rgba(108, 108, 128, 0.03)',
    type: 'boxShadow',
  },
  'main-category-button': {
    value: '0px 4.78px 21.509px 0px rgba(205, 216, 255, 0.24)',
    type: 'boxShadow',
  },
  'main-catergory-button-click': {
    value: '0px 3.585px 11.95px 0px rgba(144, 169, 254, 0.4)',
    type: 'boxShadow',
  },
  header: {
    value: '0px 1px 7px 0px rgba(108, 108, 128, 0.44)',
    type: 'boxShadow',
  },
  fontFamilies: {
    pretendard: 'Pretendard',
    poppins: 'Poppins',
  },
  lineHeights: {
    '0': '48',
    '1': '43',
    '2': '36',
    '3': '46',
    '4': '30',
    '5': '24',
    '6': '23',
    '7': '23%',
    '8': '18',
    '9': '14',
    '10': '12',
    '11': '10',
  },
  fontWeights: {
    'pretendard-0': '700',
    'pretendard-1': '600',
    'pretendard-2': '500',
    'pretendard-3': '800',
    'poppins-4': '600',
    'poppins-5': '500',
    'poppins-6': '700',
  },
  fontSize: {
    '0': '8px',
    '1': '10px',
    '2': '12px',
    '3': '14px',
    '4': '16px',
    '5': '18px',
    '6': '20px',
    '7': '24px',
    '8': '30px',
    '9': '36px',
    '10': '40px',
  },
  letterSpacing: {
    '0': '-2%',
    '1': '-0.6px',
    '2': '-3%',
    '3': '0%',
  },
  paragraphSpacing: {
    '0': '0px',
    '1': '5px',
  },
  H1: {
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '48',
      fontSize: '40px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '48',
      fontSize: '40px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  H2: {
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '43',
      fontSize: '36px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '43',
      fontSize: '36px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  H3: {
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '36',
      fontSize: '30px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '36',
      fontSize: '30px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
      lineHeight: '36',
      fontSize: '30px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  H4: {
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '30',
      fontSize: '24px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '30',
      fontSize: '24px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
      lineHeight: '30',
      fontSize: '24px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  H5: {
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '24',
      fontSize: '18px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '24',
      fontSize: '18px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
      lineHeight: '24',
      fontSize: '18px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  body1: {
    extrabold: {
      fontFamily: 'Pretendard',
      fontWeight: '800',
      lineHeight: '23',
      fontSize: '16px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '23',
      fontSize: '16px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '23%',
      fontSize: '16px',
      letterSpacing: '-2%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
      lineHeight: '18',
      fontSize: '16px',
      letterSpacing: '-0.6px',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  body2: {
    extrabold: {
      fontFamily: 'Pretendard',
      fontWeight: '800',
      lineHeight: '18',
      fontSize: '14px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '18',
      fontSize: '14px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '18',
      fontSize: '14px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
      lineHeight: '18',
      fontSize: '14px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  body3: {
    extrabold: {
      fontFamily: 'Pretendard',
      fontWeight: '800',
      lineHeight: '14',
      fontSize: '12px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '14',
      fontSize: '12px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '14',
      fontSize: '12px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
      lineHeight: '14',
      fontSize: '12px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  detail1: {
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '10',
      fontSize: '10px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '10',
      fontSize: '10px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
      lineHeight: '10',
      fontSize: '10px',
      letterSpacing: '3%',
      paragraphSpacing: '1px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  detail2: {
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '7',
      fontSize: '8px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '7',
      fontSize: '8px',
      letterSpacing: '1px',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  detail3: {
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
      lineHeight: '6',
      fontSize: '6px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    semibold: {
      fontFamily: 'Pretendard',
      fontWeight: '600',
      lineHeight: '6',
      fontSize: '6px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
      lineHeight: '6',
      fontSize: '6px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  'en-H1': {
    semibold: {
      fontFamily: 'Poppins',
      fontWeight: '600',
      lineHeight: '36',
      fontSize: '30px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    Medium: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      lineHeight: '36',
      fontSize: '30px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
  'en-H2': {
    bold: {
      fontFamily: 'Poppins',
      fontWeight: '700',
      lineHeight: '24',
      fontSize: '18px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    smeiblod: {
      fontFamily: 'Poppins',
      fontWeight: '600',
      lineHeight: '24',
      fontSize: '18px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      lineHeight: '24',
      fontSize: '18px',
      letterSpacing: '3%',
      paragraphSpacing: '0px',
      paragraphIndent: '0px',
      textCase: 'none',
      textDecoration: 'none',
    },
  },
};

export default theme;
