import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <section>
        <p>{props.date.toISOString()}</p>
      </section>
      <section className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </section>
    </div>
  );
};

export default ExpenseItem;
