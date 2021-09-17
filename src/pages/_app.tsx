import type { AppProps } from 'next/app';
import { globalCavilhaCss, fonts, colors } from '@cavilha/theme';
import { reset } from 'stitches-reset';

const globalStyles = globalCavilhaCss({
  '@font-face': [
    {
      fontFamily: 'Open Sans',
      fontDisplay: 'swap',
      fontWeight: '300',
      fontStyle: 'normal',
      src: 'local("Open Sans"), url("/fonts/open-sans-300.woff2")',
    },
    {
      fontFamily: 'Open Sans',
      fontDisplay: 'swap',
      fontWeight: '400',
      fontStyle: 'normal',
      src: 'local("Open Sans"), url("/fonts/open-sans-400.woff2")',
    },
    {
      fontFamily: 'Open Sans',
      fontDisplay: 'swap',
      fontWeight: '600',
      fontStyle: 'normal',
      src: 'local("Open Sans"), url("/fonts/open-sans-600.woff2")',
    },
    {
      fontFamily: 'Open Sans',
      fontDisplay: 'swap',
      fontWeight: '700',
      fontStyle: 'normal',
      src: 'local("Open Sans"), url("/fonts/open-sans-700.woff2")',
    },
  ],
  ...reset,
  html: {
    height: '100%',
    width: '100%',
  },
  body: {
    fontFamily: fonts.untitled,
    background: colors.canvas,
    height: 'inherit',
    width: 'inherit',
    '& > #__next, & > #__next > div': {
      height: 'inherit',
      width: 'inherit',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
