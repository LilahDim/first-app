import { Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

type GoalProps = {
  title: string;
  removeGoalHandler: (key: string) => void;
  id: string;
};

export default function Goal({ title, removeGoalHandler, id }: GoalProps) {
  console.log(id);
  return (
    <TouchableOpacity activeOpacity={0.55} style={styles.container}>
      <Text> {title} </Text>
      <Pressable style={styles.button} onPress={() => removeGoalHandler(id)}>
        -
      </Pressable>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#f1ecec",
    width: 300,
  },
  button: {
    color: "white",
    backgroundColor: "red",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 15,
  },
});
