import { createTheme } from '@mui/system';
import localFont from '@next/font/local';

const fontin = localFont({
	src: '../assets/FontinSans-Regular.otf',
	variable: '--fontin-font'
});

const palette = {
	mode: 'dark',

	yellow: '#F1C22D',
	pink: '#FF7757',
	orange: '#FB8A4C',
	brown: '#764502',
	darkBrown: '#291105',
	darkGray: '#0F0D0C',
	darkerGray: '#181412',
	darkPurple: '#271F30',
	purple: '#403561',
	gray: '#5E5B55',
	lightGray: '#9E9783',
	blueGray: '#929391',
	warmGreen: '#C5CB63',
	green: '#8DD958',
	darkGreen: '#358D3E'
};

const typography = {
	h1: {
		...fontin.style,
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: 78,
		lineHeight: '76px',
		letterSpacing: '0.03em',
		textTransform: 'uppercase'
	},
	h2: {
		...fontin.style,
		fontWeight: 700,
		fontSize: 54,
		lineHeight: '58px',
		letterSpacing: '0.03em',
		textTransform: 'uppercase'
	},
	h3: {
		...fontin.style,
		fontWeight: 400,
		fontSize: 32,
		lineHeight: '38px',
		letterSpacing: '0.03em',
		textTransform: 'uppercase'
	},
	h4: {
		...fontin.style,
		fontWeight: 400,
		fontSize: 20,
		lineHeight: '26px',
		letterSpacing: '0.03em',
		textTransform: 'uppercase'
	},
	l1: {
		fontSize: 18,
		lineHeight: '32px'
	},
	l2: {
		fontSize: 24,
		lineHeight: '36px'
	},
	s1: {
		fontSize: 12,
		lineHeight: '20px'
	},
	button: {
		...fontin.style,
		fontWeight: 700,
		fontSize: 20,
		lineHeight: '30px',
		letterSpacing: '2px'
	}
};
export type TypographyVariants = keyof typeof typography | 'p';

const Theme = createTheme({
	palette,
	typography,
	shape: {
		borderRadius: 1,
		border: (a = '90') => `1px solid ${palette.gray}${a}`,
		gradientOrange: (a = '') => `linear-gradient(#F1C22D${a}, #FF7757${a})`,
		gradientGreen: (a = '') => `linear-gradient(#C4CB63${a}, #72B840${a})`,
		gradientYellow: (a = '') => `linear-gradient(#F7FF8A${a}, #8DD958${a})`,
		svgGradient: {
			orange: 'url(#gradientOrange)',
			green: 'url(#gradientGreen)',
			yellow: 'url(#gradientYellow)'
		}
	},
	spacing: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	zIndex: {
		header: 999
	}
});
export type ThemeT = typeof Theme;

export default Theme;

/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare module '@mui/system' {
	interface Palette extends Record<keyof typeof palette, string> {
		_: string;
	}

	interface Shape {
		border: (alpha?: string) => string;
		gradientOrange: (alpha?: string) => string;
		gradientGreen: (alpha?: string) => string;
		gradientYellow: (alpha?: string) => string;
		svgGradient: {
			orange: string;
			green: string;
			yellow: string;
		};
	}
}
