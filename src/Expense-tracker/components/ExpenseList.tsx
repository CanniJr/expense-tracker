interface Expense {
	id: number;
	category: string;
	amount: number;
	description: string;
}

interface ExpenseListProps {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
	if (expenses.length === 0) return null;
	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th>Description</th>
					<th>Amount</th>
					<th>Category</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{expenses.map((expense) => (
					<tr key={expense.id}>
						<td>{expense.description}</td>
						<td>{expense.amount}</td>
						<td>{expense.category}</td>
						<td>
							<button
								onClick={(id) => onDelete(expense.id)}
								className="btn btn-outline-danger"
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td>
						<strong>Total</strong>
					</td>
					<td>
						<strong>
							${" "}
							{expenses
								.reduce((acc, expense) => acc + expense.amount, 0)
								.toFixed(2)}
						</strong>
					</td>
					<td></td>
					<td></td>
				</tr>
			</tfoot>
		</table>
	);
};

export default ExpenseList;
