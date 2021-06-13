import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, date, amount }) => {
  const month = date.toLocaleString("pl-PL", { month: "long" });
  const day = date.toLocaleString("pl-PL", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <section>
        <p>{month}</p>
        <p>{day}</p>
        <p>{year}</p>
      </section>
      <section className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${amount}</p>
      </section>
    </div>
  );
};

export default ExpenseItem;
