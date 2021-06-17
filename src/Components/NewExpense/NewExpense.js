import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  
  const saveExpenseDataHandler = (CopyExpenseDataFromForm) => {
    const expenseDataFromForm = {
      ...CopyExpenseDataFromForm,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseDataFromForm);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
