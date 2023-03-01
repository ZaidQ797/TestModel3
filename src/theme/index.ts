import {createTheme} from '@shopify/restyle';
import palette from './palette';

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.tiber,

    cardBackground: palette.grey,
    cardBackgroundHighlight: palette.alto,
    cardForeground: palette.tiber,
    cardBorder: palette.fog,
    black: palette.black,
    imagePlaceholder: palette.loblolly,

    headerBackground: palette.tiber,
    headerBackgroundHighlight: palette.tiberDark,
    headerForeground: palette.white,

    authHeaderBackground: palette.white,
    authHeaderForeground: palette.fiord,

    border: palette.lightGrey,

    tabBarInvactive: palette.manatee,
    tabBarActiveBackground: palette.grey,

    text: palette.bermudaGrey,
    accentText: palette.tiber,
    headingText: palette.fiord,
    textOnPrimary: palette.white,
    inputLabelText: palette.tiberDark,
    inputText: palette.regentGrey,
    inputPlaceholder: palette.bermudaGrey,
    lightBlue: palette.lightBlue,
    buttonDisabled: palette.lightGrey,
    buttonDisabledText: palette.darkGrey,

    callControlButton: palette.red,

    primary: palette.tiber,
    green: palette.green,
    primaryHighlight: palette.greenDark,
    secondary: palette.amaranth,
    secondaryHighlight: palette.amaranthDark,
    success: palette.lightGreen,
    warning: palette.yellow,
    danger: palette.red,
    neutral: palette.grey,
  },
  spacing: {
    xs: 5,
    s: 10,
    m: 14,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  breakpoints: {},
  textVariants: {
    header: {
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
      color: 'primary',
      textAlign: 'center',
    },
    body: {
      fontWeight: '400',
      fontSize: 14,
    },
    authHeader: {
      fontSize: 22,
      fontWeight: '600',
    },
    inputLabel: {
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 's',
      lineHeight: 14,
    },
    caption: {
      fontSize: 10,
      fontWeight: '500',
    },
    buttonLabel: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: '600',
      textAlign: 'center',
    },
    listItemTitle: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: '400',
      letterSpacing: 0.9,
    },
    sectionHeading: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: '600',
      letterSpacing: 1,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: '500',
    },
    modalButton: {
      fontSize: 15,
      fontWeight: '500',
    },
  },
});

export type Theme = typeof theme;
export default theme;
