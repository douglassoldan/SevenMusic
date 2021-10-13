import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {useReduxSelector} from '../../redux';
import {
  selectIsSubmitting,
  selectLoginMessage,
  //   selectLoginState,
} from '../../redux/user/user';

type UserFormProps = {
  submitHandler: (email: string, password: string) => void;
  label: string;
};

const UserForm = ({
  submitHandler,
  label,
}: UserFormProps): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useReduxSelector(selectIsSubmitting);
  //   const loginState = useReduxSelector(selectLoginState);
  const loginMessage = useReduxSelector(selectLoginMessage);

  return (
    <View style={styles.styledContainer}>
      <TextInput
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        style={styles.styledInput}
        autoCapitalize="none"
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        style={styles.styledInput}
        autoCapitalize="none"
      />
      <TouchableOpacity
        disabled={isLoading}
        onPress={() => submitHandler(email, password)}
        style={styles.styledButtonContainer}>
        <Text style={styles.styledButtonText}>{label}</Text>
      </TouchableOpacity>
      {loginMessage && <Text>{loginMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  styledInput: {
    height: 40,
    width: 300,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
  },
  styledButtonContainer: {
    backgroundColor: '#009688',
    borderRadius: 10,
    padding: 10,
  },
  styledButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default UserForm;
