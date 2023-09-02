import { FlatList, StyleSheet, Text, View } from "react-native";
import Goal from "./goal";

type GoalListProps = {
  goals: { key: string; title: string }[];
  removeGoalhandler: (id: string) => void;
};

const GoalList = ({ goals, removeGoalhandler }: GoalListProps) => {
  return (
    <View>
      <Text style={styles.list}>Goal List</Text>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Goal
            id={item.key}
            title={item.title}
            removeGoalHandler={removeGoalhandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    textDecorationLine: "underline",
    fontSize: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default GoalList;
