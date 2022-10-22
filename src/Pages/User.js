import './user.scss';


const users = [
        {
        name: 'Marco',
        id: 1,
        isFranco: false,
        },
        {
        name: 'Ivan',
        id: 2,
        isFranco: false,
        },
        {
        name: 'Franco',
        id: 3,
        isFranco: true,
        }
    ];


export default function User(){

    const listUser = users.map(user =>
        <li key = {user.id} style={{
            color: user.isFranco ? 'magenta' : 'darkgreen'
          }}>
            {user.name}
        </li>
    )

    function handelClick(){
        console.log("utente");
    }

    return (
        <>
            <li class="users">
                <a href="/user/FirstUser">FirstUser</a>
                <a href="/user/SecondUser">SecondUser</a>           
            </li>
            <h1>La lista degli utenti:</h1>
            {listUser}
            <button onClick={handelClick}>Click me!</button>
        </>
    );
}
