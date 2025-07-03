import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Image } from 'expo-image'
import { useTheme } from '../Theme/ColorTheme'
import { router } from 'expo-router'

const monthData = [
    {
        id: 1,
        month: "January",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_January_destinations_p_683_455.jpg"
    },
    {
        id: 2,
        month: "February",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_feburaray_Destinations_p_694_444.jpg"
    },
    {
        id: 3,
        month: "March",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_seo_months_march_destinaions_p_693_461.jpg"
    },
    {
        id: 4,
        month: "April",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_seo_months_april_destinations_p_651_488.jpg"
    },
    {
        id: 5,
        month: "May",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_seo_months_may_destinaions_l_540_810.jpg"
    },
    {
        id: 6,
        month: "June",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_seo_months_June_destination_p_663_589.jpg"
    },
    {
        id: 7,
        month: "July",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_seo_months_july_destinaions_p_588_393.jpg"
    },
    {
        id: 8,
        month: "August",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_seo_months_august_destinations_p_860_574.jpg"
    },
    {
        id: 9,
        month: "September",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_September_destinations_seo_page_l_314_480.jpg"
    },
    {
        id: 10,
        month: "October",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_october_destinations_l_323_484.jpg"
    },
    {
        id: 11,
        month: "November",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_november_destinations_p_592_474.jpg"
    },
    {
        id: 12,
        month: "December",
        image: "https://hblimg.mmtcdn.com/content/hubble/img/seo_images/mmt/activities/m_december_destinations_p_579_465.jpg"
    }

]
export default function MonthTripPlan() {
    const colorScheme = useTheme();
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}>
            {
                monthData.map((item, index) => (
                    <Pressable key={index} onPress={() => router.push({
                        pathname: '/TripCategoryList',
                        params: { name: 'Month', month: item.month },
                    })}>
                        <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                        </View>
                        <Text style={[styles.text, { color: colorScheme.primary }]}>{item.month}</Text>
                    </Pressable>
                ))
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
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
    text: {
        fontSize: 16,
        fontFamily: 'Lexend-Medium',
        textAlign: 'center'
    }
})