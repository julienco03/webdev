import pandas as pd
import glob
from fpdf import FPDF
from pathlib import Path

# Get a list with all filenames with a specific pattern
filepaths = glob.glob("invoices/*.xlsx")

for filepath in filepaths:
    # Format the pdf and add a page
    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_page()

    # Get invoice number and date
    filename = Path(filepath).stem
    invoice_nr, invoice_date = filename.split("-")

    # Display invoice number
    pdf.set_font(family="Times", size=16, style="B")
    pdf.cell(w=50, h=8, txt=f"Invoice nr. {invoice_nr}", border=0, ln=1)

    # Display invoice date
    pdf.set_font(family="Times", size=16, style="B")
    pdf.cell(w=50, h=8, txt=f"Date {invoice_date}", border=0, ln=1)

    # Get data from Excel file
    df = pd.read_excel(filepath, sheet_name="Sheet 1")

    # Add header to table
    columns = [item.replace("_", " ").title() for item in list(df.columns)]
    pdf.set_font(family="Times", size=10)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(w=30, h=8, txt=str(columns[0]), border=1)
    pdf.cell(w=60, h=8, txt=str(columns[1]), border=1)
    pdf.cell(w=40, h=8, txt=str(columns[2]), border=1)
    pdf.cell(w=30, h=8, txt=str(columns[3]), border=1)
    pdf.cell(w=30, h=8, txt=str(columns[4]), border=1, ln=1)

    # Add rows to table
    for index, row in df.iterrows():
        pdf.set_font(family="Times", size=10)
        pdf.set_text_color(80, 80, 80)
        pdf.cell(w=30, h=8, txt=str(row["product_id"]), border=1)
        pdf.cell(w=60, h=8, txt=str(row["product_name"]), border=1)
        pdf.cell(w=40, h=8, txt=str(row["amount_purchased"]), border=1)
        pdf.cell(w=30, h=8, txt=str(row["price_per_unit"]), border=1)
        pdf.cell(w=30, h=8, txt=str(row["total_price"]), border=1, ln=1)

    # Create the pdf files in PDFs directory
    pdf.output(f"PDFs/{filename}.pdf")
