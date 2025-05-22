//import type { Config } from 'tailwindcss';
//
//const config: Config = {
//  content: [
//    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
//  ],
//  theme: {
//    extend: {
//      backgroundImage: {
//        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//        'gradient-conic':
//          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
//      }
//    }
//  },
//  plugins: []
//};
//
//export default config;
import type { Config } from 'tailwindcss';

// Helper function to apply opacity to CSS variables
function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: number }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '900': withOpacity('--color-primary-900'),
          '800': withOpacity('--color-primary-800'),
          '700': withOpacity('--color-primary-700'),
          '600': withOpacity('--color-primary-600'),
          '500': withOpacity('--color-primary-500'),
          '400': withOpacity('--color-primary-400'),
          '300': withOpacity('--color-primary-300'),
          '200': withOpacity('--color-primary-200'),
          '100': withOpacity('--color-primary-100')
        },
        secondary: {
          '900': withOpacity('--color-secondary-900'),
          '800': withOpacity('--color-secondary-800'),
          '700': withOpacity('--color-secondary-700'),
          '600': withOpacity('--color-secondary-600'),
          '500': withOpacity('--color-secondary-500'),
          '400': withOpacity('--color-secondary-400'),
          '300': withOpacity('--color-secondary-300'),
          '200': withOpacity('--color-secondary-200'),
          '100': withOpacity('--color-secondary-100'),
          '50': withOpacity('--color-secondary-50'),
          '0': withOpacity('--color-secondary-0')
        },
        success: withOpacity('--color-success'),
        warning: withOpacity('--color-warning'),
        error: withOpacity('--color-error')
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)']
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
};

export default config;
