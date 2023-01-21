import React from 'react';
import {formatTime} from "../util";

const Comment = ({author, text, time}) => {
	const date = formatTime(time);

	return (
		<div className="min-h-40 items-center border rounded-2xl py-2 px-3 leading-tight my-5">
			<div className="text-black font-bold">
				{author}
			</div>
			<p>{text}</p>
			<div className="text-gray-400">
				{date}
			</div>
		</div>
	);
};

export default Comment;