import PySimpleGUI as sg
import zip_creator

row_src = [sg.Text("Select files to compress:"),
           sg.Input(),
           sg.FilesBrowse("Choose", key="files")]

row_dst = [sg.Text("Select destination folder:"),
           sg.Input(),
           sg.FolderBrowse("Choose", key="folder")]

compress_button = sg.Button("Compress")
success_message = sg.Text(key="success", text_color="green")

window = sg.Window("File Compressor", layout=[row_src, row_dst, [compress_button, success_message]])

while True:
    event, values = window.read()

    match event:
        case "Compress":
            filepaths = values["files"].split(";")
            folder = values["folder"]
            zip_creator.make_archive(filepaths, folder)
            window["success"].update(value="Compression completed!")
        case sg.WIN_CLOSED:
            break

window.close()
