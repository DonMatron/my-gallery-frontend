import './TagButton.css';

function TagButton(props) {
    return (
        <div className="TagButtonSelected">
            {props.text}
        </div>
    );
}

export default TagButton;