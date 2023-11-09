import { ThemeProvider } from './state/ThemeContext';
import AppMain from './AppMain';

export default function App() {
    return (
      <ThemeProvider>
        <AppMain />
      </ThemeProvider>
    );
  }