## Run the development server

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

## Libraries used

* ReactQuery for API calls and server state management
* TailwindCSS for styling
* React DnD with Html5 backend for drag drop functionality

## Directory Structure

```
├── public
    ├── index.html
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── application
        ├── App.tsx
    ├── common
        ├── api (declarations and implementation of api clients)
    ├── features
        ├── <feature-name>
            ├── components (components used by the feature)
            ├── views (main screens in the feature)
            ├── assets
    └── indes.tsx

```

A user can drag and drop an employee to any other employees card to make him the manager. Providing functionalities for
employee CRUD operations will be the next step of improvising the whole experience.  
