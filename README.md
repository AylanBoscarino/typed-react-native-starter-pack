# React Native Starter Pack

## A starter pack for React Native Applications with Typescript and Wix's React Native Navigation

This starter pack tries to solve the problem of creating a new React Native project
from scratch and adding Navigation and State Management to the app. It gives you
a new app with these features configurated out of the box.

### Summary

- [Starting a project](#starting)
- [Creating a Screen Component](#creating)
- [Connecting a Component With Redux](#connecting)

Creating a new project in React Native can be a pain, particularly if we don't
like using a general bundler like Expo due to the increase in the size of the
app and the fact it can't use certain libraries like [Wix's React Native Navigation](https://wix.github.io/react-native-navigation/#/).
It's even more tiresome when we wish to add Redux to our project due the load of
boilerplate it demands before we can start working with it.

I built this starter pack just for that: to start my new React Native projects with
Typescript using React Native Navigation and with Redux's boilerplate already done.

⚠️ At the moment only the Android environment is set and working. ⚠️

<!-- Plus I added some docblocks here and there to clarify where i put everything and why,
the documentation generate by [Typedoc](https://github.com/TypeStrong/typedoc)
was the cherry on top of the cake. -->

## <span id="starting" name="starting">Starting a project</span>

To use this starter pack we basically need three things;

- Have installed the [Yarn package manager](https://yarnpkg.com/pt-BR/) as well as [NPM](https://www.npmjs.com/)
- To know the basics of [how to use Git](http://rogerdudler.github.io/git-guide/).
- Be familiar with [React Native CLI](https://facebook.github.io/react-native/docs/getting-started)

The start the project is quite simple, you just need to clone this repository and
fork it the way you find more convinient:

```bash
git clone https://github.com/AylanBoscarino/typed-react-native-starter-pack.git YourProjectName
```

And then all you need is to get inside the project and install it's dependencies with yarn:

```bash
yarn install
```

After that you can open your project on the text editor of your preference.

## <span id="creating" name="creating">Creating a Screen Component</span>

Part of the appeal of this starter pack is to create a project that's already
integrated with [Wix's React Native Navigation](https://wix.github.io/react-native-navigation/#/).
To create a Screen to the app follow this steps:

### Create the Component

That's the easy part, the starter pack was built with Hooks and Redux in mind
so we just need to create functional components. For this example we'll create
a file NewComponent.tsx on src/components:

```jsx
+import React from 'react';
+import { Text, View } from 'react-native';

+interface Props {}
+
+export default function NewComponent(props: Props) {
+  return (
+    <View>
+      <Text> textInComponent </Text>
+    </View>
+  );
+}
+
+NewComponent.options = {};
```

Notice the options propertie we're adding an options object to the component's
prototype, this is needed because RNN sees options as a static attribute of a
class component. Through the options object we'll be able to set some configurations
of the component's navigation, such as the Navbar style.

### Register the Component

With the component created we need to register it to RNN so it can be accessed
as a Screen by the library, we'll do it adding to the default export of `registerComponents.ts` a new
call of `Navigation.registerComponent`:

```ts
import { NavigationRoot } from 'react-native-navigation/lib/dist/Navigation';
import Main from '../components/Main';
import { provideRedux } from '../redux/provider';
import NewComponent from '../components/NewComponent';

/**
 * This function register the components that must be screens in React Native Navigation
 * The registerComponent's 2nd arg must be a callback function calling provideRedux
 * Pass as an argument to provideRedux the component you wish set as a Screen
 *
 * @param - The React Native Navigation main object
 */
export default function registerComponents(Navigation: NavigationRoot) {
  Navigation.registerComponent(`MainApp`, () => provideRedux(Main));
  +Navigation.registerComponent(`NewComponent`, () =>
    provideRedux(NewComponent)
  );
}
```

Note that we're passing it to `provideRedux` before returning it in the callback
passed as second argument of `registerComponent`, that's needed if we wish to
provide the component with Redux's state, which is usually the case.

### Add the Component to Navigation

Next we just need to add the component as part of our app's navigation. For
simplicity's sake we'll add as parte of the stack navigation shipped with the
starter pack in src/navigation/stack.ts.

```ts
import { LayoutStack } from 'react-native-navigation';

/**
 * It's an exemplo of a RNN's navigation stack
 * for more info check the official docs
 * https://wix.github.io/react-native-navigation/#/docs/layout-types
 *
 * @returns an LayoutStack object that can be used by React Native Navigation
 */
export function getRootStack(): LayoutStack {
  return {
    children: [
      {
        component: {
          name: 'MainApp'
        }
      },
+      {
+        component: {
+          name: 'NewComponent'
+        }
+      }
    ]
  };
}
```

And that's it, our NewComponent has been successfuly added to the stack navigation
of our new app.

## <span id="connecting" name="connecting">Connecting a Component With Redux</span>

The task of connecting a component with Redux's store in TypeScript is kinda verbose
due the quantity of interfaces that must be created in order to type correctly
the props that are goint to be injected on our component.

That said, I feel the best way to declare those interfaces is to create a new
file with the convention of naming it `<ComponentName>.types.ts` but feel free
to disagree, I'll happly accept alternatives if they look better.

### Setting the Types

For this step we'll be using the `NewComponent.tsx` we created in the previous
example, in the same level we'll create `NewComponent.types.ts`

```ts
+export interface NewComponentOwnProps {}

+export interface NewComponentStateProps {}

+export interface NewComponentDispatchProps {}

+export type NewComponentProps = NewComponentDispatchProps &
+  NewComponentStateProps &
+  NewComponentOwnProps;
```

- **NewComponentOwnProps** is the props your component will recieve through composition
- **NewComponentStateProps** is the state provided to the components's props by Redux
- **NewComponentDispatchProps** is the action dispatchers that the component will have connected to Redux
- **NewComponentProps** is the final type that'll be passed as the component's props



With de types create we'll type the props of the component, it should look somewhat like this:

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { NewComponentProps } from './NewComponent.types';
  
export default function NewComponent(props: NewComponentProps) {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
}

NewComponent.options = {};
```

### Mapping the Props

Our next step is to map in the component's props the state and the dispatchers 
that it should have access.
For this example we'll use the `defaultDomain` of the store and the `defaultAction`
that comes shipped with the starter pack.

```jsx
import React from 'react';
import { Text, View } from 'react-native';
+import { NewComponentProps, NewComponentStateProps, NewComponentDispatchProps } from './NewComponent.types';
+import { StoreState } from '../types';
+import { defaultAction } from '../redux/default/action';

  
export default function NewComponent(props: NewComponentProps) {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
}

NewComponent.options = {};

+const mapStateToProps = (state: StoreState): NewComponentStateProps => ({
+  defaultDomain: state.defaultDomain,
+})

+const mapDispatchToProps: NewComponentDispatchProps = {
+  defaultAction
+}
```

### Connecting the Component

At last, we must import the function `connect` from `react-redux` and pass our 
component through it. This final step is a little confusing to anyone not used to
Redux's generics structure but in resume you must pass to its generics four types in this order:

 *  The state provided to the components's props by Redux.
 *  The action dispatchers that the component will have connected to Redux.
 *  The props the component will recieve through composition
 *  The state stored in Redux's Store.

In the case of our NewComponent:

```ts
connect<NewComponentStateProps, NewComponentDispatchProps, NewComponentOwnProps, StoreState>(
  mapStateToProps,
  mapDispatchToProps
)(NewComponent);
```

In the end our component will have a shape kinda looking like this:

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { NewComponentProps, NewComponentStateProps, NewComponentDispatchProps, NewComponentOwnProps } from './NewComponent.types';
import { StoreState } from '../types';
import { defaultAction } from '../redux/default/action';
import { connect } from 'react-redux';

  
function NewComponent(props: NewComponentProps) {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
}

NewComponent.options = {};

const mapStateToProps = (state: StoreState): NewComponentStateProps => ({
  defaultDomain: state.defaultDomain,
})

const mapDispatchToProps: NewComponentDispatchProps = {
  defaultAction
}

export default connect<NewComponentStateProps, NewComponentDispatchProps, NewComponentOwnProps, StoreState>(
  mapStateToProps,
  mapDispatchToProps
)(NewComponent);
```

At this point the component is fully connected to Redux's state management and 
ready to be used.
