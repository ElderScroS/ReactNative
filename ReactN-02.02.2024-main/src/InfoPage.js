import React from 'react';
import { View, Button, Alert, Linking, Platform, Dimensions } from 'react-native';

const DeviceInfoPage = () => {
    const getDeviceInfo = () => {
        const { width, height } = Dimensions.get('window');
        const os = Platform.OS;
        const model = Platform.OS === 'ios' ? Platform.constants.Model : Platform.constants.Model;
        Alert.alert(
            'Device Information',
            `OS: ${os}\nModel: ${model}\nWidth: ${width}\nHeight: ${height}`
        );
    };

    const callPhoneNumber = () => {
        const phoneNumber = '+994507715141';
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Get Device Info" onPress={getDeviceInfo} />
            <Button title="Call Phone Number" onPress={callPhoneNumber} />
        </View>
    );
};

export default DeviceInfoPage;
