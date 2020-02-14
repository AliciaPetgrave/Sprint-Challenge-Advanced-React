- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components allow us to use the methods that tap into the Component Lifecycle which give us more control over how our components work.

- [ ] Name three lifecycle methods and their purposes.

render() - handles the rendering of the component to the UI

componentDidMount() - called when the component is mounted and ready. Use to initiate API calls and allows the use of setState.

componentDidUpdate() - invoked as soon as the updating happens. Used to update the DOM in response to prop or state changes.

- [ ] What is the purpose of a custom hook?

Custom hooks are regular functions that can use other hooks within it and contain stateful (or non stateful) logic that are reusable in multiple components/applications

- [ ] Why is it important to test our apps?

It's important to test our apps to avoid having bugs in production. It also makes sure that the code does what we want and that the content displays correctly on the DOM.