- make sure your list is the same regardless of the order of actions (sort, reducing words length...);
- use `localeCompare()` for alphabetical sorting;
- don't interact with DOM directly, use React as much as possible;
- make sure you described objects in propTypes;
- don't generate key on render ([here](https://medium.com/blackrock-engineering/5-common-mistakes-with-keys-in-react-b86e82020052) is why)
- follow [these](https://medium.com/javascript-in-plain-english/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364) naming conventions for onClicks
- check out what can go wrong if you pass initialize your state with props ([here](https://stackoverflow.com/a/50403930), [here](https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state) and [here](https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state))
- \* don't use setState several times in one function call (onClick) (it's better for clarity of the code);

\* - optional recommendation

