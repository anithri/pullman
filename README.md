# README
Some ideas thoughts and patterns for how i should organize things
going forward.

## the Pullman way

### Server
  1. JSON API
    * can keep simple, use serializers or jbuilder
    * Swagger I go back and forth on, but I don't think we need it
    * JWT base authentication
    * Policy based authorization.
    * Otherwise Rails
  2. Serverside rendering?
    * maybe?  i'll have to see what time to glass is like without it.
    * at the very least we can mirror the routes and preload the data
      for that page
### Development
  * **app/javascript**
    * **components** Generic components that could be extracted into own
      packages
    * **containers** Smart components that know how to work with various
      types of entities
    * **packs** Used as the top level compile targets for webpack
      * **application.js** mostly as artifact from webpacker:react init
      * **react_app.js** starting point for standard tree
    * **pages** Top level Views that are all routable and mostly
      assemble other components
      * **App** Master page where Store, Routing, and other whole page
        activities are performed.
      * **Home** Page for the root view.  May not be needed.
    * **shapes** Used to store PropType definitions of shared data
      * don't really like the location.  not sure where it goes yet
    * **store** Used to setup redux, middleware, and DUCK style reducers





