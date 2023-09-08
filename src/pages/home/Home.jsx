import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from '../../components/search/Search';
import Header from '../../components/header/Header';
import CardList from '../../components/cardList/CardList';

import "./Home.css";

const Home = () => {
    const [repos, setRepos] = useState([]); /// allow to add state to functional components
    const [isLoading, setIsLoading] = useState(false); /// some default values
    const apiKey = process.env.REACT_APP_GIT_KEY_AUTH;

    useEffect(() => {
        console.log("AAAAAA ", process.env);
        axios.get( /// axios is a library used to communicate with BE
        "https://api.github.com/search/repositories?q=stars:>10000", 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }
        )
        .then(res => {
            setIsLoading(true);
            let newRepos = [];
            res?.data?.items.forEach(item => {
                newRepos.push(
                    { 
                        full_name: item.full_name,  
                        name: item.name,
                        description: item.description,
                        stars: item.stargazers_count,
                        forks: item.forks_count
                    }
                )
            })
            setRepos(newRepos);
        })
        .catch(err => {
            console.log("Eror: ", err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [apiKey]);

    const onClick = (value) => {
        setIsLoading(true);
        axios.get(
        "https://api.github.com/search/repositories?q=" + value, 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }
        )
        .then(res => {
            let newRepos = [];
            res?.data?.items.forEach(item => {
                newRepos.push(
                    { 
                        full_name: item.full_name,  
                        name: item.name,
                        description: item.description,
                        stars: item.stargazers_count,
                        forks: item.forks_count,
                        owner: item.owner.login
                    }
                )
            })
            setRepos(newRepos);
        })
        .catch(err => {
            console.log("Eror: ", err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    return (
        <>
        <Header
            title={ "Welcome to Framework Design Project!" } 
            image={ "/js-heroes-bear.png" } 
        />

        <main>

            <Search 
                buttonName={ "Search" } 
                placeHolder={ "Search a repo..." }
                onClick={ onClick }
            />
            
            { 
                isLoading
                ? <span>Loading...</span> 
                : <CardList cardList={ repos }/>
            }

        </main>
        </>
    );
};

export default Home;