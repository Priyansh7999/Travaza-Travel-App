import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useTheme } from '../../Theme/ColorTheme';
import Colors from '../../Theme/Colors';
import { router } from 'expo-router';

const SelectDate = ({ visible, onClose, onSelect }) => {
    const [selectedRange, setSelectedRange] = useState([]);
    const colorScheme = useTheme();
    const onDayPress = (day) => {
        if (!selectedRange.startDate || (selectedRange.startDate && selectedRange.endDate)) {
            setSelectedRange({ startDate: day.dateString, endDate: '' });
        } else if (selectedRange.startDate && !selectedRange.endDate) {
            if (day.dateString >= selectedRange.startDate) {
                setSelectedRange({ ...selectedRange, endDate: day.dateString });
            } else {
                setSelectedRange({ startDate: day.dateString, endDate: '' });
            }
        }
    };
    const getMarkedDates = () => {
        const marks = {};
        if (selectedRange.startDate) {
            marks[selectedRange.startDate] = {
                startingDay: true,
                color: '#70d7c7',
                textColor: 'black'
            };
        }
        if (selectedRange.startDate && selectedRange.endDate) {
            let start = new Date(selectedRange.startDate);
            let end = new Date(selectedRange.endDate);
            let current = new Date(start);

            while (current <= end) {
                const dateStr = current.toISOString().split('T')[0];
                if (dateStr === selectedRange.startDate) {
                    marks[dateStr] = { startingDay: true, color: colorScheme.primary, textColor: 'white' };
                } else if (dateStr === selectedRange.endDate) {
                    marks[dateStr] = { endingDay: true, color: colorScheme.primary, textColor: 'white' };
                } else {
                    marks[dateStr] = { color: colorScheme.primary, textColor: 'white' };
                }
                current.setDate(current.getDate() + 1);
            }
        }
        return marks;
    };

    const handleConfirm = () => {
        console.log(selectedRange);
        if (onSelect) {
            onSelect(selectedRange);
        }
        if (onClose) {
            onClose();
        }
    };


    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.overlay}>
                <View style={[styles.sheet]}>
                    <View style={styles.dragIndicator} />
                    <Text style={[styles.label, { color: 'black' }]}>Select your travel dates:</Text>
                    <Calendar
                        markingType={'period'}
                        markedDates={getMarkedDates()}
                        onDayPress={onDayPress}
                        theme={{
                            selectedDayBackgroundColor: colorScheme.primary,
                            selectedDayTextColor: 'white',
                            arrowColor: colorScheme.primary,
                            backgroundColor: colorScheme.background,
                        }}
                    />
                    <View style={styles.dateInfo}>
                        <Text style={{ color: 'black', fontFamily: 'Lexend-Regular' }}>Start Date: <Text style={[styles.selectedDate, { color: colorScheme.primary }]}>{selectedRange.startDate || '-'}</Text></Text>
                        <Text style={{ color: 'black', fontFamily: 'Lexend-Regular' }}>End Date: <Text style={[styles.selectedDate, { color: colorScheme.primary }]}>{selectedRange.endDate || '-'}</Text></Text>
                    </View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeButtonText}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.confirmButton, { opacity: selectedRange.startDate && selectedRange.endDate ? 1 : 0.5 }]}
                            onPress={handleConfirm}
                            disabled={!(selectedRange.startDate && selectedRange.endDate)}
                        >
                            <Text style={styles.confirmButtonText}>Confirm</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
    },
    sheet: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        minHeight: 400,
        alignItems: 'stretch',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 10,
        backgroundColor: '#fff',
    },
    dragIndicator: {
        width: 44,
        height: 6,
        borderRadius: 3,
        alignSelf: 'center',
        marginBottom: 14,
        marginTop: -8,
        backgroundColor: '#611FCA',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    dateInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18,
        marginBottom: 12,
    },
    selectedDate: {
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    closeButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginRight: 8,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.warning,
        backgroundColor: Colors.error,
    },
    closeButtonText: {
        fontFamily: 'Lexend-Bold',
        color: "white",
    },
    confirmButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginLeft: 8,
        alignItems: 'center',
        borderWidth: 0.5,
        backgroundColor: Colors.Button,
    },
    confirmButtonText: {
        fontFamily: 'Lexend-Bold',
        color: Colors.ButtonText,
    }
});

export default SelectDate;