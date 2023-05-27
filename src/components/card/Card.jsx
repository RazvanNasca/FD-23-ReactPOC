import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, description, stars, forks, owner }) => {
    return (
        <Link /// let the user to navigante to another page
            className="repo-card"
            to={'/' + owner + '/' + title}
        >
            <span className="title">{ title }</span>
            <span className="description">{ description }</span>
            <section className="footer">
                <div>Stars: { stars } </div>
                <div>Forks: { forks } </div>
            </section>
        </Link>
    );
};

export default Card;