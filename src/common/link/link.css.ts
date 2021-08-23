import { style, styleVariants } from '@vanilla-extract/css';
import { transitions } from 'polished';
import { theme } from '../theme';

export const root = style({
  display: 'inline-flex',
  cursor: 'pointer',
  outline: 0,
  fontFamily: 'inherit',
  fontWeight: 'normal',
  textUnderlineOffset: 3,
  textDecorationColor: theme.palette.grey2,
  ...transitions('opacity 0.3s ease')
});

export const underlines = styleVariants({
  none: {
    textDecorationLine: 'none'
  },

  always: {
    textDecorationLine: 'underline'
  },

  hover: {
    textDecorationLine: 'none'
  }
});

export const colors = styleVariants({
  primary: {
    color: 'currentColor'
  },

  blue: {}
});
