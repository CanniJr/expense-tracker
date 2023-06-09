import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Must be at least 3 character(s)" })
		.max(50),
	amount: z
		.number({ invalid_type_error: "Amount required" })
		.min(1)
		.max(100_000),
	category: z.enum(categories, {
		errorMap: () => ({ message: "Pick a category" }),
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
	onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
	return (
		<form
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input
					{...register("description")}
					id="description"
					type="text"
					className="form-control"
				/>
				{errors.description && (
					<p className="text-danger">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true })}
					id="amount"
					type="number"
					className="form-control"
				/>
				{errors.amount && (
					<p className="text-danger">{errors.amount.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="form-label">
					Category
				</label>
				<select {...register("category")} className="form-select">
					<option></option>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="text-danger">{errors.category.message}</p>
				)}
			</div>
			<button className="btn btn-primary mb-3">Submit</button>
		</form>
	);
};

export default ExpenseForm;
