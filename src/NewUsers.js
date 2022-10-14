import UsesrForm from "./UsersForm";
import Card from "./Card";
import classes from "./UsersList.module.css"

function NewUsers(props){

    return(
        <Card className = {classes.users}>
        <ul>
            {props.users.map((user) => 
            (<li key = {user.id}>
                {user.name} ({user.age} years old)
            </li>) )}
        </ul>
        </Card>
    )
}

export default NewUsers;