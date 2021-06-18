import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseCard from "../UI/ExpenseCard";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeSelectedYearHandler = (selectedYearFromFilter) => {
    console.log(`expenses: ${selectedYearFromFilter}`);
    setSelectedYear(selectedYearFromFilter);
  };

  return (
    <div>
      <ExpenseCard className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeSelectedYear={changeSelectedYearHandler}
        />
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
      </ExpenseCard>
    </div>
  );
};

export default Expenses;
