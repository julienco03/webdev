from fpdf import FPDF
from pathlib import Path
import glob

filepaths = glob.glob("textfiles/*.txt")
pdf = FPDF(orientation="P", unit="mm", format="A4")

for filepath in filepaths:
    pdf.add_page()

    # Add filename as title
    filename = Path(filepath).stem
    pdf.set_font("Times", size=20, style="B")
    pdf.cell(w=0, h=16, txt=filename.title(), ln=1)

    # Add file content as paragraph
    with open(filepath, "r") as file:
        file_content = file.read()
    pdf.set_font("Times", size=14)
    pdf.multi_cell(w=0, h=6, txt=file_content)

pdf.output("output.pdf")
