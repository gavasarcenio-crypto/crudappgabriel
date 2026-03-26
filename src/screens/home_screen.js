import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

import styles from "../styles/styles"
import { getMusic, deleteMusic } from "../services/music_service"

export default function HomeScreen({ navigation }) {

    const [music, setMusic] = useState([]);
    async function loadMusic(){
        const data = await getMusic();
        setMusic(data);
    }
    useEffect(()=>{
        loadMusic();
    },[]);


    return(

        <><View style={styles.container}
         />
         <Text style={styles.title}>Musicas</Text>
         <Button
            title="Adicionar Musica"
            onPress={() => navigation.navigate("AddEdit")} />
            <FlatList
                data={music}
                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => (
                    <CardPersonal
                        title={item}
                        navigation={navigation}
                        refresh={loadMusic} 
                        />

                )}
                 />
                 </>
    );
}