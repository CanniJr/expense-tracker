interface ExpenseListProps {
	expenses: string; // will have it's own interface
}

const ExpenseList = () => {
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
		</table>
	);
};

export default ExpenseList;
