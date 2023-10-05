import React from 'react';
import logo from '../assets/Cat.dancing.png';
import ic_bell from '../assets/ic_bell.svg';
import ic_mailbox from '../assets/ic_mailbox.svg';
import ic_user from '../assets/ic_user.svg';
import ic_chat from '../assets/ic_chat.svg';

export default function Navigation() {
    return (
        <div style={styles.container}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
            <header>
                <div style={styles.navContainer}>
                    <div style={styles.navIconContainer}>
                        <img src={logo} alt="logo" width={191} height={140} />
                        <p style={styles.navHeader}>chachachawithlife</p>
                    </div>
                    <a href='#' style={styles.navItem}>
                        HOME
                    </a>
                    <a href="#" style={styles.navItem}>
                        MY BOOKS
                    </a>
                    <a href="#" style={styles.navItem}>
                        DISCOVER
                    </a>
                    <a href='#' style={styles.navItem}>
                        BROWSER
                    </a>
                    <a href='#' style={styles.navItem}>
                        COMUNITY
                    </a>
                    <input placeholder='Search here' style={styles.navSearch}>
                    </input>
                    <img style={styles.navIcon} width={36} height={36} src={ic_bell}>
                    </img>
                    <img style={styles.navIcon} width={36} height={36} src={ic_mailbox}>
                    </img>
                    <img style={styles.navIcon} width={36} height={36} src={ic_user}>
                    </img>
                    <img style={styles.navIcon} width={36} height={36} src={ic_chat}>
                    </img>




                </div>
            </header>
        </div>
    );
}
const styles = {
    container: {
        backgroundColor: "#F4F1EA",
        
    },
    navContainer: {
        display: "flex", // Added display property
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
        flex: 1,
        border: "#79593170 solid 2px",
        backgroundColor: "#eaddcd",

    },
    navItem: {
        color: "#3f2e19",
        paddingRight: 25,
        fontSize: 16,
        fontFamily: "Montserrat",
        textDecoration: "none",
    },
    tableRow: {
        border: "1px solid green",
    },

    navHeader: {
        fontWeight: "",
        fontFamily: "Dancing Script",
        color: "#3f2e1",
        fontSize: 18,
        marginTop: 0,


    },
    navIconContainer: {
        textAlign: "center",
    },
    navSearch: {
        backgroundColor: "#f9f5f0",
        width: "20%",
        height: 32,
        border: "#79593170 1px solid",
        borderRadius: 3,
        paddingLeft: 8,
    },
    navIcon: {
        backgroundColor: "#79593170",
        borderRadius: "50%",
        marginHorizontal: 20,
        marginLeft: 25,
        padding: 4,

    }
}