import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const App = () => {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder="Groceries List"
          style={{
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            width: '80%',
          }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
