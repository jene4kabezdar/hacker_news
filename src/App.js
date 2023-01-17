import Story from './components/Story';
import {useEffect, useState} from "react";
import SelectSort from "./components/SelectSort";
import New from "./New";
import {URI, fetchItem} from "./util";

function fetchItems(ids) {
    return Promise.all(
        ids.slice(0, 30).map(
            id => fetchItem(id)
        )
    )
}

function App() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch(`${URI}topstories.json?print=pretty`)
            .then(res => {
                return res.json();
            })
            .then(ids => {
                return fetchItems(ids);
            })
            .then(response => {
                setStories(response);
            })
            .catch(() => {})
    }, []);

    const storiesPanel = stories.map(
        story => <Story key={story.id} id={story.id} title={story.title} score={story.score} by={story.by} time={story.time}/>
    )

    const newsPanel = stories.map(
        elem => <New key={elem.id} id={elem.id} title={elem.title} url={elem.url} comments={elem.kids}/>
    )

    function sortMainPanel(sort) {
        switch (sort){
            case 'score-high':
                setStories([...stories].sort(
                    (a, b) => a.score < b.score ? 1 : -1
                ));
                break;
            case 'score-low':
                setStories([...stories].sort(
                    (a, b) => a.score > b.score ? 1 : -1
                ));
                break;
            case 'date-new':
                setStories([...stories].sort(
                    (a, b) => a.time < b.time ? 1 : -1
                ));
                break;
            case 'date-old':
                setStories([...stories].sort(
                    (a, b) => a.time > b.time ? 1 : -1
                ));
                break;
            default:
                setStories(stories);
        }
    }

    return (
        <div className="flex justify-center items-center py-2 px-3 leading-tight my-5">
            <div className="w-1/2 items-center mt-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl">Hacker News</h1>
                    <SelectSort changeValue={event => {sortMainPanel(event.target.value)}}/>
                </div>
                {storiesPanel}
                {newsPanel}
            </div>
        </div>
    );
}

export default App;
