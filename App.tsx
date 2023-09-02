import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import GoalInput from "./components/goal-input";
import GoalList from "./components/goal-list";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState([
    { key: "1", title: "Learn React Native" },
  ]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoal.length === 0) {
      return;
    }
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), title: enteredGoal },
    ]);
    setEnteredGoal("");
    setShowModal(false);
  };

  const removeGoalhandler = (id: string) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.key !== id));
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setShowModal(true)} />
      <Text style={styles.header}> Goals </Text>
      <GoalInput
        showModal={showModal}
        enteredGoal={enteredGoal}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        setShowModal={setShowModal}
      />
      <GoalList goals={goals} removeGoalhandler={removeGoalhandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
});
