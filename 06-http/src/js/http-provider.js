// const { ResolvePlugin } = require("webpack")

import { AutomaticPrefetchPlugin } from "webpack";

const jokeUrl = 'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'autwc6pa';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dx0pryfzn/upload';

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

const obtenerUsuarios = async() => {
    const resp = await fetch(urlUsuarios);
    const {data:usuarios} = await resp.json();//cambia nombre data por usuarios

    return usuarios;
}


const subirImagen = async (achivoSubir) => {
    const formData = new formData(); //resultado de formulario html pero referenciado en html
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if(resp.ok) {
            const cloudResp = await resp.json();
            
             return await cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }

}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}