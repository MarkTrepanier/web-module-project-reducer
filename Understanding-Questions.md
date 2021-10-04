# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The 1 triggers handleAddClick
* handleAddClick triggers dispatch, with the addOne action as a parameter, from useReducer
* the addOne action returns 'ADD_ONE' as a param for the reducer switch.
* The first case in the switch triggers
* a return, changing state, is brought back to app.js
* state.total is changed while the rest of state remains

...

* TotalDisplay shows the total plus 1.
