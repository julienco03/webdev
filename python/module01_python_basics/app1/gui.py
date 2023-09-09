import PySimpleGUI as sg
import functions
import time
import sys
import os


def resource_path(relative_path):
    """ Get absolute path to resource, works for dev and for PyInstaller """
    try:
        # PyInstaller creates a temp folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")

    return os.path.join(base_path, relative_path)


if not os.path.exists("todos.txt"):
    with open("todos.txt", "w") as file:
        pass

sg.theme("DarkBlue13")

clock = sg.Text("", key="clock")
label = sg.Text("Type in a To-Do:")
input_box = sg.InputText(tooltip="Enter todo", key="todo")
add_button = sg.Button(image_source=resource_path("add.png"), image_size=(100, 40), tooltip="Add todo", key="Add")
list_box = sg.Listbox(values=functions.get_todos(),
                      key="todos",
                      enable_events=True,
                      size=(44, 10))
edit_button = sg.Button("Edit")
complete_button = sg.Button(image_source=resource_path("complete.png"), image_size=(100, 52), tooltip="Complete todo",
                            key="Complete")
exit_button = sg.Button("Exit")

window = sg.Window("My To-Do App",
                   layout=[
                       [clock],
                       [label],
                       [input_box, add_button],
                       [list_box, edit_button, complete_button],
                       [exit_button]],
                   font=("Helvetica", 20))

while True:
    event, values = window.read(timeout=500)
    window["clock"].update(value=time.strftime("%b %d, %Y %H:%M:%S"))

    match event:

        case "Add":
            if values["todo"] == "":
                continue

            todos = functions.get_todos()
            new_todo = values["todo"] + "\n"
            todos.append(new_todo)
            functions.write_todos(todos)

            window["todos"].update(values=todos)
            window["todo"].update(value="")

        case "Edit":
            try:
                todo_to_edit = values["todos"][0]
                new_todo = values["todo"] + "\n"

                todos = functions.get_todos()
                index = todos.index(todo_to_edit)
                todos[index] = new_todo
                functions.write_todos(todos)

                window["todos"].update(values=todos)
            except IndexError:
                sg.popup("Please select an item first.", font=("Helvetica", 20))

        case "Complete":
            try:
                todo_to_remove = values["todos"][0]

                todos = functions.get_todos()
                todos.remove(todo_to_remove)
                functions.write_todos(todos)

                window["todos"].update(values=todos)
                window["todo"].update(value="")
            except IndexError:
                sg.popup("Please select an item first.", font=("Helvetica", 20))

        case "Exit":
            break

        case "todos":
            window["todo"].update(value=values["todos"][0])

        case sg.WIN_CLOSED:
            break

window.close()
