from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from django.contrib import admin

# You can customize the UserAdmin further if needed
admin.site.unregister(User)  # Unregister the User model
admin.site.register(User, UserAdmin)  # Register it again with UserAdmin
