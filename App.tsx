import { ScrollView, StyleSheet, View } from 'react-native';
import Basics from './src/components/Basics';
import TextInputComponent from './src/components/TextInput';
import ScrollViewComponent from './src/components/ScrollView';

function App(): React.JSX.Element {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      bounces={true}
      nestedScrollEnabled={true}
    >
      <View style={styles.container}>
        <Basics />
        <Basics />
        <TextInputComponent />
        <ScrollViewComponent />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollViewContent: { padding: 20 },
});

export default App;
