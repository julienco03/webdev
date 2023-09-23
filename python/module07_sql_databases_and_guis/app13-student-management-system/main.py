from PyQt6.QtWidgets import QApplication, QLabel, QWidget, QGridLayout, QLineEdit,\
    QPushButton, QMainWindow, QTableWidget, QTableWidgetItem
from PyQt6.QtGui import QAction
from datetime import datetime
import sqlite3
import sys


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Student Management System")
        self.setMinimumSize(600, 400)

        file_menu_item = self.menuBar().addMenu("&File")
        help_menu_item = self.menuBar().addMenu("&Help")

        add_student_action = QAction("Add Student", self)
        file_menu_item.addAction(add_student_action)

        about_action = QAction("About", self)
        help_menu_item.addAction(about_action)

        self.table = QTableWidget()
        self.table.setColumnCount(4)
        self.table.setHorizontalHeaderLabels(["ID", "Name", "Course", "Mobile"])
        self.table.verticalHeader().setVisible(False)
        self.setCentralWidget(self.table)

    def load_data(self):
        connection = sqlite3.connect("database.db")
        result = connection.execute("SELECT * FROM students;")
        self.table.setRowCount(0)
        for row_number, row_data in enumerate(result):
            self.table.insertRow(row_number)
            for column_number, column_data in enumerate(row_data):
                self.table.setItem(row_number, column_number, QTableWidgetItem(str(column_data)))
        connection.close()


app = QApplication(sys.argv)
student_management_system = MainWindow()
student_management_system.show()
student_management_system.load_data()
sys.exit(app.exec())

