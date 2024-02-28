export const introduction={"title":"Introduction",
   "points":[

    "React is a JavaScript library for building user interfaces.",
    "It was developed by Facebook and is often used for building single-page applications and mobile applications.",
    " It uses JSX, a syntax extension that allows you to write your UI components in a syntax that looks similar to XML or HTML.",
    "It uses a Virtual DOM to make updates more efficient. Instead of updating the entire page, it updates only the necessary parts.",
    "It follows a unidirectional data flow. Data moves in one direction, from parent to child components."
   ]
};


export const react_history={"title":"React History",
    "Points1":[" It was first used on Facebook's newsfeed in 2011.",
"React was created by Jordan Walke, a software engineer at Facebook.",
"React was open-sourced by Facebook in 2013."

],
"title1":"Why React was created ?",
"points2":["Back in 2011, the developers at Facebook started to face some issues with code maintenance. As the Facebook Ads app got an increasing number of features, the team needed more people to keep it running flawlessly. The growing number of team-members and app-features slowed them down as a company. Over time, their app became difficult to handle, as they faced a lot of cascading updates.","After a while, engineers at Facebook couldn’t keep up with these cascading updates. Their code demanded an urgent upgrade to become more efficient.","They had the model right, but they needed to do something about user experience. So, Jordan Walke built a prototype that made the process more efficient, and this marks the birth of React js."]


}

export const react_dom={"title":"React DOM",
"points1":["DOM stands for Document Object Model"," It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text."],
"points2":["There are two types of DOM :","1. Real DOM","2. Virtual DOM"],
"title1":"Real DOM :",
"points3":["Real DOM is the actual structure of the webpage."," React Update complete document in the Real DOM."," React DOM is the actual webpage rendered on the browser any changes made directly reflect on the complete webpage.","The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains objects.","The changes and updates to the DOM are fast because of its tree-like structure but re-rendering whole documents makes the DOM Slow.","All UI components need to be re-rendered for every DOM update."],
"example":"Example of DOM:",
"title2":"Virtual DOM :",
"points4":["Virtual DOM is the virtual representation of Real DOM.","React update the state changes in Virtual DOM first and then it syncs with Real DOM.","Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine."," Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions."]


}

export const  react_components={"title":"React Components","points1":[" Components in React are the code blocks representing the UI elements."," These blocks are reusable and independent like functions in JS and are responsible for representing the elements on the Web Page.",'Components in React basically return a piece of JSX code that tells what should be rendered on the screen.'],"title1":"Types of Components :","points2":["1. Functional Components","2. Class Components"],"title3":"Functional Components:","points3":['Functional components are simply javascript functions.','These functions may or may not receive data as parameters.'],"title4":"Class Components:","points4":['The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other.','We can pass data from one class component to another class component. We can use JavaScript ES6 classes to create class-based components in React.','The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Components functions','The component also requires a render() method , this method returns HTML.']

}

export const props={
"title":"Props",
    "points1":["Props is short for properties.","Props are a mechanism for passing data from a parent component to a child component.","Props are a way to communicate and share information between different parts of your React application."],"points2":[" Props are read-only, meaning that a component cannot modify the props it receives.","They are meant to be passed down from parent components to child components to allow for a top-down data flow."]
}

export const props_drilling={

    "title":"Props Drilling",
    "Points1":[" Props drilling in React refers to the process of passing data from a parent component down to its child components through a chain of intermediate components","This is necessary when a child component needs access to certain data that is initially available in a higher-level parent component."],
    "points2":"In this example, the data flows from App to ParentComponent and finally to ChildComponent through props drilling. Keep in mind that in larger applications, using tools like React Context or state management libraries may be more appropriate to avoid excessive props drilling."
}

export const callback_function={
    "title":"Callback Function",
    "points1":['A callback function is a function that is passed as a parameter to another function or component.',' Callback functions are commonly used in React to handle events, asynchronous operations, and to communicate between parent and child components.'],
    "title1":"1. Event Handling:",
    "points2":" Callback functions are often used to handle events in React components. For example, in a button component, you might define an onClick callback function to handle the button click event.",
    "title2":"2. Parent-Child Communication:",
    "points3":"Callback functions are often used for communication between parent and child components. The parent component can pass a callback to the child component, allowing the child to communicate back to the parent."
}

