from django.shortcuts import render 
from django.http import JsonResponse 
from rest_framework import permissions, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response 
from .serializers import UserSerializer, UserSerializerWithToken
from . models import User


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'User List': '/user-list/',
        'User Detail View': '/user-detail/<str:pk>/',
        'User Create': '/user-create/',
        'User Update': '/user-update/<str:pk>/',
    }
    return Response(api_urls)

################# USER VIEWS #################
@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format = None):
        serializer = UserSerializerWithToken(data = request.data) 
        if serializer.is_valid(raise_exception = True): 
            serializer.save() 
            print("*****WHAT IS MY ERROR?", serializer.data)
            return Response(serializer.data)
        print("*****WHAT IS MY ERROR?", serializer.errors)
        return Response(serializer.errors)

@api_view(['GET'])
def userList(request): 
    users = User.objects.all()
    serializer = UserSerializer(users, many = True) 
    return Response(serializer.data)

@api_view(['GET'])
def userDetail(request, pk):
    authentication_classes(TokenAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )
    user = User.objects.get(id = pk)
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['PUT'])
def userUpdate(request, pk):
    authentication_classes(TokenAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )
    user = User.objects.get(id = pk)
    serializer = UserSerializer(instance = user, data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, )

# POSSIBLY IMPLEMENT DELETE PATIENT ACCOUNT THROUGH HERE OR ADMIN PAGE
# @api_view(['DELETE'])
# def userDelete(request, pk):
#     user = User.objects.get(id = pk)
#     user.delete()
#     return Response('User successfully deleted!')