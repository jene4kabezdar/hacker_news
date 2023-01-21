export const URI = 'https://hacker-news.firebaseio.com/v0/';

export function fetchItem(id) {
	return fetch(`${URI}item/${id}.json?print=pretty`)
		.then(res => {
			return res.json();
		});
}

function addZeroToDate(date) {
	if (date.length === 1) {
		date = '0' + date;
	}
	return date;
}

export function formatTime(time) {
	const date = new Date(time * 1000);
	const normalMonth = date.getMonth() + 1;
	const formatNormalMonth = addZeroToDate(normalMonth.toString());
	const formatDay = addZeroToDate(date.getDate().toString());
	const formatYear = date.getFullYear().toString();
	const formatTime = addZeroToDate(date.getHours().toString()) + ':' + addZeroToDate(date.getMinutes().toString());
	const formatDate = formatDay + '.' + formatNormalMonth + '.' + formatYear;
	return formatDate + ' ' + formatTime;
}