import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme/ColorTheme';
import { popularDestinations } from '../../data/PopularDestinations'
import { DestinationsCard } from '../../components/DestinationsCard';
import TripCategory from '../../components/TripCategory';
const HomePage = () => {
    const colorScheme = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/icon.png')} style={styles.image} />
                </View>
                <View>
                    <Text style={[styles.title, { color: colorScheme.text }]}>Hello, User 👋</Text>
                    <Text style={[styles.subtitle, { color: colorScheme.primary }]}>Where do you want to go?</Text>
                </View>
            </View>
            <View>
                <TripCategory />
            </View>
            <View style={styles.popularDestinations}>
                <View style={styles.recommendationHeader}>
                    <Text style={[styles.recommendationTitle, { color: colorScheme.text }]}>Popular Destinations</Text>
                    <TouchableOpacity style={styles.seeAll}>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        height: '100%',
        padding: 20,
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
