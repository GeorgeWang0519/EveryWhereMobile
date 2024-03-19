import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer:{

    },
    navigateContainer:{

    },
    searchBar:{
        
    }
});
const Header : React.FC=() => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.navigateContainer}></View>
            <View style={styles.searchBar}></View>
        </View>
    )

}