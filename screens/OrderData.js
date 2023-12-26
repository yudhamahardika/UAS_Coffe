import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import moment from "moment";
import { CartItems } from '../Context';


const OrderData = () => {

   const { cart, setCart } = useContext(CartItems);
   const [modal, setModal] = useState(false);
   const total = cart
      .map((item) => Number(item.price.replace("₹", "")))
      .reduce((prev, curr) => prev + curr, 0);
   const route = useRoute();
   const restaurentName = route.params.restaurentName;
   const [tip, setTip] = useState(0);
   const date = moment().format("MMM Do YY");
   const time = moment().format("LT");
   const [seconds, setSeconds] = useState(10);
   useEffect(() => {
      if (seconds > 0) {
         setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
         setSeconds("BOOOOM!");
      }
   }, []);
   return (
      <ScrollView
         showVerticalScrollbar={false}
         style={{ backgroundColor: "white", flex: 1, marginTop: 36 }}
      >
         {/* <StatusBar style={{ backgroundColor: "red"}}/> */}
         <Text
            style={{
               color: "black",
               fontSize: 19,
               fontWeight: "bold",
               padding: 15,
               backgroundColor: "#FDEDEC",

               color: "#283747",
            }}
         >
            {restaurentName} has accepted your order at {time}
         </Text>

         <View
            style={{
               borderBottomColor: "#D0D0D0",
               borderBottomWidth: 1,
            }}
         />
         <View
            style={{
               borderBottomColor: "#D0D0D0",
               borderBottomWidth: 3,
            }}
         />
         <View
            style={{
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  backgroundColor: "#ff0090",
                  padding: 5,
                  borderRadius: 7,
               }}
            >
               <MaterialIcons style={{}} name="timer" size={26} color="#f0fff0" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "700",
                     paddingTop: 8,
                     color: "#ff8080",
                  }}
               >
                  Food preparation will begin shortly
               </Text>
               <MaterialCommunityIcons
                  style={{ marginLeft: 10 }}
                  name="food-variant"
                  size={28}
                  color="#ff4d4d"
               />
            </View>
            {/* <CountDown
            style={{ marginTop: 10 }}
            until={60 * 40}
            timeToShow={["M", "S"]}
            digitTxtStyle={{ color: "#1CC625" }}
            digitStyle={{
              backgroundColor: "#FFF",
              borderWidth: 2,
              borderColor: "#1CC625",
            }}
            onPress={() => alert("hello")}
            size={20}
          /> */}

            <Image
               style={{
                  width: 200,
                  height: 200,
                  backgroundColor: "white",
                  marginVertical: 16,
               }}
               source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDX04DyRkpYOMZbKFWf9DFV94SrafyNzpwG7nXG2QFcUqTGWmC0ISoM2uU5SUK4bQJw&usqp=CAU",
               }}
            />
         </View>
         <View
            style={{
               borderBottomColor: "#D0D0D0",
               borderBottomWidth: 3,
            }}
         />
         <View
            style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
         >
            <Image
               style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  borderColor: "#fff0f5",
                  borderWidth: 1,
               }}
               source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
               }}
            />
            <View style={{ marginLeft: 20 }}>
               <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
                  4 valets near the restaurent
               </Text>
               <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
                  Anyone will pick your order
               </Text>
            </View>
         </View>
         <View
            style={{
               borderBottomColor: "#D0D0D0",
               borderBottomWidth: 3,
            }}
         />
      </ScrollView>
   );
}

export default OrderData

const styles = StyleSheet.create({
   tbn: {
      color: "red"
   },
   btn: {
      borderWidth: 2,
   }
})