# from django.contrib import admin
# from django.urls import path, include
# from django.http import HttpResponse
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# def index(request):
#     return HttpResponse("Welcome to the UASAMS API!")

# urlpatterns = [
#     path('', index, name='index'),
#     path('admin/', admin.site.urls),
#     path('api/accounts/', include('accounts.urls')),
#     path('api/applications/', include('applications.urls')),
#     path('api/scholarships/', include('scholarships.urls')),
#     path('api/documents/', include('documents.urls')),
#     path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#     # Optionally, if you want to expose the scholarships endpoints at /api/ as well:
#     # path('api/', include('scholarships.urls')),
# ]


from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

def index(request):
    return HttpResponse("Welcome to the UASAMS API!")

urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('api/applications/', include('applications.urls')),
    path('api/scholarships/', include('scholarships.urls')),
    path('api/documents/', include('documents.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)