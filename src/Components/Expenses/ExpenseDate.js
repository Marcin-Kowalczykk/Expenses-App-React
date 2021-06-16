import React from "react";
import "./ExpenseDate.css";
import ExpenseCard from "../UI/ExpenseCard";

const ExpenseDate = ({ date }) => {

  const month = date.toLocaleString("pl-PL", { month: "long" });
  const day = date.toLocaleString("pl-PL", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <ExpenseCard className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div> 
    </ExpenseCard>
  );
};

export default ExpenseDate;
