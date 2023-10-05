import React from "react";



export default function HomeScreen(){
    return(
        <div style={styles.container}>
            <img style={styles.itemImg}>
                
            </img>
        <p>Title

        </p>
        </div>

    );
}

const styles= {
    itemImg: {
        width: 90,
        height: 120,
        backgroundColor: "black",
        
    },
    container:{
        backgroundColor: "white",
        border:" 1px solid #59793170",
        width: 500,
        
    }


}