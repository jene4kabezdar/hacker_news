import React from 'react';

function addZeroToDate(date) {
	if (date.length === 1) {
		date = '0' + date;
	}
	return date;
}

const Story = ({id, title, score, by, time}) => {
	const date = new Date(time * 1000);
	const normalMonth = date.getMonth() + 1;
	const formatNormalMonth = addZeroToDate(normalMonth.toString());
	const formatDay = addZeroToDate(date.getDate().toString());
	const formatYear = date.getFullYear().toString();
	const formatTime = addZeroToDate(date.getHours().toString()) + ':' + addZeroToDate(date.getMinutes().toString());
	const formatDate = formatDay + '.' + formatNormalMonth + '.' + formatYear;
	const finallyDate = formatDate + ' ' + formatTime;

	return (
		<div className="min-h-40 items-center border rounded-2xl py-2 px-3 leading-tight my-5">
			<div className="text-black font-bold">
				<a href={'#'+ id.toString()}>{title}</a>
			</div>
			<div className="text-gray-400">
				<b>{score}</b> points by {by} {finallyDate}
			</div>
		</div>
	);
};

export default Story;