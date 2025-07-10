import { View, Text, StyleSheet } from 'react-native';

function StylingDemo(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Styling demo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default StylingDemo;
