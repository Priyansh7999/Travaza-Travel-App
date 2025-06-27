import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../Theme/ColorTheme';
import Colors from '../Theme/Colors';
const TripCategory = () => {
    const colorScheme = useTheme();
    const data = [
        {
            id: 1,
            name: "Mountains",
            image: "https://cdn-icons-png.flaticon.com/512/9140/9140319.png"
        },
        {
            id: 2,
            name: "Beach",
            image: "https://cdn-icons-png.flaticon.com/512/8983/8983248.png"
        },
        {
            id: 3,
            name: "Desert",
            image: "https://cdn-icons-png.flaticon.com/512/740/740803.png"
        },
        {
            id: 4,
            name: "Camping",
            image: "https://cdn-icons-png.flaticon.com/512/1020/1020535.png"
        }
    ]
    return (
        <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
            {
                data.map((item, index) => (
                    <View key={index} style={{borderRadius: 10}}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                        </View>
                        <Text style={[styles.text, { color: colorScheme.text }]} >{item.name}</Text>
                    </View>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        gap: 10,
        borderRadius: 10,
    },
    imageContainer: {
        width: 70,
        height: 65,
        borderWidth: 0.5,
        borderColor: Colors.textSecondary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '50%',
        height: '50%',
        resizeMode: 'cover',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lexend-Light',
        textAlign: 'center'
    },
})

export default TripCategory;
