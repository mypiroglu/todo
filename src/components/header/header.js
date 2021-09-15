import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const Header = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {/* TODOS */}
                {props.name}
            </Text>
        </View>
    );
}
export default Header;