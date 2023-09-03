while True:
    user_action = input("Type add, show, edit, complete or exit: ")
    user_action.strip()

    match user_action:
        case "add":
            todo = input("Enter a todo: ") + "\n"

            with open("todos.txt", "r") as file:
                todos = file.readlines()

            todos.append(todo)

            with open("todos.txt", "w") as file:
                file.writelines(todos)
        case "show":
            with open("todos.txt", "r") as file:
                todos = file.readlines()

            new_todos = [todo.strip("\n") for todo in todos]

            for index, item in enumerate(todos):
                item = item.strip("\n")
                row = f"{index + 1} - {item}"
                print(row)
        case "edit":
            number = int(input("Number of the todo to edit: "))
            number = number - 1

            with open("todos.txt", "r") as file:
                todos = file.readlines()

            new_todo = input("Enter new value: ")
            todos[number] = new_todo + "\n"

            with open("todos.txt", "w") as file:
                file.writelines(todos)
        case "complete":
            number = int(input("Number of the todo to complete: "))

            with open("todos.txt", "r") as file:
                todos = file.readlines()

            removed_todo = todos.pop(number - 1).strip("\n")

            with open("todos.txt", "w") as file:
                file.writelines(todos)

            message = f"Todo \"{removed_todo}\" was removed from the list."
            print(message)
        case "exit":
            break

print("Bye!")
