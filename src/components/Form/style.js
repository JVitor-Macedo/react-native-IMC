import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height:"85%",
        bottom:0,
        backgroundColor:"#202020",
        alignItems:"center",
        marginTop:20,
        borderRadius:60,
    },
    form: {
        width: "100%",
        height:"auto",
        marginTop: 50,
        padding: 10,
    },
    formLabel: {
        color:"#ffffff",
        fontSize: 18,
        paddingLeft: 20,

    },
    formInput:{
        width:"90%",
        height:60,
        borderRadius:15,
        backgroundColor:"#ffffff",
        margin:12,
        paddingLeft:10,

    },
    button:{
        borderRadius:50,
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    erroMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    },
    boxResultImc:{
        alignItems:"center",   
        width: "100%",
        height:"50%",
    }
  });

  export default styles