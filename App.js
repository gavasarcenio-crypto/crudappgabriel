import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "@react-navigation/native";
import HomeScreen from "./src/screens/home_screen";
import CardPersonal from "./src/components/music_item";
import AddEditScreen from "./src/screens/add_edit_music";
import StyleSheet from "./src/styles/styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="AddMusic" component={AddEditScreen} options={{ title: 'Add Music' }} />
        <Stack.Screen name="EditMusic" component={AddEditScreen} options={{ title: 'Edit Music' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}