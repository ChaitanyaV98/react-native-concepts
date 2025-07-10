import { StyleSheet, View, Text, Image } from 'react-native';

function Basics(): React.JSX.Element {
  return (
    <View>
      {/*View Component */}
      <Text style={styles.headerText}>View component</Text>
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
      {/*Text Component */}
      <Text style={styles.headerText}>Text component</Text>
      <Text style={styles.firstText}>hello, React Native</Text>
      <Text style={styles.nestedText}>
        Text comp can be <Text style={styles.innerNestedText}>nested</Text>
      </Text>
      <Text style={styles.headerText}>Image component</Text>
      {/*Image Component */}
      {/* <Image
        style={styles.image}
        source={{ uri: 'https://httpbin.org/image/png' }}
      /> */}

      {/*Rendering Local image */}
      <Image style={styles.image} source={require('../../assets/chess.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
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
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
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

export default Basics;
