import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

//Header is the fixed component
//Outlet is variable component that changes based on the route. It serves as a placeholder for the child routes to render their components. When a user navigates to a specific route, the corresponding component will be rendered within the Outlet, allowing for dynamic content while maintaining a consistent layout defined by the parent component (App in this case).

//Outlets -> // routing placeholder for the child routes to render their components. It allows
// the application to display different content based on the current route while maintaining a
// consistent layout defined by the parent component.
