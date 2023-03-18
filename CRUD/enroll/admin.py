from django.contrib import admin
from .models import adduser
# Register your models here.
@admin.register(adduser)
class useradmin(admin.ModelAdmin):
    list_display= ['id','name','email','password']
