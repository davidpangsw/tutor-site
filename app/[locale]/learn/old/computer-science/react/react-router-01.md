# Getting Started
[Source](https://reactrouter.com/en/main/start/overview)

## Feature Overview

### Client Side Routing
- can update the URL from a link click without making another request from the server.
- can immediately render new UI and make data requests with fetch to update the page with new information.
- faster / dynamic user experiences

```ts
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]
);


function App() {
  return  (<RouterProvider router={router} />);
}

export default App;
```
- Click "About Us"
    - `http://localhost:3000/` => `http://localhost:3000/about`
    - No request from the server


### Nested Routes, loader, and action
```ts
// Configure nested routes with JSX
createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="contact" element={<Contact />} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      />
      <Route element={<AuthLayout />}>
        <Route
          path="login"
          element={<Login />}
          loader={redirectIfUser}
        />
        <Route path="logout" action={logoutUser} />
      </Route>
    </Route>
  )
);
```
- `/`: `<Root />`
    - `/contact`: `<Contact />`
    - `/dashboard`: `<Dashboard />`, loader = `fetch("/api/dashboard.json")`
    - `<AuthLayout/>`
        - `/login`: `<Login />`, loader = `redirectIfUser`
        - `/logout`: action = `logoutUser`

- Brief explanation:
    - loader
        - As the user navigates around the app, the loaders for the next matching branch of routes will be called in parallel
        - Get the in the components through the hook `useLoaderData()`.

    - action
        - Route actions are the "writes" to route loader "reads".
        - provide a way for apps to perform data mutations with simple HTML and HTTP semantics while React Router abstracts away the complexity of asynchronous UI and revalidation.
        - gives you the simple mental model of HTML + HTTP (where the browser handles the asynchrony and revalidation) with the behavior and UX capabilities of modern SPAs.
        - Actions are called whenever the app sends a non-get submission ("post", "put", "patch", "delete") to your route. 


### Dynamic Segments of URL
```ts
// If the current location is /projects/abc/tasks/3
<Route
  path="projects/:projectId/tasks/:taskId" 

  // sent to loaders and actions
  loader={({ params }) => {
    params.projectId; // abc
    params.taskId; // 3
  }}
  // and actions
  action={({ params }) => {
    params.projectId; // abc
    params.taskId; // 3
  }}
  element={<Task />}
/>;

function Task() {
  // returned from `useParams`
  const params = useParams();
  params.projectId; // abc
  params.taskId; // 3
}

function Random() {
  const match = useMatch(
    "/projects/:projectId/tasks/:taskId"
  );
  match.params.projectId; // abc
  match.params.taskId; // 3
}
```

### Ranked Route Matching
- When matching URLs to routes, React Router will rank the routes (according to the number of segments, static segments, dynamic segments, splats, etc.) and pick the most specific match.

```ts
// Which one would match http://example.com/teams/new ?
<Route path="/teams/:teamId" />
<Route path="/teams/new" />
```

### Active Links
- navigation sections at the top, the sidebar, and often multiple levels.
- Styling the active navigation items in `<NavLink>` so the user knows
    - `isActive`: where they are
    - `isPending`: where they're going
- `style`, `className` provides `isActive` `isPending` in callback
```ts
<NavLink
  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "red" : "inherit",
    };
  }}
  className={({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  }}
/>
```