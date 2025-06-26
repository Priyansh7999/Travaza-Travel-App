// colors.js - Complete color palette for React Native app

const colors = {
  // Primary Colors
  primary: {
    50: '#EDEEFF',
    100: '#DEE0FF',
    200: '#C4C5FF',
    300: '#A0A0FF',
    400: '#867AFF',
    500: '#6347F9', // Base
    600: '#663CEF',
    700: '#582FD3',
    800: '#4829AA',
    900: '#3D2986',
    950: '#25184E'
  },

  // Secondary Colors
  secondary: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981', // Base
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
    950: '#022C22'
  },

  // Tertiary Colors
  tertiary: {
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6', // Base
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
    950: '#2E1065'
  },

  // Dark Colors
  dark: {
    50: '#32417C',
    100: '#2C2258',
    200: '#241C49',
    300: '#1D163C',
    400: '#110D25',
    500: '#080613', // Base
    600: '#070512',
    700: '#05030E',
    800: '#04020C',
    900: '#000000',
    950: '#000000'
  },

  // Gray Colors
  gray: {
    50: '#F7F7F7',
    100: '#EDEDED',
    200: '#DFDFDF',
    300: '#C8C8C8',
    400: '#ADADAD',
    500: '#A1A1A1', // Base
    600: '#888888',
    700: '#7B7B7B',
    800: '#676767',
    900: '#545454',
    950: '#363636'
  },

  // Light Colors
  light: {
    50: '#F5F5F6',
    100: '#E5E6E8',
    200: '#CDCFD4',
    300: '#ABAFB5',
    400: '#81858F',
    500: '#6D727D', // Base
    600: '#575A63',
    700: '#4A4D54',
    800: '#424448',
    900: '#3A3B3F',
    950: '#242528'
  },

  // Success Colors
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E', // Base
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E14'
  },

  // Warning Colors
  warning: {
    50: '#FEFCE8',
    100: '#FEF9C3',
    200: '#FEF08A',
    300: '#FDE047',
    400: '#FACC15',
    500: '#EAB308', // Base
    600: '#CA8A04',
    700: '#A16207',
    800: '#854D0E',
    900: '#713F12',
    950: '#423306'
  },

  // Error Colors
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444', // Base
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A'
  },

  // Information Colors
  information: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6', // Base
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172E54'
  },

  // Base Colors
  black: '#000000',
  white: '#FFFFFF'
};

// Color aliases for easier access
export const Colors = {
  ...colors,
  
  // Quick access to base colors
  primaryBase: colors.primary[500],
  secondaryBase: colors.secondary[500],
  tertiaryBase: colors.tertiary[500],
  darkBase: colors.dark[500],
  grayBase: colors.gray[500],
  lightBase: colors.light[500],
  successBase: colors.success[500],
  warningBase: colors.warning[500],
  errorBase: colors.error[500],
  informationBase: colors.information[500],

  // Common UI element colors
  background: colors.white,
  surface: colors.gray[50],
  text: colors.dark[900],
  textSecondary: colors.gray[600],
  border: colors.gray[200],
  divider: colors.gray[100],
  shadow: colors.dark[200],

  // Status colors (shortcuts)
  success: colors.success[500],
  warning: colors.warning[500],
  error: colors.error[500],
  info: colors.information[500]
};

export default Colors;

// Usage examples:
// 
// Import in your component:
// import Colors from './colors';
// 
// Use in styles:
// backgroundColor: Colors.primary[500]
// backgroundColor: Colors.primaryBase
// color: Colors.text
// borderColor: Colors.border
//
// For React Native StyleSheet:
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.background,
//     borderColor: Colors.border,
//   },
//   primaryButton: {
//     backgroundColor: Colors.primaryBase,
//     borderRadius: 8,
//   },
//   successText: {
//     color: Colors.success,
//   }
// });