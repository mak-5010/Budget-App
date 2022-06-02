import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Date">Date</label>
          <input type="date" min="2019-01-01" max="2024-12-31" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
