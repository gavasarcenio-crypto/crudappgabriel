import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import styles from "../styles/styles";

import { createMusic, updateMusic } from "../services/music_service";

export default function AddEditScreen({ route, navigation}){
    const music = route.params?.music;

    const [nome_musica, setNomeMusica] = useState(music ? music.nome_musica : "");
    const [artista, setArtista] = useState(music ? music.artista : "");

    async function saveMusic(){

        const musicData = { nome_musica, artista };
        if(music){

            await updateMusic(music.id, musicData);
        }else{

            await createMusic(musicData);
        }
        navigation.goBack();
    }

    return(

        <View style={styles.container}>

            <TextInput
            placeholder="Nome da Musica"
            value={nome_musica}
            onChangeText={setNomeMusica}
            />
        
            <TextInput
            placeholder="Artista"
            value={artista}
            onChangeText={setArtista}
            />

            <Button 
            title="Salvar"
            onPress={saveMusic}
            />

            <Button
            title="Cancelar"
            onPress={()=> navigation.goBack()}
            />

        </View>
    );
}