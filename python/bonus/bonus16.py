import PySimpleGUI as sg

row_src = [sg.Text("Select files to compress:"),
           sg.Input(),
           sg.FilesBrowse("Choose")]

row_dst = [sg.Text("Select destination folder:"),
           sg.Input(),
           sg.FolderBrowse("Choose")]

compress_button = sg.Button("Compress")

window = sg.Window("File Compressor", layout=[row_src, row_dst, [compress_button]])
window.read()
window.close()
