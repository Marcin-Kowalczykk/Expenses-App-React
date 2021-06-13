import React from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";

const NewExpensesList = ({items}) => {
  return (
    <section className="expenses">
      <ExpenseItem
        title={items[0].title}
        date={items[0].date}
        amount={items[0].amount}
      />
      <ExpenseItem
        title={items[1].title}
        date={items[1].date}
        amount={items[1].amount}
      />
      <ExpenseItem
        title={items[2].title}
        date={items[2].date}
        amount={items[2].amount}
      />
      <ExpenseItem
        title={items[3].title}
        date={items[3].date}
        amount={items[3].amount}
      />
    </section>
  );
};

export default NewExpensesList;
