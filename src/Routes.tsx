import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/error';
import { HomePage } from './pages/HomePage';

const myRouterTree = createBrowserRouter([
  {
    path: '/', //tracks browser url state
    element: <App />, //serves the component to the user when they navigate to the url path
    //errorElement: <DefaultErrorElement /> //this is used to display a default error message or component when a user navigates to a route that doesn't exist in the router configuration. It helps improve user experience by providing feedback instead of showing a blank page or default browser error message.
    errorElement: <ErrorPage />, //this is used to display a custom error message or component when a user navigates to a route that doesn't exist in the router configuration. It helps improve user experience by providing feedback instead of showing a blank page or default browser error message.
    children: [
      //nested router tree - dynamic child that will be served in the Outlet.
      {
        //path: '/',
        //this homepage/default page
        index: true, //this is used to specify that this route should be rendered when the user navigates to the parent route (in this case, '/'). It serves as the default child route for the parent route.
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:productId',
        element: <ProductPage />,
      },
      //this is wildcard route that matches any path that doesn't match the above routes. It serves as a catch-all for undefined routes, allowing you to display a custom "Not Found" message or component when users navigate to a non-existent page.
      //   {
      //     path: '*',
      //     element: <p>Not found</p>,
      //   },
    ],
  },
  //   {
  //     path: 'products', //tracks browser url state
  //     element: <ProductsPage />, //serves the component to the user when they navigate to the url path
  //   },
  //   {},
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />;
}
