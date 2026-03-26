function CardPersonal({ title, navigation, refresh }) {
    return (
        <View style={styles.card}>
            <View> 
                <Text style={styles.name}>
                    {item.nome_musica}
                </Text>
                <Text style={styles.banda}>
                    {item.artista}
                </Text>

            </View>

            <View>

                <Button 
                title="Editar"
                onPress={()=> navigation.navigate("AddEdit", { music:item })}
                />
                <Button 
                title="Deletar"
                onPress={async()=>{
                    await deleteMusic(item.id);
                    refresh();
                }}
                />
            </View>
        </View>
    );
}