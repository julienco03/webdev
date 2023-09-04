while True:
    user_action = input("Type add, show, edit, complete or exit: ")
    user_action.strip()

    if user_action.startswith("add"):
        todo = user_action[4:] + "\n"

        with open("todos.txt", "r") as file:
            todos = file.readlines()

        todos.append(todo)

        with open("todos.txt", "w") as file:
            file.writelines(todos)

    elif user_action.startswith("show"):
        with open("todos.txt", "r") as file:
            todos = file.readlines()

        new_todos = [todo.strip("\n") for todo in todos]

        for index, item in enumerate(todos):
            item = item.strip("\n")
            row = f"{index + 1} - {item}"
            print(row)

    elif user_action.startswith("edit"):
        try:
            number = int(user_action[5:])
            index = number - 1

            with open("todos.txt", "r") as file:
                todos = file.readlines()

            new_todo = input("Enter new value: ")
            todos[index] = new_todo + "\n"

            with open("todos.txt", "w") as file:
                file.writelines(todos)
        except ValueError:
            print("Command is not valid.")
            continue
        except IndexError:
            print("There is no todo with that number.")
            continue

    elif user_action.startswith("complete"):
        try:
            number = int(user_action[9:])
            index = number - 1

            with open("todos.txt", "r") as file:
                todos = file.readlines()

            removed_todo = todos.pop(index).strip("\n")

            with open("todos.txt", "w") as file:
                file.writelines(todos)

            message = f"Todo \"{removed_todo}\" was removed from the list."
            print(message)
        except ValueError:
            print("Command is not valid.")
            continue
        except IndexError:
            print("There is no todo with that number.")
            continue

    elif user_action.startswith("exit"):
        break

    else:
        print("Command is not valid.")

print("Bye!")
