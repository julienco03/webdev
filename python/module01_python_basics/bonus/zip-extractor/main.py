import PySimpleGUI as sg
import zip_extractor

row_archive = [sg.Text("Select archive: "),
               sg.Input(),
               sg.FileBrowse("Choose", key="file")]

row_folder = [sg.Text("Select dest dir:"),
              sg.Input(),
              sg.FolderBrowse("Choose", key="folder")]

extract_button = sg.Button("Extract")
success_message = sg.Text(key="success", text_color="green")

window = sg.Window("File Extractor", layout=[row_archive, row_folder, [extract_button, success_message]])

while True:
    event, values = window.read()

    match event:
        case "Extract":
            archivepath = values["file"]
            dest_dir = values["folder"]
            zip_extractor.extract_archive(archivepath, dest_dir)
            window["success"].update(value="Extraction completed!")
        case sg.WIN_CLOSED:
            break

window.close()
