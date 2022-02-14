const THEME_UNIT_SIZE = 8

const spacing = margins => THEME_UNIT_SIZE * margins

const config = {
  spacing,
  borderRadius: spacing(2),
  opacity: 0.9,
  colors: {
    background: '#ffffff',
    font: '#FBFBFB',
    primary: 'cornflowerblue',
    sunny: '#90CAFF',
  },
  fonts: {
    small: spacing(2),
    medium: spacing(3),
    big: spacing(4),
    huge: spacing(12),
    weight: 300,
    shadow: '0 0 3px grey',
  },
  breakpoints: {
    desktop: {
      maxWidth: 1280,
    },
  },
}

export default config
