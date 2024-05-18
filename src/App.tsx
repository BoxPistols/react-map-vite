import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Mapbox from './components/MapBox';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { theme } from './lib/theme';

const App = () => {
  const cache = createCache({
    key: 'css',
    prepend: true,
    stylisPlugins: [],
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={cache}>
        <div className="relative h-screen">
          <header className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Map App</h1>
            <div className="flex gap-4">
              <Button variant="contained" size="small" color="primary" className="mr-2" endIcon={<SendIcon />}>
                Primary
              </Button>
              <Button variant="contained" size="small" color="secondary" endIcon={<DeleteIcon />}>
                Second
              </Button>
            </div>
          </header>
          <main className="absolute inset-0 top-12">
            <Mapbox latitude={35.6809591} longitude={139.7673068} zoom={9} />
          </main>
          <footer className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white px-2 py-1 flex justify-center text-sm">
            Copy right 2024 by Map App
          </footer>
        </div>
      </CacheProvider>
    </ThemeProvider>
  );
};

export default App;
