1. What problem does the context API help solve?

    With Context API, an app built on a massive scale can be designed with state at a top level
    for reading and writing into it from the children components that need it. Helps to keep 
    from having to pass a state variable and its setters from the parent down to each child, grandchild, etc...
    until reaching the component that needs it. This way it can be called from the component itself without being
    passed through props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    In redux, the store is used to hold the state of an application, it can be accessed by the reducer functions throughout each component.

    the reducers are functions that provide a logic to be done on the state for reading and writing into the state using the actions provided.

    The actions make the logic for what the user wants to do with the state value, whether it is to add, remove, edit, or whatever change.

    This makes the state to be accessible through a single point, which in this case is the store, which is why it is known as the single source of truth, since 
    it is the only way to get the value of the state and change it if need to

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application State is the state that is set to be accessible throughout the App at each component needed using either 
    redux state management or context api.

    Component State is the state created and used within a component and passed to a child component via props

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?



5. What is your favorite state management system you've learned and this sprint? Please explain why!

    So far, I think I prefer using Redux state management system. Though Context API allows for using state and its setters without props, 
    I still have to create the functions within the components adding more lines to the file.

    With redux state mananagement, I can create the actions in a separate file and the reducer and state on another for better organization
    and just call it where needed.
