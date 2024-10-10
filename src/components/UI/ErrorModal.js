import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm}></div>
            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.massage}</p>
                </div>
                <div className="action">
                    <Button onClick={props.onConfirm}>Okay</Button>
                </div>
            </Card>
        </div>
    );
}

export default ErrorModal;