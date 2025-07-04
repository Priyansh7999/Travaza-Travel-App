import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useTheme } from '../Theme/ColorTheme';
import Colors from '../Theme/Colors';
import { router } from 'expo-router';

export const SmallDestinationCard = ({ filteredRecommendations, type }) => {
    const colorScheme = useTheme();
    const handleSubmit = (id) => {
        console.log(type);
        router.push({
            pathname: type === 'package' ? '/PackageReview' : '/PlaceReview',
            params: {
                id: id
            }
        })
    }
    return (
        <View>
            {filteredRecommendations.map((item, index) => (
                <Pressable key={index} style={[styles.recommendationItem, { backgroundColor: colorScheme.surface }]} onPress={() => { handleSubmit(item.id, item?.type) }}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.recommendationName, { color: colorScheme.text }]}>
                                {item.destination || item.name}
                            </Text>
                            <Text style={[styles.recommendationPrice, { color: colorScheme.text }]}>
                                <Text style={[styles.price, { color: colorScheme.primary }]}>{item.price}</Text>/person
                            </Text>
                        </View>

                        <Text style={[styles.recommendationLocation, { color: colorScheme.text }]}>
                            <Octicons name="location" size={24} style={styles.icon} />
                            {item.state || item.place}
                        </Text>
                        <View>
                            <Text style={[styles.recommendationRating, { color: colorScheme.text }]}>
                                ⭐{item.rating} ({item.TotalReview} Reviews)
                            </Text>
                        </View>
                    </View>
                </Pressable>
            ))}
        </View>
    );
};

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