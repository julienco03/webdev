# Generated by Django 4.2.5 on 2023-09-26 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobapplication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='mail',
            field=models.EmailField(max_length=50),
        ),
        migrations.AlterField(
            model_name='form',
            name='occupation',
            field=models.CharField(max_length=20),
        ),
    ]
