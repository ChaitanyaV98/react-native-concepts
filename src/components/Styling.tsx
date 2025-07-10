import { View, Text, StyleSheet } from 'react-native';

function StylingDemo(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
          Inline styling example
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default StylingDemo;
