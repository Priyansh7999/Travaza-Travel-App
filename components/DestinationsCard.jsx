import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../Theme/ColorTheme';
import Colors from '../Theme/Colors';
export const DestinationsCard = ({ item }) => {
    const colorScheme = useTheme();
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
    }
    return (
        <View style={[styles.container, { backgroundColor: colorScheme.background }]} >
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={[styles.iconContainer, { backgroundColor: colorScheme.background }]}>
                <Pressable style={styles.icon} onPress={handleLike}>
                    {
                        liked ? (
                            <Ionicons name="heart" size={24} color="red" />
                        ) : (
                            <Ionicons name="heart-outline" size={24} color={colorScheme.text} />
                        )
                    }
                </Pressable>
            </View>
            <View style={[styles.textContainer , { backgroundColor: colorScheme.background }]}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.recommendationName, { color: colorScheme.text }]}>{item.destination}</Text>
                    <Text style={[styles.recommendationPrice, { color: colorScheme.text }]}><Text style={[styles.price, { color: colorScheme.primary }]}>{item.price}</Text>/person</Text>
                </View>
                <Text style={[styles.recommendationLocation, { color: colorScheme.text }]}><Ionicons name="location" size={24} style={styles.icon} />{item.place}</Text>
                <Text style={[styles.recommendationRating, { color: colorScheme.text }]}>⭐{item.rating} ({item.TotalReview} Reviews)</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 290,
        height: 330,
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
    },

    image: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        borderRadius: 20,
        overflow: 'hidden',
    },
    iconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 8,
        borderRadius: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        width: '90%',
        bottom: 0,
        left: 0,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        gap: 10
    },
    recommendationName: {
        fontSize: 16,
        fontFamily: 'Lexend-Medium',
    },
    recommendationPrice: {
        fontSize: 14,
        fontFamily: 'Lexend-Light',
    },
    price: {
        fontSize: 16,
        fontFamily: 'Lexend-Medium',
    },
    icon: {
        fontSize: 16,
    },
    recommendationLocation: {
        fontSize: 14,
        fontFamily: 'Lexend-Light',
    },
    recommendationRating: {
        fontSize: 14,
        fontFamily: 'Lexend-Light',
    },
})

