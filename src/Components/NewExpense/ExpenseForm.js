import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const changeTitleHandler = (event) => {
    setSelectedTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setSelectedAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setSelectedDate(event.target.value);
  };
  const addFormHandler = (event) => {
    event.preventDefault();
    const expenseDataFromForm = {
      title: selectedTitle,
      amount: +selectedAmount,
      date: new Date(selectedDate),
    };
    props.onSaveExpenseData(expenseDataFromForm); // wywoładnie dla rodzica
    setSelectedTitle("");
    setSelectedAmount("");
    setSelectedDate("");
  };

  return (
    <form action="" onSubmit={addFormHandler}>
      <section className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={selectedTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={selectedAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={selectedDate}
            onChange={changeDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="subbmit">Add new Expence</button>
          <button type="button" onClick={props.onHideFormHandler}>
            Cancel
          </button>
        </div>
      </section>
    </form>
  );
};
export default ExpenseForm;
