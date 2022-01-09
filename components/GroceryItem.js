import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GroceryItem = ({ title, onDelete, id }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onLongPress={onDelete.bind(null, id)}>
      <View>
        <Text style={styles.listItem}>{title}</Text>
      </View>
    </TouchableOpacity>
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
