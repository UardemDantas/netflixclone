const API_KEY='34e9283b782a6065aeae6d8419f656e3';

const categories = [
    {
        name:'trending',
        title:'Em alta',
        path:`/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name:'netflisOriginals',
        title:'Originais Netflix',
        path:`/discover/tv?api_key=${API_KEY}&with_network=213`
    },
    {
        name:'topRated',
        title:'Populares',
        path:`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name:'comedy',
        title:'Comedias',
        path:`/discover/tv?api_key=${API_KEY}&with_genres=35`
    },
    {
        name:'romances',
        title:'Romances',
        path:`/discover/tv?api_key=${API_KEY}&with_genres=10749`
    },
    {
        name:'documentaries',
        title:'Documentários',
        path:`/discover/tv?api_key=${API_KEY}&with_genres=99`
    },
    {
        name:'mystery',
        title:'Misterio',
        path:`/discover/tv?api_key=${API_KEY}&with_genres=9648`
    },
    {
        name:'drama',
        title:'Drama',
        path:`/discover/tv?api_key=${API_KEY}&with_genres=18`
    },
    
];

export const getMovies = async(path) =>{
    try {
        let url = `https://api.themoviedb.org/3${path}`
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log('error getMovies', error);
    }
}

export default categories;