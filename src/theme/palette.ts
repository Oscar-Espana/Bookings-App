export const palette = {
  primary: '#F7F4EB',
  secondary: '#F9B586',
  background: '#282727',
  neutral: '#8B8B8B',
  white: '#FFFFFF',
  black: '#000000',
};

export const paletteRGBA = {
  background: (opacity: number = 1) => `rgba(40,39,39,${opacity})`,
  black: (opacity: number = 1) => `rgba(0,0,0,${opacity})`,
};
