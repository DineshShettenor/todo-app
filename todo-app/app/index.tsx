import { Link } from "expo-router";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AppButton } from "@/components";
import TodoContext from "@/context/Todo.context";
import Card from "@/components/Card";

export default function Index() {
  const { todos } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.todoContainer}>
        <Text style={styles.todoHeader}>Todos</Text>

        {todos.reverse().map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
        {todos.length === 0 && (
          <Text style={styles.noTodoText}>No todos found</Text>
        )}
      </ScrollView>
      <View>
        <Link asChild href="/create">
          <AppButton onPress={() => {}}>Create Todo</AppButton>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  todoContainer: {
    marginVertical: 5,
    padding: 10,
  },
  todoHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  noTodoText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
});
