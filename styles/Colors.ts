type ColorScheme = {
  mainColor: string;
  secondaryColor: string;
  thirdColor: string;
  textColor: string;
  backgroundColor: string;
  buttonColor: string;
};

const Colors: Record<'light' | 'dark', ColorScheme> = {
  light: {
    mainColor: '#23c483',
    secondaryColor: '#FFF069',
    thirdColor: '#96dded',
    textColor: '#111418',
    backgroundColor: '#baffdb',
    buttonColor: '#fcfcfc',
  },   
  dark: {
    mainColor: '#23c483',
    secondaryColor: '#f9c2ff',
    thirdColor: '#96dded',
    textColor: 'white',
    backgroundColor: '#fff',
    buttonColor: '#fff',
  }
};

export default Colors;