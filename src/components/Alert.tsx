import { ReactNode, useState } from "react";

interface AlertProps {
	children: ReactNode;
	showAlert: boolean;
	onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
	return (
		<div className="alert alert-primary alert-dismissible">
			{children}
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				onClick={onClose}
			/>
		</div>
	);
};

export default Alert;
