# Generated by Django 4.2.5 on 2023-09-27 15:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meal', models.CharField(max_length=50, unique=True)),
                ('description', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('category', models.CharField(choices=[('starters', 'Starters'), ('salads', 'Salads'), ('main_dishes', 'Main Dishes'), ('desserts', 'Desserts')], max_length=20)),
                ('status', models.IntegerField(choices=[(0, 'Available'), (1, 'Unavailable')], default=0)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_updated', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
