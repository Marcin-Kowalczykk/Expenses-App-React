import React, { useState } from "react";
import "./App.css";
import { exampleList } from "./Components/Expenses/ExampleList";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const [expensesList, setExpenceList] = useState(exampleList);

  const addExpenseDataHandler = (expenseDataFromNewExpense) => {
    console.log(expenseDataFromNewExpense);
    setExpenceList((previousExpense) => {
      return [expenseDataFromNewExpense, ...previousExpense];
    });
  };

  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
