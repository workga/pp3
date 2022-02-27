from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)
from django.db import models
from django.utils import timezone
from djorm_pgfulltext.models import SearchManager
from djorm_pgfulltext.fields import VectorField


class UserManager(BaseUserManager):

    def create_user(self, email, first_name, last_name, password=None, commit=True):
        if not email:
            raise ValueError('Users must have an email address')
        if not first_name:
            raise ValueError('Users must have a first name')
        if not last_name:
            raise ValueError('Users must have a last name')

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
        )

        user.set_password(password)
        if commit:
            user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password):
        user = self.create_user(
            email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            commit=False,
        )

        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):

    #------/ Base Fields /------

    email = models.EmailField(max_length=255, unique=True)
    # password field supplied by AbstractBaseUser
    # last_login field supplied by AbstractBaseUser
    first_name  = models.CharField(max_length=30, blank=True)
    last_name   = models.CharField(max_length=30, blank=True)
    is_active   = models.BooleanField(
        default = True,
        help_text = "If user isn't active unselect this instead of deleting account."
    )
    is_staff = models.BooleanField(
        default = False,
        help_text = "Select if user can log into this admin site."
    )
    # is_superuser field provided by PermissionsMixin
    # groups field provided by PermissionsMixin
    # user_permissions field provided by PermissionsMixin
    date_joined = models.DateTimeField(default=timezone.now)


    #------/ Custom Fields /------
    abstract = models.TextField(
        default = "",
        help_text = "Write abstract here."
    )
    description = models.TextField(
        default = "",
        help_text = "Write description here."
    )

    objects = UserManager()

    search_index = VectorField()
    search_manager = SearchManager(
        fields=('first_name', 'last_name', 'abstract', 'description'),
        config='pg_catalog.english',
        search_field='search_index',
        auto_update_search_field=True
    )

    #------/      /------


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    def __str__(self):
        return '{} ({})'.format(self.get_full_name(), self.email)



class Advert(models.Model):
    title   = models.CharField(max_length=100)
    author  = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    abstract = models.TextField(
        default = "",
        help_text = "Write abstract here."
    )
    description = models.TextField(
        default = "",
        help_text = "Write description here."
    )
    date = models.DateField(auto_now=True)

    search_index = VectorField()
    search_manager = SearchManager(
        fields=('title', 'abstract', 'description'),
        config='pg_catalog.english',
        search_field='search_index',
        auto_update_search_field=True
    )

    objects = models.Manager()

    def __str__(self):
        return  '{}'.format(self.title)








