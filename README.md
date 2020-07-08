# Notum Template for CRA with Material UI



## Installation

```bash
npx create-react-app my-app --template @notum-cz/cra-template-notum-material-ui
```

## After instllation

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Folder structure

```
src
│   App.tsx
│   ...
│
└───api
│   │  *DTOs for resources*
│
└───assets
│   │  *All static assets*
│
└───components
│   │
│   └───shared
│   │   │   *All shared components*
│   │
│   └───comps
│   │   │
│   │   └───[Partial Name]
│   │       │ [PartialName].tsx
│   │       │ types.tsx
│   │       │ [PartialName]Styles.tsx
│   │
│   └───[Page Name]
│       │
│       └───[Component Name]
│           │ [ComponentName].tsx
│           │ types.tsx
│           │ [ComponentName]Styles.tsx
│
└───helpers
│   │
│   └───constants
│   │
│   └───enums
│   │
│   └───functions
│   │
│   └───interfaces
│
└───pages
│   │   *All router pages*
│
└───plugins
│   │
│   └───[plugin name]
│   │   *Settings for plugin*
│
└───router
│   │   index.tsx
│   │   *All routes devided in files or folders*
│
└───store
│   │   index.tsx
│   │   combinedReducers.ts
│   │
│   └───[resource name]
│   │   reducers.ts
│   │   selectors.ts
│   │   actions.ts
│
└───styles
│   │   *Global styles of app*
│
└───tests
│  │
│  └───unit
│  │   * All unit tests named by components *
│  │
│  └───intergation
│  │   * All integration tests named by components *


## Bug reports

If you found any bug please open issue.
