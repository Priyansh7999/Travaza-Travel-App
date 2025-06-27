import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme/ColorTheme';
import Colors from '../../Theme/Colors';
const Favourite = () => {
   const colorScheme = useTheme();
       return (
           <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
               
           </SafeAreaView>
       );
   }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
})

export default Favourite;
