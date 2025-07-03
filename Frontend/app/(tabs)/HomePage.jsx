import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme/ColorTheme';
import { popularDestinations } from '../../data/PopularDestinations'
import { DestinationsCard } from '../../components/DestinationsCard';
import TripCategory from '../../components/TripCategory';
import { router } from 'expo-router';
import MonthTripPlan from '../../components/MonthTripPlan';
import { packages } from '../../data/Package';
import PackageCard from '../../components/PackageCard';
const HomePage = () => {
    const colorScheme = useTheme();
    const handleAllDestinations = () => {
        router.push({
            pathname: '/TripCategoryList',
            params: {
                name: 'All'
            }
        })
    }
    return (
        <View style={[{flex: 1, backgroundColor: colorScheme.background }]}>
            <ScrollView style={[styles.container]}>
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/images/icon.png')} style={styles.image} />
                    </View>
                    <View>
                        <Text style={[styles.title, { color: colorScheme.text }]}>Hello, User 👋</Text>
                        <Text style={[styles.subtitle, { color: colorScheme.primary }]}>What is your Vibe?</Text>
                    </View>
                </View>
                <View>
                    <TripCategory />
                </View>
                <View style={styles.popularDestinations}>
                    <View style={styles.recommendationHeader}>
                        <Text style={[styles.recommendationTitle, { color: colorScheme.text }]}>Popular Destinations</Text>
                        <TouchableOpacity style={styles.seeAll} onPress={handleAllDestinations}>
                            <Text style={[styles.seeAllText, { color: colorScheme.primary }]}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 10 }}
                    >
                        {popularDestinations.map((item, index) => (
                            <DestinationsCard key={index} item={item} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.popularDestinations}>
                    <View style={styles.recommendationHeader}>
                        <Text style={[styles.recommendationTitle, { color: colorScheme.text }]}>Trending Destinations</Text>
                        <TouchableOpacity style={styles.seeAll} onPress={handleAllDestinations}>
                            <Text style={[styles.seeAllText, { color: colorScheme.primary }]}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 10 }}
                    >
                        {popularDestinations.map((item, index) => (
                            <DestinationsCard key={index} item={item} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.popularDestinations}>
                    <View style={styles.recommendationHeader}>
                        <Text style={[styles.recommendationTitle, { color: colorScheme.text }]}>Top Packages for You</Text>
                        <TouchableOpacity style={styles.seeAll} onPress={handleAllDestinations}>
                            <Text style={[styles.seeAllText, { color: colorScheme.primary }]}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 10 }}
                    >
                        {packages.map((item, index) => (
                            <PackageCard key={index} item={item} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.popularDestinations}>
                    <View style={styles.recommendationHeader}>
                        <Text style={[styles.recommendationTitle, { color: colorScheme.text }]}>Top Tourist Collections</Text>
                    </View>
                    <MonthTripPlan />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        padding: 20,
        marginTop: 25,
    },
    header: {
        marginBottom: 20,
        flexDirection: 'row',
        gap: 10,
    },
    title: {
        fontSize: 12,
        fontFamily: 'Lexend-Light'
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Lexend-Medium'
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    popularDestinations: {
        marginVertical: 25,
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
})

export default HomePage;
