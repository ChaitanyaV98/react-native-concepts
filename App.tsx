import { StyleSheet, View } from 'react-native';
import Basics from './src/components/Basics';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Basics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
