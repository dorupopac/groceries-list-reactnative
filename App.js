import { useState } from 'react';
import {
  StyleSheet,
  View,
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
  const [groceries, setGroceries] = useState([]);

  const addGroceryHandler = (enteredGrocery, setEnteredGrocery) => {
    if (!!enteredGrocery.trim())
      setGroceries(prevState => [
        ...prevState,
        { id: Math.random().toString(), value: enteredGrocery },
      ]);
    setEnteredGrocery('');
  };

  const deleteGroceryHandler = id => {
    setGroceries(prevState => prevState.filter(grocery => grocery.id !== id));
  };

  return (
    <DismissKeyboard>
      <View style={styles.screen}>
        <GroceryInput onAddGrocery={addGroceryHandler} />
        <FlatList
          keyExtractor={(item, i) => item.id}
          data={groceries}
          renderItem={itemData => (
            <GroceryItem
              onPress={null}
              onDelete={deleteGroceryHandler}
              title={itemData.item.value}
              id={itemData.item.id}
            />
          )}
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
