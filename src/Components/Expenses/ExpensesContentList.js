import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesContentList.css";

const ExpensesContentList = (props) => {
  // condition for empty list of expenses
  if (props.filteredItems.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No expenses for this year</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          date={element.date}
          amount={element.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesContentList;
