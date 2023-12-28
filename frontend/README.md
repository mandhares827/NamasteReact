#first Episode

- React element is an object which browser understands
- ReactElement(Object)=>HTML(Brwoser understands)
- React replaces whatever present in root element with new elements
- createElement("name of the element", {attributes}, "children")
- Siblings can be passed using array of createElement

#second Episode

- package.json is configuration for npm
- most important package which we need is a bundler
- bundler bundles, cleans, compresses all project files for eg. webpack, parcel, veet
- there are two types of dependencies. 1. dev-dependency and 2. normal dependency
- dev-dependency is used when we are developing app (-D is used for dev-dependency)
- normal dependency is used in production also
- ^ (caret) Upgrade minor version 2.8.3 to 2.8.4
- ~ (tilde) Upgrade major version 2.8.3 to 3.8.4
- package.json its a configuration for npm, it keeps track of what package version is installed in our system
- package-lock.json locks the version and keeps the track of exact version of package installed.
- integrity - hash - verifies that which ever is there at my local machine should be deployed to production as well
- node_modules - contains actual data i.e dependencies in project
- parcel has its own dependencies its called transitive dependencies
- if we have package.json and package-lock.json then we can regenrate our node_modules

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File watching algorithm - written in c++
- Caching - faster builds
- Image optimisation
- Minification
- Bundling
- Compress
- Consistant hashing
- code splitting
- Differencial bundling - support older browser
- Diagnostics
- Error handling
- HTTPs hosting
- Tree shaking - remove unused code
- main in pacakge.json represents the entry point of our app, if we give index.html it will give us error, so to avoid the same we should remove main from package.json
- JSX is javascript syntax to create a react element
- JSX is not html inside javascript
- JSX transpiled before it reaches to js - babel
- JSX => React.createElement => Object => Html element
- There are two types of components. 1. Class based component and 2. Functional component
- If a function returns a react element / JSX is called as functional component
- JSX takes care of injection attacks by sanitizing a data
- Config driven UI
- Using index as key is bad practice.
- Never keep hard coded data and common url links in components

- there are two types of import and export
  - default export / import
  - named export

#React Hooks

- Hook is nothing but a normal js function, it has its own specific purpose to use.
- whenever a state variable updates, react rerenders its component
- React uses reconcilation algorithm (React Fiber)
- React create virtual dom (Representation of actual dom) its a normal javascript object
- efficient dom manipulation - it has virtual dom - object representation

#Monolythic and Microservices architecture

- In monolythic architecture - we have all the things like email services, UI, Backend and DB in single application. Its a bulky thing
- In microservices architecture - For each and every small thing we have different project. This is known as seperation of concerns and it follows single responsibility concerns.
- Shimmer UI - We load fake page until our data loads
  @Read optional chaining in js
  @watch CORS video of akshay

useEffect

- If there is no dependency array => useEffect is called on every render
- if dependency array is empty = [] => useEffect will be called on inital render only(just once)
- If dependency array is not empty => useEffect will be called when dependency array changes

- Always call hooks inside component
- Try to call useSate at the top
- Never use useState hook inside a condition
  There are two types of routing in web apps

1. Client side routing
2. server side routing

#Functional component
Its a javascript function which returns a piece of JSX

#Class based component
Its a class which returns a piece of JSX, it uses render() method and class extends react.component

Never update state directly (count = count + 1)

Lifecycle of component
Parent Constructor called
Parent Render
FirstChild Constructor
FirstChild Render
SecondChild Constructor
SecondChild Render
FirstChild ComponentDidMount
SecondChild ComponentDidMount
Parent ComponentDidMount

chunking
code splitting
dynamic bundling
lazy loading
dynamic import

Higher order component
Higher order component takes a component and returns a component
