import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GroceryItem from './components/GroceryItem';
import GroceryInput from './components/GroceryInput';

const App = () => {
  const [groceries, setGroceries] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGroceryHandler = (enteredGrocery, setEnteredGrocery) => {
    if (!enteredGrocery.trim()) return;
    setGroceries(prevState => [
      ...prevState,
      { id: Math.random().toString(), value: enteredGrocery },
    ]);
    setEnteredGrocery('');
    setIsAddMode(false);
  };

  const deleteGroceryHandler = id => {
    setGroceries(prevState => prevState.filter(grocery => grocery.id !== id));
  };

  const closeModalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.main}>
      <View style={styles.wrapper}>
        <Button title="Add New Grocery" onPress={() => setIsAddMode(true)} />
        <GroceryInput
          visible={isAddMode}
          onAddGrocery={addGroceryHandler}
          onClose={closeModalHandler}
        />
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
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
  wrapper: {
    marginHorizontal: 30,
    marginTop: 70,
  },
});
