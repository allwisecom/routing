npx create-reactapp --template typescript
npm i react-router-dom

npm install

Routing

-> React Router
Declaring routes
Create navigation
Use nested routes
Use route params - useParams()
error page
index routes
search parameters
navigation programatically - useNavigate() - hook
form navigation

lazy loading - suspense & await.

A,B,C's of routing :

            Hashbang
            RouterTree
            Routing Placeholder

// step 1 - Hashbang - programmatically making state changes(via events) to the BrowserURLstate

first - navigation - 'how the developer expects end user's to navigate

Non React syntax :
DOM : <a href="#products"> click here </a>

    React syntax:

      import {Link,NavLink} from 'react-router-dom'

    <Link to="products" > go to products </Link>

<NavLink to="products" > go to products </NavLink>

example.com/inventory

Step 2:

React's Router : - generates a RouterTree

import {createBrowserRouter} from 'react-router-com'; //helps to create router tree

    const myRouterTree = createBrowserRouter([ //array of route objects
        {  // route object
            path:'inventory', // tracks the BrowserURL state
            element:<InventoryPage/>

    },
    {  // route object
          path:'sales', // tracks the BrowserURL state
            element:<SalesPage/>
    }])

    Routing Placeholder - accomdates the a component provided by the router tree.

    <RouterProvider router ={myRouterTree} />





    Introducing React router

Declaring Routes
Creating Navigation
Nested Routes
Route Parameters
Error page
Index Route
Search parameters
Navigating programmatically
Form Navigation
Lazy loading

npm i react-router-dom

A,B,C's of routing :

            Hashbang
            RouterTree
            Routing Placeholder

example.com/inventory

// step 1 - Hashbang - programmatically making state changes(via events) to the BrowserURLstate

first - navigation - 'how the developer expects end user's to navigate

Non React syntax :
DOM : <a href="#products"> click here </a>

    React syntax:

      import {Link,NavLink} from 'react-router-dom'

    <Link to="products" > go to products </Link>

<NavLink to="products" > go to products </NavLink>

//step 2

React's Router : - generates a RouterTree - track the BrowserURL state and accordingly serves a component

import {createBrowserRouter,RouterProvider} from 'react-router-com';

    const myRouterTree = createBrowserRouter([  // array of route objects
        {  // route object
            path:'inventory', // tracks the BrowserURL state
            element:<InventoryPage/>

    },
    {  // route object
          path:'sales', // tracks the BrowserURL state
            element:<SalesPage/>
    }])

//step 3

    Routing Placeholder -  'accomodates a component provided by the RouterTree'

<RouterProvider router={myRouterTree} />

<a> not to use this since this performs network calls .. can see under network.

 <Link> will not show the in network  // this performs client side calls

navlink allows classnames with expressions inside classnames along with static string.

Link only allows string for class name.

Nested Routes:

// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

// const myRouterTree = createBrowserRouter([
// {
// path: 'customer',
// element: <Customer />,
// children: [
// { path: 'profile', element: <CustomerProfile /> },
// { path: 'tasks', element: <CustomerTasks /> },
// ],
// },
// {},
// ]);

// <RouterProvider router={myRouterTree}/>

// <Outlet />;

// Route Parameters : 'segment in the path that varies'

// example.com/customer/123/tasks/abc

const myRouterTree = createBrowserRouter([
{
path: '/customer/:id/tasks/:taskid', //
},
{},
]);

How do components access the route parameters ? useParams() Hook

useParams() // gets the {id : 123, taskid : 'abc'} this is treated as object

const params = useParams();

params.id
params.taskid

route parameters (id, taskid) defined in path property.

useRouteError() // get the error object(status, status text, data) while user switching to the route which doesnt exist.

Index path -> default page for child routes

Search Parameters: Query Parameters

how to spot search parameter in browser url

https://www.example.com/?type=sometype&when=recent // search parameters object -> {type: sometype, when:recent}

? indicates the first parameter -> type=sometype
& for other parameters -> when=recent

How do component access the search parameters -> useSearchParams()

//tuple
const [searchParams, setSearchParams] = useSearchParams();

searchParams --> {type: sometype, when:recent}
searchParams.get('type') //sometype

setSearchParams ({type: 'sometype', when:'recent'})

search paramters also known as query paramaters..

Router parameters -> matches with router tree -> useParams()
