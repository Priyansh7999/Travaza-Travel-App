import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../Theme/ColorTheme';
import Colors from '../Theme/Colors';
import { Image } from 'expo-image';
const ModalSuccessfull = ({ visible, setVisible, title, onPress , image}) => {
    const colorScheme = useTheme();
    return (
        <View>
            <Modal
                transparent={true}
                visible={visible}
                animationType="slide"
                onRequestClose={() => setVisible(false)}
            >
                <View style={[styles.modalBackground, { backgroundColor: colorScheme.background }]}>
                    <View style={styles.modalContainer}>
                        <Text style={[styles.title, { color: colorScheme.text, marginBottom: 10 }]}>{title}</Text>
                        <View style={styles.imageContainer}>
                            <Image source={image} style={styles.modalImage} />
                        </View>
                        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: Colors.Button }]}>
                            <Text style={styles.buttonText}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Lexend-Medium'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: 250,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
    },
    modalImage: {
        width: 200,
        height: 200,
    },
    button: {
        backgroundColor: Colors.primary[700],
        borderRadius: 15,
        padding: 15,
        marginTop: 20,
        width: '100%',
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center',
        fontFamily: 'Lexend-Medium'
    },
})

export default ModalSuccessfull;
