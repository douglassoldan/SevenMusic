import React from 'react'
import { TextInput } from 'react-native'

import styles from './InputsStyle'

// interface InputProps extends TextInputProps {
//     title: any
// }

// export function SimpleInput({ ...rest }: InputProps) {
export function SimpleInput({ ...rest }) {
    return (
        <TextInput
            style={styles.simpleInput}
            {...rest}
        />
    )
}
