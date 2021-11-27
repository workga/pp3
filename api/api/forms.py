# from django import forms
# from django.contrib.auth.forms import UserCreationForm, UserChangeForm
# from .models import CustomUser

# class CustomUserCreationForm(UserCreationForm):

#     class Meta:
#         model = CustomUser
#         fields = ('username', 'email')

# class CustomUserChangeForm(UserChangeForm):

#     class Meta:
#         model = CustomUser
#         fields = ('username', 'email')

#---------------------------------------------------------------------


# from django import forms
# from django.contrib.auth.forms import ReadOnlyPasswordHashField

# from django.contrib.auth import get_user_model
# CustomUser = get_user_model()


# class CustomUserCreationForm(forms.ModelForm):
#     """
#     New User Form. Requires password confirmation.
#     """
#     password1 = forms.CharField(
#         label='Password', widget=forms.PasswordInput
#     )
#     password2 = forms.CharField(
#         label='Confirm password', widget=forms.PasswordInput
#     )

#     class Meta:
#         model = CustomUser
#         fields = ('email', 'first_name', 'last_name')

#     def clean_password2(self):
#         # Check that the two password entries match
#         password1 = self.cleaned_data.get("password1")
#         password2 = self.cleaned_data.get("password2")
#         if password1 and password2 and password1 != password2:
#             raise forms.ValidationError("Passwords do not match")
#         return password2

#     def save(self, commit=True):
#         # Save the provided password in hashed format
#         user = super().save(commit=False)
#         user.set_password(self.cleaned_data["password1"])
#         if commit:
#             user.save()
#         return user


# class CustomUserChangeForm(forms.ModelForm):
#     """
#     Update User Form. Doesn't allow changing password in the Admin.
#     """
#     password = ReadOnlyPasswordHashField()

#     class Meta:
#         model = CustomUser
#         fields = (
#             'email', 'password', 'first_name', 'last_name', 'is_active',
#             'is_staff'
#         )

#     def clean_password(self):
#         # Password can't be changed in the admin
#         return self.initial["password"]
