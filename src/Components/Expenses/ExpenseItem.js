import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseCard from "../UI/ExpenseCard";

const ExpenseItem = ({ title, date, amount }) => {
  return (
    <ExpenseCard className="expense-item">
      <ExpenseDate date = {date}/>
      <section className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${amount}</p>
      </section>
    </ExpenseCard>
  );
};

export default ExpenseItem;
