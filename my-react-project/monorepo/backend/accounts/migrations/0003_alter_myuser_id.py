# Generated by Django 5.1.6 on 2025-04-01 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_scholarship_myuser_failed_login_attempts_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
