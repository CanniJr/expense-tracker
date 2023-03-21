import { useState } from "react";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter";
import ExpenseList from "./Expense-tracker/components/ExpenseList";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm";
import categories from "./Expense-tracker/categories";

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: 1,
			description: "aaa",
			amount: 5,
			category: "Grocery",
		},
		{ id: 2, description: "bbb", amount: 5, category: "Grocery" },
		{ id: 3, description: "ccc", amount: 5, category: "Utilities" },
		{ id: 4, description: "ddd", amount: 5, category: "Grocery" },
		{ id: 5, description: "rrr", amount: 5, category: "Entertainment" },
	]);
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleDelete = (id: number) => {
		setExpenses(expenses.filter((item) => item.id !== id));
	};

	const filteredExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	return (
		<div>
			<div className="mb-5">
				<ExpenseForm />
			</div>
			<div className="mb-3">
				<ExpenseFilter
					onCategoryChange={(category) => setSelectedCategory(category)}
				/>
			</div>
			<ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
		</div>
	);
}

export default App;
