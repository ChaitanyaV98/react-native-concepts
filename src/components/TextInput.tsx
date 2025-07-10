import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function TextInputComponent(): React.JSX.Element {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Textinput component</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter some text here"
        onChangeText={setValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default TextInputComponent;
