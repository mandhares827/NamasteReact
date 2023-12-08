#first Episode
* React element is an object which browser understands
* ReactElement(Object)=>HTML(Brwoser understands)
* React replaces whatever present in root element with new elements
* createElement("name of the element", {attributes}, "children")
* Siblings can be passed using array of createElement

#second Episode
* package.json is configuration for npm
* most important package which we need is a bundler
* bundler bundles, cleans, compresses all project files for eg. webpack, parcel, veet
* there are two types of dependencies. 1. dev-dependency and 2. normal dependency
* dev-dependency is used when we are developing app (-D is used for dev-dependency)
* normal dependency is used in production also
* ^ (caret) Upgrade minor version 2.8.3 to 2.8.4
* ~ (tilde) Upgrade major version 2.8.3 to 3.8.4
* package.json its a configuration for npm, it keeps track of what package version is installed in our system
* package-lock.json locks the version and keeps the track of exact version of package installed.
* integrity - hash - verifies that which ever is there at my local machine should be deployed to production as well
* node_modules - contains actual data i.e dependencies in project
* parcel has its own dependencies its called transitive dependencies
* if we have package.json and package-lock.json then we can regenrate our node_modules

# Parcel
* Dev Build
* Local Server 
* HMR - Hot Module Replacement
* File watching algorithm - written in c++
* Caching - faster builds 
* Image optimisation 
* Minification 
* Bundling 
* Compress
* Consistant hashing
* code splitting
* Differencial bundling - support older browser
* Diagnostics
* Error handling
* HTTPs hosting
* Tree shaking - remove unused code
* main in pacakge.json represents the entry point of our app, if we give index.html it will give us error, so to avoid the same we should remove main from package.json
* JSX is javascript syntax to create a react element
* JSX is not html inside javascript
* JSX transpiled before it reaches to js - babel
* JSX => React.createElement => Object => Html element
* There are two types of components. 1. Class based component and 2. Functional component
* If a function returns a react element / JSX is called as functional component


