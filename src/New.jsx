import React, {useState} from 'react';
import {fetchItem} from "./util";
import Story from "./components/Story";

const New = ({id, title, url, comments}) => {
	const [toggleComments, setToggleComments] = useState(true);
	const [commentBar, setCommentBar] = useState([]);
	return (
		<div className="m-20" id={id}>
			<h1 className="font-bold">{title}</h1>
			<a href={url}>Ссылка на новость</a>
			<br/>
			<button onClick={() => {
				setToggleComments(!toggleComments);
				comments.map(
					comment => fetchItem(comment).then(
						response => {
							console.log(response);
							setCommentBar(response);
						}
					))
			}}>{toggleComments ? 'Показать комментарии' : 'Скрыть комментарии'}</button>
		</div>
	);
};

export default New;