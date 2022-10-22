import { useParams } from "react-router-dom";

function UserID(){    
    
    let {userName} = useParams();

    return (
        <div>
            <h1>User: {userName}</h1>
        </div>
    );
}

export default UserID;