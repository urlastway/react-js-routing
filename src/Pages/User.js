import './user.scss';

export default function User(){
    return (
        <li class="users">
            <a href={`/user/FirstUser`}>FirstUser</a>
            <a href="/user/SecondUser">SecondUser</a>
        </li>
    );
}
