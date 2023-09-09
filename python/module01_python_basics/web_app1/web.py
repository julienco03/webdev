import streamlit as st
import functions
import os

if not os.path.exists("todos.txt"):
    with open("todos.txt", "w") as file:
        pass

todos = functions.get_todos()


def add_todo():
    new_todo = st.session_state["new_todo"] + "\n"
    if new_todo not in todos:
        todos.append(new_todo)
        functions.write_todos(todos)
        st.session_state["new_todo"] = ""


def complete_todo(idx):
    todos.pop(idx)
    functions.write_todos(todos)
    del st.session_state[todo]
    st.experimental_rerun()


st.title("My To-Do App")
st.subheader("This app is to increase your productivity.")

for index, todo in enumerate(todos):
    checkbox = st.checkbox(todo, key=todo)
    if checkbox:
        complete_todo(index)

st.text_input(label="", placeholder="Add new todo...", on_change=add_todo, key="new_todo")

# DEBUG
# st.session_state
