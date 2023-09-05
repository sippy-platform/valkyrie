import { createBrowserRouter } from 'react-router-dom';

import Icons from './app/Icons';
import Usage from './app/Usage';
import Layout from './design/layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Icons />
      },
      {
        path: '/usage',
        element: <Usage />
      }
    ]
  }
]);

export default router;
