import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTheme } from '../Theme/ColorTheme';
import ReadMore from 'react-native-read-more-text';


export const Description = ({ place }) => {
    const colorScheme = useTheme();
    
    return (
        <View >
            <View style={styles.descriptionContainer}>
                <ReadMore
                    numberOfLines={5}
                    renderTruncatedFooter={handlePress => (
                        <Text style={{ color: colorScheme.primary }} onPress={handlePress}>
                            Read more
                        </Text>
                    )}
                    renderRevealedFooter={handlePress => (
                        <Text style={{ color: colorScheme.primary }} onPress={handlePress}>
                            Read less
                        </Text>
                    )}
                >
                    <Text style={[styles.description, { color: colorScheme.text }]}>
                        {place.description}
                    </Text>
                </ReadMore>
            </View>
            {
                place.bestTimeToVisit && (
                    <View style={[styles.descriptionContainer, { marginTop: hp('2%') }]}>
                        <Text style={[styles.Title, { color: colorScheme.primary }]}>Best time to visit {place.name}</Text>
                        <View style={styles.season}>
                            <Text style={[styles.description, { color: colorScheme.success }]}>Peak Season:</Text>
                            <Text style={{ color: colorScheme.text }}>{place?.bestTimeToVisit?.peakSeason}</Text>
                        </View>
                        <View style={styles.season}>
                            <Text style={[styles.description, { color: colorScheme.warning }]}>Moderate Season:</Text>
                            <Text style={{ color: colorScheme.text }}>{place.bestTimeToVisit.moderateSeason}</Text>
                        </View>
                        <View style={styles.season}>
                            <Text style={[styles.description, { color: colorScheme.error }]}>Off Season:</Text>
                            <Text style={{ color: colorScheme.text }}>{place.bestTimeToVisit.offSeason}</Text>
                        </View>
                    </View>
                )
            }
            {
                place.famousFor && (
                    <View style={[styles.descriptionContainer, { marginTop: hp('2%') }]}>
                        <Text style={[styles.Title, { color: colorScheme.primary }]}>Famous for </Text>
                        <Text style={[styles.description, { color: colorScheme.text }]}>{place.famousFor}</Text>
                    </View>
                )
            }
            {
                place.history && (
                    <View style={[styles.descriptionContainer, { marginTop: hp('2%') }]}>
                        <Text style={[styles.Title, { color: colorScheme.primary }]}>History of {place.name}</Text>
                        <Text style={[styles.description, { color: colorScheme.text }]}>{place.history}</Text>
                    </View>
                )
            }
        </View>
    );
};
const styles = StyleSheet.create({
    descriptionContainer: {
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    description: {
        fontSize: wp('4.5%'),
        fontFamily: 'Lexend-Light',
        textAlign: 'justify',
        paddingLeft: hp('0.6%'),
        paddingRight: hp('1%')
    },
    Title: {
        fontSize: wp('5%'),
        marginVertical: hp('0.5%'),
        fontFamily: 'Lexend-Medium',
        textAlign: 'justify',
    },
    season: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp('0.5%'),
    }
})
