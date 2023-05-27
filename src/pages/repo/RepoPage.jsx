import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';

const RepoPage = () => {

    const { owner, name } = useParams(); /// returns an object of key/value of the dynamic params from the current URL
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get( 
        "https://api.github.com/repos/" + owner + "/" + name, 
        {
            headers: {
                Authorization: "Bearer "
            }
        }
        )
        .then(res => {
            setIsLoading(true);
            console.log("REEEEEEEEE ", res.data);
        })
        .catch(err => {
            console.log("Eror: ", err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [name, owner]);

    return (
        <>
            {
                isLoading 
                ? <span>Loading...</span> 
                :   <> 
                        <Header
                            title={ "Welcome to Framework Design Project!" } 
                            image={ "/js-heroes-bear.png" } 
                        />
                        <div style={{textAlign: "center", fontSize: "20px"}}>
                            <div> <b>Owner:</b> { owner }</div>
                            <div> <b>Name:</b> { name }</div>
                        <Link to={'/'}> Back </Link>
                        </div>
                    </>
            }
        </>
    );

};

export default RepoPage;