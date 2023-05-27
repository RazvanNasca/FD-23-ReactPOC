React PoC - Documentation

For this application, an API from GitHub was used to fetch the data: `"https://api.github.com/search/repositories"`

### `<Routes>`
Whenever the location changes, <Routes> looks through all its child routes to find the best match and renders that branch of the UI. <Route> elements may be nested to indicate nested UI, which also correspond to nested URL paths.


### `useState()`
The React `useState` Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

We initialize our state by calling `useState` in our function component.
`useState` accepts an initial state and returns two values:
    1. The current state.
    2. A function that updates the state.


### `useEffect(() => {}, [])`
The `useEffect` Hook allows you to perform side effects in your components. 
Some examples of side effects are: fetching data, directly updating the DOM, and timers.


### `axios`
`Axios` is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE


### `useParams()`
The `useParams` hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `<Route path>`. Child routes inherit all params from their parent routes.


### `.map()`
The `map()` method used to traverse and display a list of similar objects of a component. A map is not the feature of React. Instead, it is the standard JavaScript function that could be called on any array. The `map()` method creates a new array by calling a provided function on every element in the calling array.


### `npm start` --> used for running

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.