from django.urls import path 
from . import views 
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', views.apiOverview, name = "api-overview"),
    path('user-register/', views.UserList.as_view()),
    path('current-user/', views.current_user),
    path('user-list/', views.userList, name = "user-list"),
    path('user-detail/<str:pk>/', views.userDetail, name = "user-detail"),
    path('user-update/<str:pk>/', views.userUpdate, name = "user-update"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)