import { StyleSheet, View } from 'react-native';
import Basics from './src/components/Basics';
import TextInputComponent from './src/components/TextInput';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Basics />
      <TextInputComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
