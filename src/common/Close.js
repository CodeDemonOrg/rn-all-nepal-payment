import React from 'react';
import {Pressable,Image} from 'react-native';

import {styles} from './styles';

const CloseIcon=React.memo(({onClose})=>(
    <Pressable style={styles.iconContainer} onPress={onClose}>
        <Image source={require('./../assets/cross.png')} style={styles.icon} />
    </Pressable>
));

export default CloseIcon;