from hrm_api.serializers import UserSerializer
from django.conf import settings
from rest_framework_jwt.settings import api_settings
import jwt


def my_jwt_response_handler(token, user = None, request = None): 

    data = jwt.decode(token, None, None)

    encoded = jwt.encode(data, settings.SECRET_KEY, algorithm='HS256')
    
    decoded = jwt.decode(encoded, settings.SECRET_KEY, algorithms='HS256')
    
    token = encoded

    return {
        'token': token,
        'user': UserSerializer(user, context = {'request': request}).data
    }