# Generated by Django 4.2.5 on 2023-09-26 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Form',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=20)),
                ('mail', models.EmailField(max_length=254)),
                ('date', models.DateField()),
                ('occupation', models.CharField(max_length=50)),
            ],
        ),
    ]
