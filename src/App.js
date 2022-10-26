import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import New from './New';

const API_URL = 'http://api.mediastack.com/v1/news?access_key=3f9f96d81b98a96eb58ab5bf0b58d143'

// http://api.mediastack.com/v1/news?access_key=3f9f96d81b98a96eb58ab5bf0b58d143

const App = () => {

    const [noticias, setNoticias] = useState([]);
    const [busqueda, setBusqueda] = useState([]);

    const searchNews = async(keyword) => {
        const result = await fetch(`${API_URL}&keywords=${keyword}`);
        const dat = await result.json();
        const data = dat.data;

        setNoticias(data)
    }

    useEffect(() => {
    },[])

    return (
        <div className='app'>
            <div className="container">
                <h1 className='head'>Busca tu noticia:</h1>
                <input type="search" name="keyword" className='searchInput inputs' onChange={((e) => setBusqueda(e.target.value))}/>
                <input type="submit" value="Buscar" className='inputs' onClick={() => searchNews(busqueda)} />

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
