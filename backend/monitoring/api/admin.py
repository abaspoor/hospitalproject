from django.contrib import admin

from api.mainmodels.hospitals import Hospital


# Register your models here.
@admin.register(Hospital)
class EventAdmin(admin.ModelAdmin):
    fields = ('universityuser', 'user', 'university', 'city', 'name')
    list_display = ('universityuser', 'user', 'university', 'city', 'name')