import React from "react";
import "./App.css";
import { expensesList } from "./Components/ExpensesList";
import NewExpensesList from "./Components/Expenses";

function App() {
  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <NewExpensesList items={expensesList} />
    </div>
  );
}

export default App;
