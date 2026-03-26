import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1, 
        padding:20,
        backgroundColor:"#f5f5f5"
    },

    title:{
        fontSize:22,
        textAlign:"center", 
        marginBotton:20
    },
    card:{
        flexDirection: "row",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        padding:10,
        marginBotton:10,
        borderRadius:5
    },
    name:{
        fontSize:14
    },
    banda:{
        fontSize:10
    },
    button:{
        padding:10,
        backgroundColor:"#4CAF50",
        borderRadius:5
    }
});