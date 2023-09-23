from PyQt6.QtWidgets import QApplication, QWidget, QGridLayout, QLabel, QLineEdit, QComboBox, QPushButton
import sys


class SpeedCalculator(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Speed Calculator")
        grid = QGridLayout()
        self.setLayout(grid)

        distance_label = QLabel("Distance:")
        self.distance_input = QLineEdit()

        time_label = QLabel("Time (hours):")
        self.time_input = QLineEdit()

        self.unit_combobox = QComboBox()
        self.unit_combobox.addItems(["Metric (km)", "Imperial (miles)"])

        calculate_button = QPushButton("Calculate")
        calculate_button.clicked.connect(self.calculate_speed)

        self.output_label = QLabel("")

        grid.addWidget(distance_label, 0, 0)
        grid.addWidget(self.distance_input, 0, 1)
        grid.addWidget(self.unit_combobox, 0, 2)
        grid.addWidget(time_label, 1, 0)
        grid.addWidget(self.time_input, 1, 1)
        grid.addWidget(calculate_button, 2, 1)
        grid.addWidget(self.output_label, 3, 0, 1, 2)

    def calculate_speed(self):
        distance = int(self.distance_input.text())
        time = int(self.time_input.text())
        average_speed = round(distance / time, 2)
        unit = "mph" if self.unit_combobox.currentText().startswith("Imperial") else "km/h"
        self.output_label.setText(f"Average Speed: {average_speed} {unit}")


app = QApplication(sys.argv)
speed_calculator = SpeedCalculator()
speed_calculator.show()
sys.exit(app.exec())
