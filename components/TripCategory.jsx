import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../Theme/ColorTheme';
import Colors from '../Theme/Colors';
import { router } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
const TripCategory = () => {
    const colorScheme = useTheme();
    const data = [
        {
            id: 1,
            name: "Mountain",
            image: "https://cdn-icons-png.flaticon.com/512/11598/11598103.png"
        },
        {
            id: 2,
            name: "Beach",
            image: "https://cdn-icons-png.flaticon.com/512/8983/8983248.png"
        },
        {
            id: 3,
            name: "Desert",
            image: "https://cdn-icons-png.flaticon.com/512/12583/12583448.png"
        },
        {
            id: 4,
            name: "Camping",
            image: "https://cdn-icons-png.flaticon.com/512/4943/4943269.png"
        },
        {
            id: 5,
            name: "Adventure",
            image: "https://cdn-icons-png.flaticon.com/512/8005/8005743.png"
        },
        {
            id: 6,
            name: "Romantic",
            image: "https://cdn-icons-png.flaticon.com/512/6645/6645749.png"
        },
        {
            id: 7,
            name: "Historical",
            image: "https://cdn-icons-png.flaticon.com/512/3837/3837978.png"
        },
        {
            id: 8,
            name: "Wildlife",
            image: "https://cdn-icons-png.flaticon.com/512/5150/5150860.png"
        },
    ]
    const handleSubmit = (name) => {
        router.push({
            pathname: '/TripCategoryList',
            params: {
                name: name
            }
        })
    }
    return (
        <ScrollView horizontal style={[{ backgroundColor: colorScheme.background }]}>
            <View style={styles.container}>
                {
                    data.map((item, index) => (
                        <Pressable key={index} style={{ borderRadius: 10 }} onPress={() => handleSubmit(item.name)}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: item.image }} />
                            </View>
                            <Text style={[styles.text, { color: colorScheme.text }]} >{item.name}</Text>
                        </Pressable>
                    ))
                }
            </View>

        </ScrollView>
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
        height: '55%',
        resizeMode: 'cover',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lexend-Light',
        textAlign: 'center'
    },
})

export default TripCategory;
