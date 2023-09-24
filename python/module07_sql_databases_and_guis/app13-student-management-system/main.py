from PyQt6.QtWidgets import QApplication, QLabel, QWidget, QGridLayout, QLineEdit, \
    QPushButton, QMainWindow, QTableWidget, QTableWidgetItem, QDialog, QVBoxLayout, \
    QComboBox, QMessageBox
from PyQt6.QtGui import QAction
from PyQt6.QtCore import Qt
import sqlite3
import sys


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        # Window configuration
        self.setWindowTitle("Student Management System")
        self.setMinimumSize(600, 400)

        # Add menubar
        file_menu_item = self.menuBar().addMenu("&File")
        help_menu_item = self.menuBar().addMenu("&Help")
        edit_menu_item = self.menuBar().addMenu("&Edit")

        # Add 'File' menu items
        add_student_action = QAction("Add Student", self)
        add_student_action.triggered.connect(self.insert_data)
        file_menu_item.addAction(add_student_action)

        # Add 'About' menu items
        about_action = QAction("About", self)
        help_menu_item.addAction(about_action)

        # Add 'Edit' menu items
        search_action = QAction("Search", self)
        search_action.triggered.connect(self.search)
        edit_menu_item.addAction(search_action)

        # Add table
        self.table = QTableWidget()
        self.table.setColumnCount(4)
        self.table.setHorizontalHeaderLabels(["ID", "Name", "Course", "Mobile"])
        self.table.verticalHeader().setVisible(False)
        self.setCentralWidget(self.table)

    def load_data(self):
        """ Loads the database file and inserts the data in the table. """
        connection = sqlite3.connect("database.db")
        result = connection.execute("SELECT * FROM students;")
        self.table.setRowCount(0)
        for row_number, row_data in enumerate(result):
            self.table.insertRow(row_number)
            for column_number, column_data in enumerate(row_data):
                self.table.setItem(row_number, column_number, QTableWidgetItem(str(column_data)))
        connection.close()

    def insert_data(self):
        """ Opens a dialog window that allows you to insert a new student into the database. """
        dialog = InsertDialog()
        dialog.exec()

    def search(self):
        """ Opens a dialog window with which you can search for a student. """
        dialog = SearchDialog()
        dialog.exec()


class InsertDialog(QDialog):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Insert Student Data")
        self.setFixedSize(300, 300)

        layout = QVBoxLayout()

        self.student_name = QLineEdit()
        self.student_name.setPlaceholderText("Name")
        layout.addWidget(self.student_name)

        self.course_name = QComboBox()
        courses = ["Biology", "Math", "Astronomy", "Physics"]
        self.course_name.addItems(courses)
        layout.addWidget(self.course_name)

        self.mobile = QLineEdit()
        self.mobile.setPlaceholderText("Mobile")
        layout.addWidget(self.mobile)

        submit_button = QPushButton("Submit")
        submit_button.clicked.connect(self.add_student)
        layout.addWidget(submit_button)

        self.setLayout(layout)

    def add_student(self):
        """ Gets the data from the input fields and inserts it in the database. """
        name = self.student_name.text()
        course = self.course_name.itemText(self.course_name.currentIndex())
        mobile = self.mobile.text()

        connection = sqlite3.connect("database.db")
        cursor = connection.cursor()
        cursor.execute("INSERT INTO students (name, course, mobile) VALUES (?, ?, ?)",
                       (name, course, mobile))
        connection.commit()
        cursor.close()
        connection.close()

        # Refresh main window
        main_window.load_data()


class SearchDialog(QDialog):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Search For A Student")
        self.setFixedSize(300, 300)

        layout = QVBoxLayout()

        self.student_name = QLineEdit()
        self.student_name.setPlaceholderText("Text")

        search_button = QPushButton("Search")
        search_button.clicked.connect(self.search_student)

        layout.addWidget(self.student_name)
        layout.addWidget(search_button)

        self.setLayout(layout)

    def search_student(self):
        main_window.table.clearSelection()
        student_name = self.student_name.text().lower()
        student_found = False

        for row in range(main_window.table.rowCount()):
            item = main_window.table.item(row, 1)
            if item and student_name in item.text().lower():
                student_found = True
                for column in range(main_window.table.columnCount()):
                    main_window.table.item(row, column).setSelected(True)

        if not student_found:
            msg = QMessageBox()
            msg.setWindowTitle("No Records")
            msg.setText("No matching records found.")
            msg.setIcon(QMessageBox.Icon.Warning)
            msg.exec()


app = QApplication(sys.argv)
main_window = MainWindow()
main_window.show()
main_window.load_data()
sys.exit(app.exec())
