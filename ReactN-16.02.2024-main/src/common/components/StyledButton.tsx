import React from 'react';
import { Button } from 'react-native';

interface StyledButtonProps {
    title: string;
    color: string;
    onPress: () => void;
}

export const StyledButton = ({ 
    title, 
    color, 
    onPress }: StyledButtonProps) => {
    return (
        <Button 
            color={color} 
            title={title} 
            onPress={onPress} 
        />
    );
};

export default StyledButton;
