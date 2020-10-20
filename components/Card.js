import React from "react";
import { View, StyleSheet,Text } from "react-native";
import Icon2 from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "@expo/vector-icons/Ionicons";

const Card = ({ item,bg,ico,title}) => {

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bg,
      }}
    >
      <View style={styles.col}>
        <Icon
          name={ico}
          size={30}
          color={bg == "red" ? "#FFF" : "red"}
        />
      
          <Icon2
            style={{ marginLeft: 50 }}
            name="dots-vertical"
            size={30}
            color="#b8b8aa"
          />
       
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={{
          ...styles.number,
          color: bg == "red" ? "#FFF" : "#000",
        }}
      >
        {item}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 130,
    borderRadius: 30,
    padding: 15,
    marginLeft: 20,
  },
  col: {
    flexDirection: "row",
  },
  title: {
    marginTop: 90,
    color: "#b8b8aa",
    fontWeight: "bold",
    fontSize: 12,
  },
  number: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
export default Card;
