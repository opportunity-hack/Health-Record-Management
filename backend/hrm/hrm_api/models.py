from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings
from rest_framework import serializers
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

def first_name_validator(data):
    if len(data) == 0:
        raise serializers.ValidationError("FIRST NAME cannot be BLANK!")
    elif len(data) < 2:
        raise serializers.ValidationError("FIRST NAME must contain at least 2 letters MINIMUM!")
    elif not data.isalpha():
        raise serializers.ValidationError("FIRST NAME must contain letter's ONLY!")
    return data

def last_name_validator(data):
    if len(data) < 1:
        raise serializers.ValidationError("LAST NAME cannot be blank!")
    elif len(data) < 2:
        raise serializers.ValidationError("LAST NAME must contain at least 2 letters MINIMUM!") 
    elif not data.isalpha():
        raise serializers.ValidationError("LAST NAME must contain letter's ONLY!")
    return data

def gender_validator(data):
    if len(data) < 1:
        raise serializers.ValidationError("GENDER cannot be blank!")
    elif data == "---":
        raise serializers.ValidationError("Please select your GENDER!")
    return data

def birth_date_validator(data):
    if data == False:
        raise serializers.ValidationError("You must enter your DATE OF BIRTH!")

def email_validator(data):
    if EMAIL_REGEX.match(data) == None:
        raise serializers.ValidationError("Invalid EMAIL FORMAT!")
    elif len(data) < 1:
        raise serializers.ValidationError("EMAIL cannot be BLANK!")

def street_address_validator(data):
    if len(data) < 1:
        raise serializers.ValidationError("You must enter your STREET ADDRESS!")

def state_validator(data):
    if len(data) < 1:
        raise serializers.ValidationError("You must select a STATE!")

def city_validator(data):
    if len(data) < 1:
        raise serializers.ValidationError("You must select a CITY!")

def zip_code_validator(data):
    if len(data) < 1:
        raise serializers.ValidationError("You must enter your ZIP CODE!")
    if len(data) != 5:
        raise serializers.ValidationError("You must enter a valid ZIP CODE!") 

def password_validator(data):
    if len(data) < 1:
        raise serializers.ValidationError("PASSWORD cannot be BLANK!")
    elif len(data) < 6:
        raise serializers.ValidationError("PASSWORD must be at least 6 characters MINIMUM!")

class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password = None):
        user = self.model(
            email = self.normalize_email(email)
        )
        user.first_name = first_name
        user.last_name = last_name
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_staffuser(self, email, first_name, last_name, password):
        user = self.create_user(
            email,
            first_name,
            last_name,
            password = password,
            
        )
        user.staff = True
        user.save(using = self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password):
        user = self.create_user(
            email,
            first_name,
            last_name,
            password = password,
        )
        user.staff = True
        user.admin = True
        user.save(using = self._db)
        return user

class User(AbstractBaseUser):
    image = models.ImageField(upload_to='images', blank = True, null = True)
    first_name = models.CharField(max_length = 25, validators = [first_name_validator])
    last_name = models.CharField(max_length = 25, validators = [last_name_validator])
    email = models.EmailField(max_length = 25, unique = True, validators = [email_validator])
    password = models.CharField(max_length = 100, validators = [password_validator])
    gender = models.CharField(max_length = 6, validators = [gender_validator])
    birth_date = models.DateField(null = True, blank = True, validators = [birth_date_validator])
    street_address = models.CharField(max_length = 50,validators = [street_address_validator])
    city = models.CharField(max_length = 25, validators = [city_validator])
    state = models.CharField(max_length = 2,  validators = [state_validator])
    zip_code = models.CharField(max_length = 5, validators = [zip_code_validator])
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    active = models.BooleanField(default = True)
    staff = models.BooleanField(default = False)
    admin = models.BooleanField(default = False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj = None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff
    
    @property
    def is_admin(self):
        return self.admin
    
    @property
    def is_active(self):
        return self.active

    objects = UserManager()