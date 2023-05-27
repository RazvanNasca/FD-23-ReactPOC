import { useState } from 'react';
import './Search.css';

const Search = ({ buttonName, placeHolder, onClick }) => {

    const [inputValue, setinputValue] = useState('');

    const handleChange = event => {
        setinputValue(event.target.value);
    };
    
    return (
        <form 
            className="search-form" 
            onSubmit={(event) =>  {
                        event.preventDefault();
                        onClick(inputValue)
                    }}
        >
            <input 
                className="input" 
                placeholder={ placeHolder }
                onChange={ handleChange }
            />
            <button className="button">
                { buttonName }
            </button>
        </form>
    );
};

export default Search;

