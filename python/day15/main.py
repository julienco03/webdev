from functions import get_todos, write_todos
import time

now = time.strftime("%b %d, %Y %H:%M:%S")
print("It is", now)

while True:
    user_action = input("Type add, show, edit, complete or exit: ")
    user_action.strip()

    if user_action.startswith("add"):
        todo = user_action[4:] + "\n"
        todos = get_todos()
        todos.append(todo)
        write_todos(todos)

    elif user_action.startswith("show"):
        todos = get_todos()
        new_todos = [todo.strip("\n") for todo in todos]

        for index, item in enumerate(todos):
            item = item.strip("\n")
            row = f"{index + 1} - {item}"
            print(row)

    elif user_action.startswith("edit"):
        try:
            number = int(user_action[5:])
            index = number - 1

            todos = get_todos()
            new_todo = input("Enter new value: ")
            todos[index] = new_todo + "\n"
            write_todos(todos)

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

            todos = get_todos()
            removed_todo = todos.pop(index).strip("\n")
            write_todos(todos)

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
