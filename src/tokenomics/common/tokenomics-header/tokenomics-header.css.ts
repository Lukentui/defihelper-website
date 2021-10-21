import { composeStyles, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
  maxWidth: 1920,
  margin: '0 auto',

  '@media': {
    [theme.mediaQueries.up(1921)]: {
      overflow: 'visible'
    }
  }
});

export const col = style({});

export const hero = style({
  minHeight: 'calc(100vh - 84px)',
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [theme.mediaQueries.md()]: {
      minHeight: 'calc(100vh - 116px)'
    }
  }
});

export const img = style({
  width: '100%',
  maxWidth: 638,
  position: 'absolute',
  right: -25,
  top: 0,
  bottom: 0,
  objectFit: 'contain',
  display: 'none',
  zIndex: -1,

  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'block'
    }
  }
});

export const title = style({
  marginBottom: 16
});

export const subtitle = style({
  marginBottom: 24,
  color: theme.palette.grey1
});

export const text = composeStyles(
  col,
  style({
    marginTop: 'auto',
    marginBottom: 'auto',

    '@media': {
      [theme.mediaQueries.lg()]: {
        width: '63%',
        paddingTop: 64,
        paddingBottom: 80
      }
    }
  })
);

export const grid = style({
  display: 'grid',
  padding: '24px 32px',
  marginBottom: 32,

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '48px 63px',
      gridTemplateColumns: `repeat(auto-fit, minmax(264px, 1fr))`
    }
  }
});

export const factoidTitle = style({
  color: theme.palette.grey1
});

export const factoidSubtitle = style({
  whiteSpace: 'nowrap'
});

export const progressContainer = style({
  marginBottom: 20
});
