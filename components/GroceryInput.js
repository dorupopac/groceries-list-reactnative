import { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';

const GroceryInput = ({ onAddGrocery }) => {
  const [enteredGrocery, setEnteredGrocery] = useState('');

  const groceryInputHandler = enteredText => {
    setEnteredGrocery(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Grocery name"
        style={styles.input}
        onChangeText={groceryInputHandler}
        value={enteredGrocery}
      />
      <Pressable
        style={styles.button}
        onPress={onAddGrocery.bind(null, enteredGrocery, setEnteredGrocery)}
      >
        <Text style={styles.buttonText}>ADD</Text>
      </Pressable>
    </View>
  );
};
export default GroceryInput;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'darkcyan',
  },
  buttonText: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '75%',
  },
});
