import React, { useContext } from "react";
import {
   ScrollView,
   StyleSheet,
   Text,
   View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { CartItems } from "../Context";
import menu from "../data/menuData";
import { Pressable } from "react-native";
import ViewCart from "../components/ViewCart";

const HotelRoom = () => {
   const route = useRoute();
   console.log(menu);
   console.log(route);
   console.log("📌", route.params)
   const navigation = useNavigation();
   const { cart, setCart, onPress, additems, setAdditems } = useContext(CartItems);
   console.log(cart)
   const { menuData } = useContext(CartItems);
   const items = menu;
   const restaurentName = route.params.name;
   const restaurentTime = route.params.time;
   const latitude = route.params.latitude;
   const longitude = route.params.longitude;
   console.log("name: ", restaurentName);
   const Onpress = () => {
      console.warn("button pressed");
   };
   console.log(cart);
   console.log("no of items in cart", cart.length);

   return (
      <SafeAreaView>
         <ScrollView style={{ backgroundColor: "white" }}>
            {/* <Pressable> */}
            <View
               style={{
                  marginTop: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
               }}
            >
               <Pressable
                  style={{
                     paddingHorizontal: 10,
                     width: 36,
                     height: 36,
                     marginLeft: 10,
                     alignItems: "center",
                     justifyContent: "center",
                     borderRadius: 18,
                     backgroundColor: "#141E30",
                     paddingLeft: 5,
                  }}
               >
                  <Ionicons
                     onPress={() => navigation.goBack()}
                     name="chevron-back-outline"
                     style={{
                        textAlign: "center",
                        color: "white",
                     }}
                     size={26}
                     color="white"
                  />
               </Pressable>

               <View
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                     paddingHorizontal: 14,
                  }}
               >
               </View>
            </View>
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
               }}
            >
               <View>
                  <Text style={styles.name}>{route.params.name}</Text>
                  <Text style={styles.cuisines}>{route.params.cuisines}</Text>
                  <Text style={styles.adress}>{route.params.smalladress}</Text>
               </View>
               <Pressable style={styles.rightContainer}>
                  <Pressable
                     onPress={() =>
                        navigation.navigate("Review", {
                           aggregate_rating: route.params.aggregate_rating,
                           no_of_Delivery: route.params.no_of_Delivery,
                        })
                     }
                     style={{
                        marginTop: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#3CB371",
                        padding: 4,
                        paddingHorizontal: 10,
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 5,
                     }}
                  >
                     <Text
                        style={{
                           marginHorizontal: 3,
                           fontSize: 20,
                           fontWeight: "bold",
                           color: "white",
                        }}
                     >
                        {route.params.aggregate_rating}
                     </Text>
                  </Pressable>
                  <Pressable
                     onPress={() => navigation.navigate("Photos")}
                     style={{
                        marginTop: 10,
                        backgroundColor: "#FFFFFF",
                        paddingHorizontal: 10,
                        padding: 5,
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 5,
                     }}
                  >
                     <Text style={{ color: "white", fontWeight: "bold" }}>30</Text>
                     <Text style={{ color: "white", fontWeight: "bold" }}>PHOTOS</Text>
                  </Pressable>
               </Pressable>
            </View>
            <View
               style={{
                  padding: 3,
                  marginLeft: 6,
                  marginRight: 10,
                  flexDirection: "row",
                  alignItems: "center",
               }}
            >
               <View
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                     // paddingHorizontal: 10,
                  }}
               >
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                  }}
               >
                  <MaterialCommunityIcons
                     style={{
                        backgroundColor: "#E0E0E0",
                        borderRadius: 50,
                        padding: 8,
                     }}
                     name="brightness-percent"
                     size={21}
                     color="blue"
                  />
               </View>
            </View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
               <Text style={{ fontSize: 17, fontWeight: "700" }}>Full Menu</Text>
               <Text
                  style={{
                     backgroundColor: "#ff1493",
                     width: 74,
                     height: 3,
                     marginTop: 6,
                  }}
               ></Text>
            </View>
            {menuData.map((item, index) => (
               <Menu
                  additems={additems}
                  setAdditems={setAdditems}
                  cart={cart}
                  setCart={setCart}
                  key={index}
                  menu={item}
                  restaurentName={restaurentName}
               />
            ))}
            {/* </Pressable> */}
         </ScrollView>

         <ViewCart
            restaurentName={restaurentName}
            latitude={latitude}
            longitude={longitude}
            restaurentTime={restaurentTime}
         />
      </SafeAreaView>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addItemToCart: (product) =>
         dispatch({
            type: "ADD_TO_CART",
            payload: product,
         }),
   };
};

export default HotelRoom;

const styles = StyleSheet.create({
   name: {
      marginHorizontal: 10,
      paddingBottom: 6,
      fontSize: 20,
      fontWeight: "700",
   },
   adress: {
      fontSize: 17,
      color: "gray",
      marginHorizontal: 10,
   },
   cuisines: {
      marginHorizontal: 10,
      paddingBottom: 6,
      fontSize: 17,
      color: "#303030",
   },
   rightContainer: {
      alignItems: "flex-end",
      marginBottom: 20,
   },
});
