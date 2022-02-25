from django.contrib import admin
from django.contrib.auth.admin import UserAdmin, admin

from django.contrib.auth import get_user_model
CustomUser = get_user_model()

from .models import Advert


class AdvertInline(admin.TabularInline):
    model = Advert


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'first_name', 'last_name')
    list_filter = ()

    fieldsets = (
        ('Login', {'fields': (
            'email',
            'password',
            'last_login'
        )}),
        ('Information', {'fields': (
            'first_name',
            'last_name',
            'abstract',
            'description',
            'date_joined'
        )}),
        ('Permissions', {'fields': (
            'is_active',
            'is_staff'
        )}),
    )
    readonly_fields = ['last_login', 'date_joined']

    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': (
                    'email',
                    'first_name',
                    'last_name',
                    'abstract',
                    'description',
                    'is_staff',
                    'password1',
                    'password2'
                )
            }
        ),
    )

    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email', 'first_name', 'last_name')

    inlines = [AdvertInline]


@admin.register(Advert)
class AdvertAdmin(admin.ModelAdmin):
    list_display = ('title', 'author')
    list_filter = ()

    fieldsets = (
        (None, {'fields': (
            'title',
            'author'
        )}),
        ('Information', {'fields': (
            'abstract',
            'description',
            'date'
        )})
    )
    readonly_fields = ['date']

    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': (
                    'title',
                    'author',
                    'abstract',
                    'description',
                    'date'
                )
            }
        ),
    )

    search_fields = ('title', 'author')
    ordering = ('title', 'author')
