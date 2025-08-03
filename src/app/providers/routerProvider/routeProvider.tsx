import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Paths } from 'models/routerTypes';
import { SearchPage, Layout, Hero, NotFound, About } from 'pages';
import { ErrorElement } from '../../../components/ErrorBoundary/ui/ErrorElement.tsx';
import type { FC } from 'react';

const router = createBrowserRouter([
  {
    path: Paths.base,
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: Paths.base,
        element: <SearchPage />,
        children: [
          {
            path: `${Paths.hero}:id`,
            element: <Hero />,
            errorElement: <ErrorElement />,
          },
        ],
      },
      {
        path: Paths.notFound,
        element: <NotFound />,
      },
      {
        path: Paths.about,
        element: <About />,
      },
    ],
  },
]);

const RouteProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export { RouteProvider };
