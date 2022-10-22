import './header.scss';

function Header(){
    return (
        <header className='header'>
            <h1 className='header_name'>Header</h1>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li> 
                    <li>
                        <a href='/user'>User</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;