import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const App = () => {
  const [enteredGrocery, setEnteredGrocery] = useState('');
  const [groceries, setGroceries] = useState([]);

  const groceryInputHandler = enteredText => {
    setEnteredGrocery(enteredText);
  };

  const addGroceryHandler = () => {
    if (!!enteredGrocery.trim())
      setGroceries(prevState => [...prevState, enteredGrocery]);
    setEnteredGrocery('');
  };

  return (
    <DismissKeyboard>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Grocery name"
            style={styles.input}
            onChangeText={groceryInputHandler}
            value={enteredGrocery}
          />
          <Pressable style={styles.button} onPress={addGroceryHandler}>
            <Text style={styles.buttonText}>ADD</Text>
          </Pressable>
        </View>
        <View>
          {groceries.map((grocery, i) => (
            <View key={grocery + i}>
              <Text style={styles.listItem}>{grocery}</Text>
            </View>
          ))}
        </View>
      </View>
    </DismissKeyboard>
  );
};
export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 70,
  },
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
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
  },
});
