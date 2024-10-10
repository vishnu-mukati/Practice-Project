import Card from "../UI/Card";
import "./UserList.css";

const UserList = (props) => {
    return (
        <Card className="users">
            <ul >
                {props.Users.map((user, index) => {
                    return <li key={index}>{user.name} ({user.age}year old)</li>
                })}
            </ul>
        </Card>
    );
}

export default UserList;