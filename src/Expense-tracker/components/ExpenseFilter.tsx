import categories from "../categories";

categories;

interface ExpenseFilterProps {
	onCategoryChange: (category: string) => void;
}

const ExpenseFilter = ({ onCategoryChange }: ExpenseFilterProps) => {
	return (
		<select
			onChange={(e) => onCategoryChange(e.target.value)}
			className="form-select"
		>
			<option value="">All Categories</option>
			{categories.map((category) => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	);
};

export default ExpenseFilter;
