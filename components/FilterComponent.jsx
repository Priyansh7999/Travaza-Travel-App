import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import { useTheme } from '../Theme/ColorTheme';
import Colors from '../Theme/Colors';
export const FilterComponent = ({ visible, onClose }) => {
    const colorScheme = useTheme();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedPrices, setSelectedPrices] = useState([]);
    const Categories = ['Mountain', 'Beach', 'Desert', 'Camping'];
    const Sort = ['Low to High', 'High to Low'];
    const toggleCategory = (item) => {
        if (selectedCategories.includes(item)) {
            setSelectedCategories(prev => prev.filter(i => i !== item));
        } else {
            setSelectedCategories(prev => [...prev, item]);
        }
    };
    const onReset = () => {
        setSelectedCategories([]);
        setSelectedSort('');
        setSelectedPrices([]);
    }
    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.overlay}>
                <View style={[styles.modalContainer, { backgroundColor: colorScheme.background }]}>
                    <View style={styles.header}>
                        <Text style={[styles.modalTitle, { color: colorScheme.primary }]}>Filter</Text>
                        <Text style={[styles.errorTitle, { color: colorScheme.error }]} onPress={onClose}>Cancel</Text>
                    </View>
                    <ScrollView>
                        <Text style={[styles.sectionTitle, { color: colorScheme.text }]}>All Categories</Text>
                        {Categories.map((item, index) => (
                            <View style={styles.checkboxRow} key={index}>
                                <Text style={[styles.label, { color: Colors.textSecondary }]}>{item}</Text>
                                <Checkbox
                                    value={selectedCategories.includes(item)}
                                    onValueChange={() => toggleCategory(item)}
                                />
                            </View>
                        ))}

                        <Text style={[styles.sectionTitle, { color: colorScheme.text }]}>Sort By Rating</Text>
                        {Sort.map((item, index) => (
                            <TouchableOpacity
                                style={styles.radioRow}
                                key={index}
                                onPress={() => setSelectedSort(item)}
                            >
                                <Text style={[styles.label, { color: Colors.textSecondary }]}>{item}</Text>
                                <Checkbox value={selectedSort === item} onValueChange={() => setSelectedSort(item)} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.resetBtn, { backgroundColor: colorScheme.background }]} onPress={onReset}>
                            <Text style={[ styles.resetText, { color: colorScheme.text, fontFamily: 'Lexend-Medium' }]}>Reset All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.closeBtn, { backgroundColor: colorScheme.primary }]}>
                            <Text style={[ styles.closeText, { color: 'white', fontFamily: 'Lexend-Medium' }]}>Apply Filters</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContainer: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: 'Lexend-Medium',
        marginBottom: 15,
    },
    errorTitle: {
        fontSize: 15,
        fontFamily: 'Lexend',
        marginBottom: 15,
    },
    sectionTitle: {
        fontFamily: 'Lexend-Medium',
        marginTop: 10,
        marginBottom: 5,
        fontSize: 18,
    },
    checkboxRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    label: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'Lexend-Light',
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resetBtn: {
        marginTop: 20,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.4,
        borderColor: Colors.textSecondary,
        paddingHorizontal: 40
    },
    closeBtn: {
        marginTop: 20,
        backgroundColor: '#007bff',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.4,
        borderColor: '#007bff',
        paddingHorizontal: 30
    },
});
