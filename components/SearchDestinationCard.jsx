import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../Theme/ColorTheme';
import Colors from '../Theme/Colors';
export const SearchDestinationCard=({ item }) => {
    const colorScheme = useTheme();
    return (
        <View  style={[styles.recommendationItem, { backgroundColor: colorScheme.surface }]}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.recommendationName, { color: colorScheme.text }]}>{item.destination || item.city}</Text>
                <Text style={[styles.recommendationPrice, { color: colorScheme.text }]}><Text style={[styles.price, { color: colorScheme.primary }]}>{item.price}</Text>/person</Text>
                {
                    item.destination && (
                        <Text style={[styles.recommendationLocation, { color: colorScheme.text }]}><Ionicons name="location" size={24} style={styles.icon} />{item.city}</Text>
                    )
                }
                <View>
                    <Text style={[styles.recommendationRating, { color: colorScheme.text }]}>⭐{item.rating} ({item.TotalReview} Reviews)</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    recommendationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    recommendationTitle: {
        fontSize: 20,
        fontFamily: 'Lexend-Medium',
    },
    seeAll: {
        fontSize: 16,
        fontFamily: 'Lexend-Light',
    },
    seeAllText: {
        fontSize: 16,
        fontFamily: 'Lexend-Light',
    },
    recommendationItem: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flex: 1,
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
        fontSize: 26,
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