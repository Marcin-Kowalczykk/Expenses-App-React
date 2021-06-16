import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form action="">
      <section className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
        <div className="new-expense-actions">
          <button type="subbmit">Add</button>
        </div>
      </section>
    </form>
  );
};
export default ExpenseForm;
