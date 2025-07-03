import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useTheme } from '../../Theme/ColorTheme';
import Colors from '../../Theme/Colors';
import { router } from 'expo-router';

export const GuestSelection = ({ visible, onClose, onSelect }) => {
    const colorScheme = useTheme();
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    function handleConfirm() {
        const currentGuests = { adult: adult, children: children, infants: infants };
        onSelect(currentGuests); 
        if (onClose) {
            onClose();
        }
    }
    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.overlay}>
                <View style={[styles.modalContainer, { backgroundColor: colorScheme.background }]}>
                    <View style={styles.header}>
                        <Text style={[styles.modalTitle, { color: colorScheme.primary }]}>Select Guest</Text>
                        <Text style={[styles.errorTitle, { color: colorScheme.error }]} onPress={onClose}>Cancel</Text>
                    </View>
                    {/* Adult */}
                    <View style={styles.counterRow}>
                        <View>
                            <Text style={[styles.sectionTitle, { color: colorScheme.text }]}>Adult</Text>
                            <Text style={[styles.label, { color: Colors.textSecondary }]}>Age 14 or above</Text>
                        </View>
                        <View style={styles.counter}>
                            <TouchableOpacity
                                style={styles.counterButton}
                                onPress={() => decrement(setAdult, adult)}
                            >
                                <Text style={styles.counterButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={[styles.counterValue, { color: colorScheme.primary }]}>{adult}</Text>
                            <TouchableOpacity
                                style={styles.counterButton}
                                onPress={() => increment(setAdult, adult)}
                            >
                                <Text style={styles.counterButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Children */}
                    <View style={styles.counterRow}>
                        <View>
                            <Text style={[styles.sectionTitle, { color: colorScheme.text }]}>Children</Text>
                            <Text style={[styles.label, { color: Colors.textSecondary }]}>Age 2-13</Text>
                        </View>
                        <View style={styles.counter}>
                            <TouchableOpacity
                                style={styles.counterButton}
                                onPress={() => decrement(setChildren, children)}
                            >
                                <Text style={styles.counterButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={[styles.counterValue, { color: colorScheme.primary }]}>{children}</Text>
                            <TouchableOpacity
                                style={styles.counterButton}
                                onPress={() => increment(setChildren, children)}
                            >
                                <Text style={styles.counterButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Infants */}
                    <View style={styles.counterRow}>
                        <View>
                            <Text style={[styles.sectionTitle, { color: colorScheme.text }]}>Infants</Text>
                            <Text style={[styles.label, { color: Colors.textSecondary }]}>Under 2</Text>
                        </View>
                        <View style={styles.counter}>
                            <TouchableOpacity
                                style={styles.counterButton}
                                onPress={() => decrement(setInfants, infants)}
                            >
                                <Text style={styles.counterButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={[styles.counterValue, { color: colorScheme.primary }]}>{infants}</Text>
                            <TouchableOpacity
                                style={styles.counterButton}
                                onPress={() => increment(setInfants, infants)}
                            >
                                <Text style={styles.counterButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.backBtn, { backgroundColor: colorScheme.background }]}
                            onPress={onClose}
                        >
                            <Text style={[styles.backText, { color: colorScheme.text, fontFamily: 'Lexend-Medium' }]}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.closeBtn, { backgroundColor: Colors.Button }]} onPress={handleConfirm}>
                            <Text style={[styles.closeText, { color: Colors.ButtonText, fontFamily: 'Lexend-Medium' }]}>Review Trip</Text>
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
    label: {
        marginLeft: 0,
        fontSize: 14,
        fontFamily: 'Lexend-Light',
    },
    counterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#444',
    },
    counterValue: {
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: 'bold',
        minWidth: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backBtn: {
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
    closeText: {
        color: 'white',
        fontFamily: 'Lexend-Medium'
    },
    backText: {
        fontFamily: 'Lexend-Medium'
    }
});

export default GuestSelection;