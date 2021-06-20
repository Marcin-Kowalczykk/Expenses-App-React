import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  
  const saveExpenseDataHandler = (CopyExpenseDataFromForm) => {
    const expenseDataFromNewExpense = {
      ...CopyExpenseDataFromForm,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseDataFromNewExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
