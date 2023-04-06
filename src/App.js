import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import reducer from "./redux/Reducers";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
