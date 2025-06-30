import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme/ColorTheme';
import Colors from '../../Theme/Colors';
import { CityRecommendationList, DestinationRecommendationList } from '../../data/SearchDataList';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import {SearchDestinationCard} from '../../components/SearchDestinationCard';
const Discover = () => {
     const [searchTerm, setSearchTerm] = useState('');
        const colorScheme = useTheme();
    
        const handleSearch = (text) => {
            setSearchTerm(text);
        }
    
        const filteredCityRecommendations = CityRecommendationList.filter((item) => item.city.toLowerCase().includes(searchTerm.toLowerCase()));
        const filteredDestinationRecommendations = DestinationRecommendationList.filter((item) => item.destination.toLowerCase().includes(searchTerm.toLowerCase()) || item.city.toLowerCase().includes(searchTerm.toLowerCase()));
        const filteredRecommendations = [...filteredCityRecommendations, ...filteredDestinationRecommendations];
    
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
                <Text style={[styles.title, { color: colorScheme.primary }]}>Discover the world with us </Text>
                <View style={styles.SearchContainer}>
                    <Ionicons name="search" size={36} color={colorScheme.text} style={styles.icon} />
                    <TextInput
                        placeholder="Search"
                        style={[styles.input, { color: colorScheme.text }]}
                        placeholderTextColor={Colors.textSecondary}
                        value={searchTerm}
                        onChangeText={handleSearch}
                        autoCapitalize="words"
                        autoCorrect={false}
                        spellCheck={false}
                    />
                    <Ionicons name="filter-sharp" size={24} color={colorScheme.text} style={styles.icon} />
                </View>
                <ScrollView style={styles.recommendationContainer}>
                    {filteredRecommendations.map((item, index) => (
                        <SearchDestinationCard item={item} key={index} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
        },
        title:{
            fontSize: 40,
            fontFamily: 'Lexend-Medium',
            padding:5,
        },
        SearchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.textSecondary,
            borderRadius: 10,
            padding: 5,
            gap: 10,
        },
        input: {
            flex: 1,
            fontFamily: 'Lexend-Light',
        },
        recommendationContainer: {
            marginTop: 20,
        },
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
        icon:{
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

export default Discover;
