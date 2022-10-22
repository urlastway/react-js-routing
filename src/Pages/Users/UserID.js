import { useParams } from "react-router-dom";


function UserID(){
    
    let {userName} = useParams();

    return (
        <h1>User: {userName}</h1>
    );
}

export default UserID;