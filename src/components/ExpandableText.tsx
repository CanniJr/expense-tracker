import { useState } from "react";

interface ExpandableTextProps {
	children: string;
	maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
	const [expand, setExpand] = useState(false);
	if (children.length <= maxChars) return <p>{children}</p>;

	const text = expand ? children : children.substring(0, maxChars) + "...";
	return (
		<div>
			{text}
			<button onClick={() => setExpand(!expand)}>
				{expand ? "Less" : "More"}
			</button>
		</div>
	);
};

export default ExpandableText;
