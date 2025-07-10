import { StyleSheet, View, Text } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/*View Component */}
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
      {/*Text Component */}
      <Text style={styles.firstText}>hello, React Native</Text>
      <Text style={styles.nestedText}>
        Text comp can be <Text style={styles.innerNestedText}>nested</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  firstText: {
    fontSize: 30,
  },
  nestedText: {
    fontSize: 18,
  },
  innerNestedText: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default App;
