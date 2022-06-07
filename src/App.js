import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.52,
    date: new Date(2021, 2, 22),
  },
  {
    id: "e2",
    title: "TV",
    amount: 2994.52,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 424,
    date: new Date(2023, 11, 9),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onSaveNewExpense={addNewExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
