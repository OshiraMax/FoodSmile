import { ThemeProvider } from './context/ThemeContext';
import AppMain from './AppMain';

export default function App() {
    return (
      <ThemeProvider>
        <AppMain />
      </ThemeProvider>
    );
  }