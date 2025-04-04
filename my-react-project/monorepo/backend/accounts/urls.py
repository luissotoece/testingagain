# from django.urls import path
# from .views import (
#     CreateUserView,
#     LoginView,
#     UnlockAccountView,
#     SetPasswordView,
#     ChangePasswordView,
#     current_user,
#     RoleRequestListView,
#     RoleUpdateView,
#     UserListView,
#     UserDetailView,
#     UserUpdateView,
#     UserChangeHistoryView,
# )

# urlpatterns = [
#     path('create/', CreateUserView.as_view(), name='create_user'),
#     path('login/', LoginView.as_view(), name='login'),
#     path('unlock/<int:user_id>/', UnlockAccountView.as_view(), name='unlock_account'),
#     path('password/set/', SetPasswordView.as_view(), name='set_password'),
#     path('password/change/', ChangePasswordView.as_view(), name='change_password'),
#     path('me/', current_user, name='current_user'),
#     path('role-requests/', RoleRequestListView.as_view(), name='role_requests'),
#     path('role-update/<int:id>/', RoleUpdateView.as_view(), name='role_update'),
#     # New endpoints for user management:
#     path('users/', UserListView.as_view(), name='user-list'),
#     path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
#     path('users/<int:pk>/update/', UserUpdateView.as_view(), name='user-update'),
#     path('users/<int:pk>/history/', UserChangeHistoryView.as_view(), name='user-history'),
# ]

from django.urls import path
from .views import (
    CreateUserView,
    LoginView,
    UnlockAccountView,
    SetPasswordView,
    ChangePasswordView,
    current_user,
    RoleRequestListView,
    RoleUpdateView,
    UserListView,
    UserDetailView,
    UserUpdateView,
    UserChangeHistoryView,
)

urlpatterns = [
    path('create/', CreateUserView.as_view(), name='create_user'),
    path('login/', LoginView.as_view(), name='login'),
    path('unlock/<int:user_id>/', UnlockAccountView.as_view(), name='unlock_account'),
    path('password/set/', SetPasswordView.as_view(), name='set_password'),
    path('password/change/', ChangePasswordView.as_view(), name='change_password'),
    path('me/', current_user, name='current_user'),
    path('role-requests/', RoleRequestListView.as_view(), name='role_requests'),
    path('role-update/<int:id>/', RoleUpdateView.as_view(), name='role_update'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('users/<int:pk>/update/', UserUpdateView.as_view(), name='user-update'),
    path('users/<int:pk>/history/', UserChangeHistoryView.as_view(), name='user-history'),
]