import { ReactNode, useState } from "react";
import buttonStyle from "./Button.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface ButtonProps {
	children?: ReactNode;
	color?: "primary" | "secondary" | "danger" | "warning";
	onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
	const [liked, setLiked] = useState(false);

	const toggleLike = () => {
		onClick();
		setLiked(!liked);
	};

	return liked ? (
		<AiFillHeart color="red" onClick={toggleLike} />
	) : (
		<AiOutlineHeart onClick={toggleLike} />
	);
};

export default Button;

// className={"btn btn-" + color}
