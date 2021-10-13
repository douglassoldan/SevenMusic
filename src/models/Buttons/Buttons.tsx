import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styles from './ButtonsStyle';

interface ButtonProps extends TouchableOpacityProps {
  title: any;
}

export function PrimaryButton({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.primaryButton}
      onPress={() => false}
      {...rest}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}
