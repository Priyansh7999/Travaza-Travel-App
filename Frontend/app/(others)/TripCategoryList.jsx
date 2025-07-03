import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SmallDestinationCard } from '../../components/SmallDestinationCard';
import { popularDestinations } from '../../data/PopularDestinations';
import { useTheme } from '../../Theme/ColorTheme';
const TripCategoryList = () => {
    const colorScheme = useTheme();
    const { name,month } = useLocalSearchParams();
    console.log(name);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        if(name === 'All') setCategory(popularDestinations);
        else if(name === 'Month') setCategory(popularDestinations.filter((item) => item?.month.toLowerCase() === month.toLowerCase()));
        else{
            const filtered = popularDestinations.filter(
                (item) => item.category.toLowerCase() === name.toLowerCase()
            );
            setCategory(filtered);
        }
    }, [name]);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme?.background || '#fff' }]}>
            <Ionicons name="arrow-back-outline" size={24} color={colorScheme?.text || '#000'} onPress={() => router.back()} />
            <Text style={[  styles.title,{ color: colorScheme?.primary }]}>Top {month || name} Trips for you</Text>
            <ScrollView>
                <SmallDestinationCard filteredRecommendations={category} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Lexend-Medium',
        padding:7,
        marginBottom: 10
    },
});

export default TripCategoryList;