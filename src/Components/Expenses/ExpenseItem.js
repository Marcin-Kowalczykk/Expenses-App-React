import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseCard from "../UI/ExpenseCard";

const ExpenseItem = ({ title, date, amount }) => {
  // const [text, setText] = useState(title);

  // const clickHandler = () => {
  //   setText("update");
  // };

  return (
    <ExpenseCard className="expense-item">
      <ExpenseDate date={date} />
      <section className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${amount}</p>
        {/* <button onClick={clickHandler}>Click me</button> */}
      </section>
    </ExpenseCard>
  );
};

export default ExpenseItem;
