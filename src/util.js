export const URI = 'https://hacker-news.firebaseio.com/v0/';

export function fetchItem(id) {
	return fetch(`${URI}item/${id}.json?print=pretty`)
		.then(res => {
			return res.json();
		});
}