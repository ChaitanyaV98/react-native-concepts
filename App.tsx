import { ScrollView, StyleSheet, View } from 'react-native';
import Basics from './src/components/Basics';
import TextInputComponent from './src/components/TextInput';
import ScrollViewComponent from './src/components/ScrollView';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={true}
        nestedScrollEnabled={true}
      >
        <Basics />
        <Basics />
        <TextInputComponent />
        <ScrollViewComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollViewContent: { padding: 20 },
});

export default App;
