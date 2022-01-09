import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Button,
  Modal,
} from 'react-native';

const GroceryInput = ({ onAddGrocery, visible, onClose }) => {
  const [enteredGrocery, setEnteredGrocery] = useState('');

  const groceryInputHandler = enteredText => {
    setEnteredGrocery(enteredText);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Grocery item"
          style={styles.input}
          onChangeText={groceryInputHandler}
          value={enteredGrocery}
          autoFocus={true}
        />
        <Pressable
          style={styles.button}
          onPress={onAddGrocery.bind(null, enteredGrocery, setEnteredGrocery)}
        >
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
        <Button title="CANCEL" color="red" onPress={onClose} />
      </View>
    </Modal>
  );
};
export default GroceryInput;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: 'darkcyan',
  },
  buttonText: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontSize: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
    padding: 10,
    width: '75%',
  },
});
