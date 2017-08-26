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
    * **lib** Helpers, utilities, and HOC(?)
    * **packs** Used as the top level compile targets for webpack
      * **application.js** mostly as artifact from webpacker:react init
      * **react_app.js** starting point for standard tree
    * **pages** Top level Views that are all routable and mostly
      assemble other components.  Directory structure should strive to
      match url structure
      * **App** Master page where Store, Routing, and other whole page
        activities are performed.
      * **Home** Page for the root view.  May not be needed.
      * **Crud**
        * *index.js* matches controller's index action
        * *form.js* basic form for editing, used in edit and new pages
        * *edit.js* matches controller's index action
        * *show.js* matches controller's index action
        * *new.js* matches controller's index action
        * *destroy.js* optional view for destroy/delete actions
        * **SubCrud** rescursive structure all the way down
        * **note** create and updates are client to server interactions
          not client to screen
    * **store** Used to setup redux, middleware, and DUCK style reducers
      * **CrudType** Used to store PropType definitions of shared data
        * *container.js* list and single containers, ready to wire to a screen or page
        * *defaults.js* default values for type
        * *reducers.js* actions for your crudtype
        * *sagas.js* async actions and API calls
        * *selectors.js* standard views into store for crud stuff
        * *shape.js* standard definitaion of the shape that container provides





