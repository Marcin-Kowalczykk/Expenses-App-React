import React, { useState } from "react";

import "./Expenses.css";
import ExpensesContentList from "./ExpensesContentList";
import ExpenseCard from "../UI/ExpenseCard";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeSelectedYearHandler = (selectedYearFromFilter) => {
    console.log(`expenses: ${selectedYearFromFilter}`);
    setSelectedYear(selectedYearFromFilter);
  };

  const filteredExpenses = items.filter((element) => {
    return element.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <ExpenseCard className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeSelectedYear={changeSelectedYearHandler}
        />
        <ExpensesContentList filteredItems={filteredExpenses} />
      </ExpenseCard>
    </div>
  );
};

export default Expenses;
