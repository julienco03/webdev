from django import forms


class ApplicationForm(forms.Form):
    first_name = forms.CharField(max_length=20)
    last_name = forms.CharField(max_length=20)
    email = forms.EmailField(max_length=50)
    date = forms.DateField()
    occupation = forms.CharField(max_length=20)
