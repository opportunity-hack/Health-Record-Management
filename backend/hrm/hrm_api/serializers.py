from rest_framework import serializers  
from .models import User
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'id', 'image', 'email', 'first_name', 'last_name', 'gender', 'birth_date', 'street_address', 'city', 'state', 'zip_code', 'is_admin'
        extra_kwargs = {'password': {'write_only': True}}

class UserSerializerWithToken(serializers.ModelSerializer): 
    token = serializers.SerializerMethodField() 
    # password = serializers.CharField(write_only = True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data): 
        user = User(
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            email = validated_data['email'],
            password = make_password(validated_data['password']),
            gender = validated_data['gender'],
            birth_date = validated_data['birth_date'],
            street_address = validated_data['street_address'],
            city = validated_data['city'],
            state = validated_data['state'],
            zip_code = validated_data['zip_code']
        )
        user.save()
        return user

    class Meta: 
        model = User
        fields = '__all__' 
        extra_kwargs = {'password': {'write_only': True}}