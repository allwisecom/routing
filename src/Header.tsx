import { Link, NavLink } from 'react-router-dom'; //client side navigation.

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-900">
      <img
        src="https://react.dev/images/react-logo.svg"
        alt="React logo"
        className="inline-block h-20"
      />
      <h1 className="text-2x1">Welcome to the React Training Store</h1>

      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
}

//Navlink allows for dynamic classnames based on the active state of the link. It provides an isActive property that can be used to conditionally apply styles or classes to the link when it matches the current URL. This is useful for highlighting the active link in a navigation menu, giving users visual feedback about their current location within the application.
