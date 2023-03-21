import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// interface formDataProps {
// 	name: string;
// 	age: number;
// }

const formSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Name must contain at least 3 characters" }),
	age: z.number({ invalid_type_error: "Age field is required" }).min(13),
});

type formDataProps = z.infer<typeof formSchema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<formDataProps>({ resolver: zodResolver(formSchema) });
	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				{" "}
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						id="name"
						type="text"
						className="form-control"
						{...register("name")}
					/>
					{errors.name && <p className="text-danger">{errors.name.message}</p>}
				</div>{" "}
				<div className="mb-3">
					<label htmlFor="age" className="form-label">
						Age
					</label>
					<input
						id="age"
						type="number"
						className="form-control"
						{...register("age", { valueAsNumber: true })}
					/>
					{errors.age && <p className="text-danger">{errors.age.message}</p>}
				</div>
				<button disabled={!isValid} className="btn btn-primary" type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;
