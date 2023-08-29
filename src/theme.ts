import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    color: {
      main: string;
      mint: string;
      darkblue: string;
    };
    mono: {
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      black: string;
    };
  }

  interface PaletteOptions {
    color?: Palette['color'];
    mono?: Palette['mono'];
  }
}

const theme = createTheme({
  palette: {
    color: {
      main: '#3964c3',
      mint: '#7ed8b8',
      darkblue: '#2e4b90',
    },
    mono: {
      black: '#1A1C19',
      gray1: '#1A1C19',
      gray2: '#8D948C',
      gray3: '#CFD1D5',
      gray4: '#F1F2F1',
      white: '#FFFFFF',
    },
  },
});

export default theme;
