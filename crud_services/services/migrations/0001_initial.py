# Generated by Django 3.0 on 2021-01-28 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('age', models.IntegerField()),
                ('address', models.CharField(blank=True, max_length=100, null=True)),
                ('job', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]