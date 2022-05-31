import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started !</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
