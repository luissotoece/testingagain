# Generated by Django 5.1.6 on 2025-03-25 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scholarships', '0002_alter_scholarship_deadline'),
    ]

    operations = [
        migrations.AddField(
            model_name='scholarship',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
