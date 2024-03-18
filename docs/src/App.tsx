import { RouterProvider } from 'react-router-dom';

import { CssBaseline, CssVarsProvider } from '@mui/joy';

import joyTheme from './design/joyTheme';
import router from './Router';

export default function App() {
  return (
    <CssVarsProvider theme={joyTheme} defaultMode="system">
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  );
}
