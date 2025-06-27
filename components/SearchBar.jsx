import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../Theme/Colors';
import { useTheme } from '../Theme/ColorTheme';
import { CityRecommendationList, DestinationRecommendationList } from '../data/SearchDataList';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const colorScheme = useTheme();

    const handleSearch = (text) => {
        setSearchTerm(text);
    }

    const filteredCityRecommendations = CityRecommendationList.filter((item) => item.city.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredDestinationRecommendations = DestinationRecommendationList.filter((item) => item.destination.toLowerCase().includes(searchTerm.toLowerCase()) || item.city.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredRecommendations = [...filteredCityRecommendations, ...filteredDestinationRecommendations];

    return (
        <View style={styles.container}>
            <View style={styles.SearchContainer}>
                <Ionicons name="search" size={24} color={colorScheme.text} style={styles.icon} />
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
                <View style={styles.recommendationHeader}>
                    <Text style={[styles.recommendationTitle, {color: colorScheme.text}]}>Recommendations</Text>
                    <TouchableOpacity style={styles.seeAll}>
                        <Text style={[styles.seeAllText, {color: colorScheme.primary}]}>See all</Text>
                    </TouchableOpacity>
                </View>
                {filteredRecommendations.map((item, index) => (
                    <View key={index} style={[styles.recommendationItem, {backgroundColor: colorScheme.surface}]}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </View>  
                        <View style={styles.textContainer}>
                            <Text style={[styles.recommendationName,{color: colorScheme.text}]}>{item.destination || item.city}</Text>
                            <Text style={[styles.recommendationPrice,{color: colorScheme.text}]}><Text style={[styles.price,{color: colorScheme.primary}]}>{item.price}</Text>/person</Text>
                            {
                                item.destination && (
                                    <Text style={[styles.recommendationLocation, {color: colorScheme.text}]}><Ionicons name="location" size={24} style={styles.icon} />{item.city}</Text>
                                )
                            }
                            <View>
                                <Text style={[styles.recommendationRating, {color: colorScheme.text}]}>⭐{item.rating} ({item.TotalReview} Reviews)</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
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
    icon: {
        color: Colors.textSecondary,
    },
    
    recommendationContainer: {
        marginTop: 20,
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

export default SearchBar;
