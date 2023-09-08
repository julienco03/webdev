import zipfile
import pathlib


def make_archive(filepaths, dst_dir):
    dst_path = pathlib.Path(dst_dir, "compressed.zip")
    with zipfile.ZipFile(dst_path, "w") as archive:
        for filepath in filepaths:
            filepath = pathlib.Path(filepath)
            archive.write(filepath, arcname=filepath.name)


if __name__ == "__main__":
    make_archive(filepaths=["main.py"], dst_dir="dst")
