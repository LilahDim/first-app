import { Dispatch, SetStateAction } from "react";
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Text,
} from "react-native";

type GoalInputProps = {
  enteredGoal: string;
  goalInputHandler: (enteredText: string) => void;
  addGoalHandler: (event: GestureResponderEvent) => void;
  showModal: boolean;
  setShowModal: (value: SetStateAction<boolean>) => void;
};

const GoalInput = ({
  enteredGoal,
  goalInputHandler,
  addGoalHandler,
  showModal,
  setShowModal,
}: GoalInputProps) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.middle}>
        <Text style={styles.title}> Create A New Goal </Text>
        <View style={styles.form}>
          <TextInput
            placeholder="Workout Today..."
            style={styles.input}
            value={enteredGoal}
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonGroup}>
            <Button title="Add Goal" onPress={addGoalHandler} />
            <Button
              title="Cancel"
              color="red"
              onPress={() => setShowModal(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  middle: {
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    width: 200,
    padding: 10,
    display: "flex",
    color: "grey",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  form: {
    alignItems: "center",
    gap: 5,
  },
});

export default GoalInput;
