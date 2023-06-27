import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Feed() {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FEED</Text>
      <TouchableOpacity 
        style={{ padding: 10, backgroundColor: 'lightblue'}} 
        onPress={() => navigation.navigate('profile')}
      >
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
