import { createBrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';
import ErrorPage from '../pages/error-page';
import Layout from '../ui/layout';
const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Homepage />,
      },
    ],
  },
]);
export default RootRouter;
