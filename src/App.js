import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import New from './New';

const API_URL = 'http://api.mediastack.com/v1/news?access_key=3f9f96d81b98a96eb58ab5bf0b58d143'

// http://api.mediastack.com/v1/news?access_key=3f9f96d81b98a96eb58ab5bf0b58d143

const App = () => {

    const [noticias, setNoticias] = useState([]);

    const searchNews = async(keyword) => {
        const result = await fetch(`${API_URL}&keywords=${keyword}`);
        const dat = await result.json();
        const data = dat.data;

        setNoticias(data)
    }

    useEffect(() => {
        searchNews('data');
    },[])

    return (
        <div className='app'>
            <div className="container">
                {
                    noticias.map((noticia) => {
                        return <New new={noticia} />
                    })
                }
            </div>
        </div>
    );
}

export default App;
