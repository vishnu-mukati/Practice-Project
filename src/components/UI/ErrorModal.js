import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";


const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
    return (
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
    );
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay
                title={props.title}
                massage={props.massage}
                onConfirm={props.onConfirm}
            />,
                document.getElementById("overlay-root"))}
        </React.Fragment>
    );
}

export default ErrorModal;