import classes from "./ErrorModal.module.css"
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props){
    return(
    <div className= {classes.backdrop} onClick = {props.onComfirm}>
    <Card className = {classes.modal}>
        <header className= {classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className= {classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className= {classes.action}>
            <Button className = {classes.button} onClick={props.onComfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
    )
}

export default ErrorModal;