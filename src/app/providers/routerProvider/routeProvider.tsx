import { JSX } from 'react';
import { SearchPage, Layout, Hero, NotFound } from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Paths } from 'models/routerTypes.ts';
import { ErrorElement } from '../../../components/errorBoundary';
import { SearchRequest } from '../../../utils/api/search-request.ts';

const router = createBrowserRouter([
  {
    path: Paths.base,
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: Paths.base,
        element: <SearchPage />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const query = url.searchParams.get('query') ?? '';
          const page = parseInt(url.searchParams.get('page') ?? '1', 10);
          const data = await SearchRequest(query, page);

          return { data, query, page };
        },
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
    ],
  },
]);

const RouteProvider: () => JSX.Element = () => {
  return <RouterProvider router={router} />;
};

export { RouteProvider };
