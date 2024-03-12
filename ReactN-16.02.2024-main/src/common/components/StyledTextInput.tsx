import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface StyledTextInputProps {
    placeholder: string;
    value: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
}

const StyledTextInput = ({ 
    placeholder, 
    value, 
    secureTextEntry, 
    onChangeText }: StyledTextInputProps) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'lightgray',
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
    },
});

export default StyledTextInput;
