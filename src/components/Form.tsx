import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface formDataProps {
	name: string;
	age: number;
}

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<formDataProps>();
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
						{...register("name", { required: true, minLength: 3 })}
					/>
					{errors.name?.type === "required" && (
						<p className="text-danger">The Name field is required.</p>
					)}
					{errors.name?.type === "minLength" && (
						<p className="text-danger">
							The name must be at least 3 characters.
						</p>
					)}
				</div>{" "}
				<div className="mb-3">
					<label htmlFor="age" className="form-label">
						Age
					</label>
					<input
						id="age"
						type="number"
						className="form-control"
						{...register("age", { required: true })}
					/>
					{errors.age?.type === "required" && (
						<p className="text-danger">The Age field is required.</p>
					)}
				</div>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;
