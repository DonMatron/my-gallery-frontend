import './TagSelector.css';
import TagButton from '../TagButton/TagButton';

function TagSelector() {
    const tags = ['Skies', 'Street', 'Travel', 'Landscape', 'Macro', 'Stars']

    return (
        <div className="">

            {/* Make radio functionality with useEffect?*/}
            {/* Implement radio buttons*/}

            {/* <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked={true}/>
                <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
                <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
            </div> */}

            {/* {tags.map((tag) => (
                <TagButton text={tag}/>
            ))} */}
        </div>
    );
}

export default TagSelector;