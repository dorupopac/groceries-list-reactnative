import { View, Text, StyleSheet } from 'react-native';

const GroceryItem = ({ title }) => {
  return (
    <View>
      <Text style={styles.listItem}>{title}</Text>
    </View>
  );
};
export default GroceryItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
  },
});