export const lifecycle={
    "title":"Lifecycle of Components",
    "title1":"1. Initialization:",
    "points1":["When a component is created, it goes through an initialization phase.","The constructor is called, where initial state and bindings are set up."],
    "title2":"2. Mounting:",
    "points2":["It is the stage of birth of component","The component is rendered for the first time and mounted to the DOM.","render() method is called to generate the component's UI.","componentDidMount() is invoked after the component is mounted, which is a good place to perform tasks like data fetching, setting up subscriptions, or interacting with the DOM."],
    "title3":"3. Updating:",
    "points3":["Occurs when a component's state or props change.","render() method is called again to reflect the updated state or props.","componentDidUpdate() is invoked after the component is updated, providing an opportunity to perform side effects after a render."],
    "title4":"4. Unmounting:",
    "points4":["It is the stage of death of component","Occurs when a component is removed from the DOM.","componentWillUnmount() is invoked just before the component is unmounted, allowing cleanup tasks like cancelling network requests or removing event listeners."]
}

export const usestate={
    "title":"UseState Hook",
    "points1":["It is a built-in hook that allows functional components to have state variables.","It is a function that takes an initial state as an argument and returns an array with two elements:"],

    "points2":["1. the current state value","2. and a function that lets you update it."]
}

export const useeffect={
    "title":"UseEffect Hook",
    "points":[" It is used for side effects in functional components."," Side effects can include data fetching, subscriptions, manual DOM manipulations, and other operations that are not part of the component's rendering logic."]
}

export const usecontext={
    "title":"UseContext Hook",
    "points":[" It is used to consume values from a React context.","It allows functional components to subscribe to a context and read its current value.","This hook is particularly useful when you have a global state or configuration that you want to share across multiple components without passing props through the entire component tree."]
}

export const usememo={
    "title":"UseMemo Hook",
    "points":["It is used to memoize the result of a computation, so that the computation is only executed when necessary."," This can help optimize performance by avoiding unnecessary calculations or expensive operations."],
    "points2":"By using useMemo, the expensive computation is only performed when the data array changes. This can help optimize the performance of your application by avoiding unnecessary calculations. Keep in mind that useMemo is beneficial in scenarios where the computation is expensive, and the result does not need to be recalculated on every render."

}

export const useref={
    "title":"UseRef Hook",
    "points":[" It is used to create mutable object references.","It's commonly used for accessing and interacting with the DOM, managing focus, and persisting values across renders without causing re-renders." ],
    "points2":"By using useRef, we can easily access and manipulate the DOM elements without causing unnecessary re-renders. Keep in mind that the current property of a useRef object always points to the latest value, even if the component re-renders."
}

export const redux={
"title":"Redux-Toolkit",
"points":'Redux Toolkit is the official, opinionated toolset for efficient Redux development. It is designed to simplify common Redux use cases, reduce boilerplate code, and improve developer experience. Redux Toolkit includes several utilities and packages that work well together, making it easier to build scalable and maintainable Redux applications.',
"title2":"Install Redux Toolkit and React-Redux",
"title3":"Create a Redux Store",
"points3":"Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:",
"title4":"Provide the Redux Store to React",
"points4":"Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:",
"title5":"Create a Redux State Slice",
"points5":"Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.",
"title6":"Add Slice Reducers to the Store",
"points6":"Next, we need to import the reducer function from the counter slice and add it to our store.",
"title7":"Use Redux State and Actions in React Components",
"points7":"Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch.",
"points8":"Now, any time you click the 'Increment' and 'Decrement' buttons:",
"poinst9":["The corresponding Redux action will be dispatched to the store","The counter slice reducer will see the actions and update its state","The <Counter> component will see the new state value from the store and re-render itself with the new data"]
}


