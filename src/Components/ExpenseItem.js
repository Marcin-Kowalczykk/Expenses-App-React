import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, date, amount }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date = {date}/>
      <section className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${amount}</p>
      </section>
    </div>
  );
};

export default ExpenseItem;
