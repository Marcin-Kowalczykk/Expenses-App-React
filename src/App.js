import React from "react";
import "./App.css";
import { expensesList } from "./Components/Expenses/ExpensesList";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {

  const addExpenseDataHandler = (expenseDataFromNewExpense) => {
    console.log(expenseDataFromNewExpense);
  };

  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
