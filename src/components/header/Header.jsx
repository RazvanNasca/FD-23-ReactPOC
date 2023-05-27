import './Header.css';

const Header = ({ title, image }) => {
    return (
        <header>
            <div className="content-wrapper">
                <h1>{ title }</h1>
            </div>
            <img className="bear" src={ image } alt="bear"/>
        </header>
    );
};

export default Header;