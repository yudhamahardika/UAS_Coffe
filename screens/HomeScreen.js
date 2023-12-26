import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Pressable, ScrollView, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import { TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import Hotels from '../components/Cafe';
import hotels from "../data/cafee";
import { useNavigation } from "@react-navigation/native";


const restaurent = hotels[0];
console.log(restaurent);

const HomeScreen = () => {
   const [location, setLocation] = useState(null);
   const [errorMsg, setErrorMsg] = useState(null);
   const [searchQuery, setSearchQuery] = useState("");
   const [data, setData] = useState([]);
   const navigation = useNavigation();

   const handleSearchInputChange = (text) => {
      setSearchQuery(text);
   };

   return (
      <KeyboardAvoidingView style={{ flex: 1, marginTop: 25 }}>
         <ScrollView style={{ flex: 1 }}>
            <SafeAreaView>
               <View style={styles.container}>
                  <EvilIcons
                     style={{ marginRight: 10 }}
                     name="search"
                     size={28}
                     color="#cb202d"
                  />
                  <TextInput
                     style={{ fontSize: 18 }}
                     placeholder="Restaurant name, cuisine, or a dish"
                     value={searchQuery}
                     onChangeText={handleSearchInputChange} // Hubungkan dengan fungsi handleSearchInputChange
                  />
               </View>
               <Pressable style={{ marginLeft: 5 }}>
                  <View
                     style={{
                        flexDirection: "row",
                        alignItems: "center",
                     }}
                  >
                  </View>
               </Pressable>
               <Pressable>
                  <View
                     style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 11,
                     }}
                  >
                  </View>
               </Pressable>
               {/* <Hotels restaurent={restaurent}/> */}
               <FlatList
                  data={hotels.filter((hotel) =>
                     hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )}
                  renderItem={({ item }) => <Hotels restaurent={item} />}
               />
            </SafeAreaView>
         </ScrollView>
      </KeyboardAvoidingView>
   );
}

export default HomeScreen

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      padding: 5,
      alignItems: "center",
      borderWidth: 2,
      borderRadius: 7,
      marginLeft: 9,
      marginTop: 10,
      marginRight: 9,
      backgroundColor: "#e7e7e7",
      borderColor: "#A0A0A0",
   },
   swipeable: {
      flexDirection: "row",
      alignItems: "center",
      margin: 10,
   },
   swipeableText: {
      backgroundColor: "#F5F5F5",
      borderWidth: 1,
      borderColor: "#DCDCDC",
      borderRadius: 7,
      padding: 7,
      margin: 5,
   },
   image: {
      margin: 10,
      borderRadius: 10,
      width: 158,
      height: 158,
      aspectRatio: 5 / 3,
      resizeMode: "cover",
   },
   MiddleImage: {
      width: 70,
      height: 70,
      borderRadius: 35,
      resizeMode: "cover",
   }
});