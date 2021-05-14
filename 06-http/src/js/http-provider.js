const { ResolvePlugin } = require("webpack")

const jokeUrl = 'https://api.chucknorris.io/jokes/random'

fetch(jokeUrl).then(resp => resp.json())
    .then(({id,value}) => {
        console.log(id,value);
    })

const obtenerChiste = async() => {

    try {
        const respuesta = await fetch(jokeUrl);
        if(!resp.ok) return alert('No se pudo realizar la petición');
        return await respuesta.json();
        
        return {icon_url, id, value} = await requestAnimationFrame.json();
        
    } catch (error) {
        throw error;
    }

    
}

export {
    obtenerChiste 
}