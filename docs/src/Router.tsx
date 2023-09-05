import { createBrowserRouter } from 'react-router-dom';

import Icons from './app/Icons';
import Usage from './app/Usage';
import Layout from './design/layout/Layout';
import Error from './app/Error';
import Icon from './app/Icon';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Icons />
      },
      {
        path: '/usage',
        element: <Usage />
      },
      {
        path: '/icons/:slug',
        element: <Icon />
      }
    ]
  }
]);

export default router;
