# Generated by Django 3.2.3 on 2022-01-01 18:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0003_alter_chatmessage_room'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatmessage',
            name='room',
            field=models.CharField(max_length=1000000),
        ),
    ]
