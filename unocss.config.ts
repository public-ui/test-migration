import { defineConfig } from '@unocss/vite';
import { presetMini } from '@unocss/preset-mini';

function pxValueToRem(size: number): string {
	return `calc(${size}rem / var(--kolibri-root-font-size, 16))`;
}

function convertRem(value: number): string {
	return pxValueToRem(value * 16);
}

function convertDynamicClassValueToRem(value: string) {
	return pxValueToRem((Number.parseFloat(value) * 16) / 4);
}

export default defineConfig({
	rules: [
		['list-none', { 'list-style-type': 'none' }],
		[
			/^p-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				padding: convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^px-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-left': convertDynamicClassValueToRem(d as string),
				'padding-right': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^py-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-top': convertDynamicClassValueToRem(d as string),
				'padding-bottom': convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^ps-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-inline-start': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^pe-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-inline-end': convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^pt-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-top': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^pl-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-left': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^pr-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-right': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^pb-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-bottom': convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^p-t-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-top': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^p-l-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-left': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^p-r-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-right': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^p-b-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'padding-bottom': convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^m-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				margin: convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^mx-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-left': convertDynamicClassValueToRem(d as string),
				'margin-right': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^my-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-top': convertDynamicClassValueToRem(d as string),
				'margin-bottom': convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^ms-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-inline-start': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^me-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-inline-end': convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^mt$/,
			() => ({
				'margin-top': pxValueToRem(16),
			}),
		],
		[
			/^ml$/,
			() => ({
				'margin-left': pxValueToRem(16),
			}),
		],
		[
			/^mr$/,
			() => ({
				'margin-right': pxValueToRem(16),
			}),
		],
		[
			/^mb$/,
			() => ({
				'margin-bottom': pxValueToRem(16),
			}),
		],

		[
			/^mt-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-top': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^ml-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-left': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^mr-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-right': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^mb-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-bottom': convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^m-t-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-top': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^m-l-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-left': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^m-r-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-right': convertDynamicClassValueToRem(d as string),
			}),
		],
		[
			/^m-b-(\d+)$/,
			([, d]: RegExpExecArray | string[]) => ({
				'margin-bottom': convertDynamicClassValueToRem(d as string),
			}),
		],

		[
			/^mb-sm$/,
			() => ({
				'margin-bottom': pxValueToRem(14),
			}),
		],

		[/^gap-(\d+)$/, ([, d]: RegExpExecArray | string[]) => ({ gap: convertDynamicClassValueToRem(d as string) })],
		[/^gap-x-(\d+)$/, ([, d]: RegExpExecArray | string[]) => ({ 'column-gap': convertDynamicClassValueToRem(d as string) })],
		[/^gap-y-(\d+)$/, ([, d]: RegExpExecArray | string[]) => ({ 'row-gap': convertDynamicClassValueToRem(d as string) })],

		[
			/^w-(\d+)rem$/,
			([, d]: RegExpExecArray | string[]) => ({
				width: pxValueToRem(Number.parseInt(d as string) * 16),
			}),
		],

		[
			/^w-sm$/,
			() => ({
				width: pxValueToRem(24 * 16), // 24rem
			}),
		],
	],
	theme: {
		fontSize: {
			xs: [convertRem(0.75), '1'],
			sm: [convertRem(0.875), '1.25'],
			base: [convertRem(1), '1.5'],
			lg: [convertRem(1.125), '1.75'],
			xl: [convertRem(1.25), '1.75'],
			'2xl': [convertRem(1.5), '2'],
			'3xl': [convertRem(1.875), '2.25'],
			'4xl': [convertRem(2.25), '2.5'],
			'5xl': [convertRem(3), '1'],
			'6xl': [convertRem(3.75), '1'],
			'7xl': [convertRem(4.5), '1'],
			'8xl': [convertRem(6), '1'],
			'9xl': [convertRem(8), '1'],
			'kol-test': ['625%', '1'],
		},
		borderRadius: {
			DEFAULT: convertRem(0.25),
			none: '0',
			sm: convertRem(0.125),
			md: convertRem(0.375),
			lg: convertRem(0.5),
			xl: convertRem(0.75),
			'2xl': convertRem(1),
			'3xl': convertRem(1.5),
			full: '9999px',
		},
		containers: {
			xs: `(min-width: ${convertRem(20)})`,
			sm: `(min-width: ${convertRem(24)})`,
			md: `(min-width: ${convertRem(28)})`,
			lg: `(min-width: ${convertRem(32)})`,
			xl: `(min-width: ${convertRem(36)})`,
			'2xl': `(min-width: ${convertRem(42)})`,
			'3xl': `(min-width: ${convertRem(48)})`,
			'4xl': `(min-width: ${convertRem(56)})`,
			'5xl': `(min-width: ${convertRem(64)})`,
			'6xl': `(min-width: ${convertRem(72)})`,
			'7xl': `(min-width: ${convertRem(80)})`,
			prose: '(min-width: 65ch)',
		},
		spacing: {
			DEFAULT: convertRem(1),
			none: '0',
			xs: convertRem(0.75),
			sm: convertRem(0.875),
			lg: convertRem(1.125),
			xl: convertRem(1.25),
			'2xl': convertRem(1.5),
			'3xl': convertRem(1.875),
			'4xl': convertRem(2.25),
			'5xl': convertRem(3),
			'6xl': convertRem(3.75),
			'7xl': convertRem(4.5),
			'8xl': convertRem(6),
			'9xl': convertRem(8),
		},
		textIndent: {
			DEFAULT: convertRem(1.5),
			xs: convertRem(0.5),
			sm: convertRem(1),
			md: convertRem(1.5),
			lg: convertRem(2),
			xl: convertRem(2.5),
			'2xl': convertRem(3),
			'3xl': convertRem(4),
		},
		textStrokeWidth: {
			DEFAULT: convertRem(1.5),
			none: '0',
			sm: 'thin',
			md: 'medium',
			lg: 'thick',
		},
	},
	presets: [presetMini()],
});
