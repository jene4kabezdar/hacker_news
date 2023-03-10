import React from 'react';
import {formatTime} from "../util";



const Story = ({title, score, by, time}) => {
	const date = formatTime(time);

	return (
		<div className="min-h-40 items-center border rounded-2xl py-2 px-3 leading-tight my-5">
			<div className="text-black font-bold">
				{title}
			</div>
			<div className="text-gray-400">
				<b>{score}</b> points by {by} {date}
			</div>
		</div>
	);
};

export default Story;