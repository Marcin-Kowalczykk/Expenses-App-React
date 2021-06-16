import React from "react";
import "./App.css";
import { expensesList } from "./Components/Expenses/ExpensesList";
import Expenses from "./Components/Expenses/Expenses";

function App() {
  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
