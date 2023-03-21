import { useState } from "react";
import ExpenseList from "./Expense-tracker/components/ExpenseList";

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: 1,
			description: "aaa",
			amount: 5,
			category: "Groceries",
		},
		{ id: 2, description: "bbb", amount: 5, category: "Groceries" },
		{ id: 3, description: "ccc", amount: 5, category: "Groceries" },
		{ id: 4, description: "ddd", amount: 5, category: "Groceries" },
		{ id: 5, description: "rrr", amount: 5, category: "Groceries" },
	]);

	const handleDelete = (id: number) => {
		setExpenses(expenses.filter((item) => item.id !== id));
	};

	return (
		<div>
			<ExpenseList expenses={expenses} onDelete={handleDelete} />
		</div>
	);
}

export default App;
