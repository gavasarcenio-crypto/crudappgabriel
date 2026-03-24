import { API_URL } from "./config_api";

export async function getMusic(){

    const response = await fetch(`${API_URL}/music`);
    const data = await response.json();
return data;
}

export async function createMusic(music){
    const response = await fetch(`${API_URL}/music`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(music) });
    return response.json();
}

export async function updateMusic(id, music){
    const response = await fetch(`${API_URL}/music/${id}`, {
        method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(music) });
    return response.json();
    }

    export async function deleteMusic(id){
        await fetch(`${API_URL}/music/${id}`,{
        method: "DELETE"
        });
    }