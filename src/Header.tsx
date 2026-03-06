import { Link, NavLink, useSearchParams } from 'react-router-dom'; //client side navigation.
import logo from './logo.svg';
import { FormEvent } from 'react';

export function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); //it prevents soem nuance events when form gets submitted, such as page refresh. It allows us to handle the form submission in a custom way, such as sending data to a server or updating the application state without causing a full page reload.
    console.log('search value submitted');

    //formData API is native API - browser native feature. means to collect the data from the form controls.

    const formData = new FormData(event.currentTarget);
    const x = formData.get('tf1') as string;

    console.log(x);

    setSearchParams({ x });
  }

  return (
    <header className="text-center text-slate-50 bg-slate-900">
      <form className="relative text-right" onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder="type a value"
          defaultValue={searchParams.get('search') ?? ''}
          name="tf1"
          className="absolute right-0 top-0 rounded py-2 px-3 text-black"
        />
        <select />
      </form>

      <Link to="">
        <img src={logo} alt="React logo" className="inline-block h-20" />
      </Link>
      {/* <img src="public\favicon.ico" alt="React logo" className="inline-block h-20" /> */}

      <Link to="" className="text-2x1">
        <h1 className="text-2x1">Welcome to the React Training Store</h1>
      </Link>

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

//form is form group from jsx, it is used to group form elements together and handle form submission. It provides a way to manage the state of the form and its inputs, as well as handle validation and submission logic. When a user submits the form, the onSubmit event handler can be used to prevent the default form submission behavior and perform custom actions, such as sending data to a server or updating the application state.
//Navlink allows for dynamic classnames based on the active state of the link. It provides an isActive property that can be used to conditionally apply styles or classes to the link when it matches the current URL. This is useful for highlighting the active link in a navigation menu, giving users visual feedback about their current location within the application.
