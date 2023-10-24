import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    box:{
        width: 250,
        height: 200,
        backgroundColor: "#353535",
        alignItems:"center",
        borderRadius: 50,
        marginTop:50
    },
    resultImc: {
        flex:1,
        borderRadius: 50,
        alignItems: "center",
        color: "#ff0043",
        fontWeight: "bold",
        fontSize: 48,
        marginTop:10
    },
    information: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold",
        alignItems: "center",
        paddingLeft: 20,
        marginTop:20
    },
    shareBox: {
        width:"100%",
        alignItems:"center",
        marginBottom: 30,
        marginTop: 30,
        paddingLeft: 20,
    },
    share:{
        borderRadius: 50,
        backgroundColor: "#1877f2",
        paddingBottom: 5,
        paddingTop: 5,
    },
    textShare: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30
    }

  });

  export default styles