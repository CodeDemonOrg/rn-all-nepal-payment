import React from 'react';
import { Pressable, Image } from 'react-native';

import { styles } from './styles';

const CloseIcon = React.memo(({ onClose ,dark=false}) => (
    <Pressable style={styles.iconContainer} onPress={onClose}>
        <Image source={require('./../assets/cross.png')} style={styles.icon(dark)} />
    </Pressable>
));

export default CloseIcon;
