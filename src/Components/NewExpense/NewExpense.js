import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [btnClick, setBtnClick] = useState(false);

  const saveExpenseDataHandler = (CopyExpenseDataFromForm) => {
    const expenseDataFromNewExpense = {
      ...CopyExpenseDataFromForm,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseDataFromNewExpense);
    setBtnClick(false);
  };

  const showFormHandler = () => {
    setBtnClick(true);
  };

  const hideFormHandler = () => {
     setBtnClick(false);
  };

  if (btnClick) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideFormHandler = {hideFormHandler}/>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={showFormHandler}>Add new expense</button>
    </div>
  );
};

export default NewExpense;

  /*
const showFormHandler = () => {
    setFormContent(
      <div>
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideFormHandler={hideFormHandler}
        />
      </div>
    );
  };

  const hideFormHandler = () => {
    setFormContent(<button onClick={showFormHandler}>Add new Expence</button>);
  };

  let form = <button onClick={showFormHandler}>Add new Expence</button>;
  const [formContent, setFormContent] = useState(form);

  return <div className="new-expense">{formContent}</div>;
};
  */