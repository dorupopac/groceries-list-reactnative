import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import GroceryItem from './components/GroceryItem';
import GroceryInput from './components/GroceryInput';

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
      setGroceries(prevState => [
        ...prevState,
        { id: Math.random().toString(), value: enteredGrocery },
      ]);
    setEnteredGrocery('');
  };

  return (
    <DismissKeyboard>
      <View style={styles.screen}>
        <GroceryInput
          groceryInputHandler={groceryInputHandler}
          addGroceryHandler={addGroceryHandler}
          enteredGrocery={enteredGrocery}
        />
        <FlatList
          keyExtractor={(item, i) => item.id}
          data={groceries}
          renderItem={itemData => <GroceryItem title={itemData.item.value} />}
        />
      </View>
    </DismissKeyboard>
  );
};
export default App;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    marginHorizontal: 30,
    marginTop: 70,
  },
});
