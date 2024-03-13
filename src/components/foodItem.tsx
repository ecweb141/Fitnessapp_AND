import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
interface typeofFood {
  label: string;
  cal: number;
  brand: string;
}
export const FoodListItem = ({ label, cal, brand }: typeofFood) => {
  return (
    <View>
      <View style={styles.SECOND}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{label}</Text>
          <View
            style={{
              display: "flex",
              // alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={styles.cal}>cal {cal}, </Text>
            <Text style={styles.cal}>{brand}</Text>
          </View>
        </View>
        <AntDesign name="pluscircleo" size={24} color={"royalblue"} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  cal: {
    fontSize: 16,
    color: "grey",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  SECOND: {
    backgroundColor: "rgba(202, 207, 230,0.27890)",
    // height:"100%",
    padding: 10,
    borderRadius: 12,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 2,
    opacity: 0.9,
  },
});
export default FoodListItem;
