# # import logging
# # from django.contrib.auth import authenticate
# # from django.http import JsonResponse, Http404
# # from django.db import transaction
# # from rest_framework import generics, status, permissions
# # from rest_framework.views import APIView
# # from rest_framework.response import Response
# # from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
# # from rest_framework.exceptions import PermissionDenied

# # from .models import MyUser, Scholarship, UserChangeHistory
# # from .serializers import (
# #     MyUserSerializer,
# #     ScholarshipSerializer,
# #     UserUpdateSerializer,
# #     UserChangeHistorySerializer,
# # )

# # logger = logging.getLogger(__name__)

# # # Public endpoint: Create a new user.
# # class CreateUserView(generics.CreateAPIView):
# #     queryset = MyUser.objects.all()
# #     serializer_class = MyUserSerializer
# #     permission_classes = [AllowAny]

# # # Public endpoint: Login.
# # class LoginView(APIView):
# #     permission_classes = [AllowAny]
    
# #     def post(self, request):
# #         username = request.data.get('username')
# #         password = request.data.get('password')
# #         if not username or not password:
# #             return Response({'error': 'Username and password are required'},
# #                             status=status.HTTP_400_BAD_REQUEST)
# #         try:
# #             user = MyUser.objects.get(username=username)
# #         except MyUser.DoesNotExist:
# #             return Response({'error': 'Invalid credentials'},
# #                             status=status.HTTP_400_BAD_REQUEST)
# #         if user.is_locked:
# #             return Response({'error': 'Account is locked due to too many failed login attempts.'},
# #                             status=status.HTTP_403_FORBIDDEN)
# #         user_auth = authenticate(username=username, password=password)
# #         if user_auth is not None and user_auth.is_active:
# #             user.failed_login_attempts = 0
# #             user.save()
# #             return Response({'message': 'Login successful'})
# #         else:
# #             user.failed_login_attempts += 1
# #             if user.failed_login_attempts >= 5:
# #                 user.is_locked = True
# #             user.save()
# #             return Response({'error': 'Invalid credentials'},
# #                             status=status.HTTP_400_BAD_REQUEST)

# # # Admin-only endpoint: Unlock a user account.
# # class UnlockAccountView(APIView):
# #     permission_classes = [IsAdminUser]
    
# #     def post(self, request, user_id):
# #         try:
# #             user = MyUser.objects.get(id=user_id)
# #         except MyUser.DoesNotExist:
# #             return Response({'error': 'User not found'},
# #                             status=status.HTTP_404_NOT_FOUND)
# #         user.is_locked = False
# #         user.failed_login_attempts = 0
# #         user.save()
# #         return Response({'message': 'User account has been unlocked.'})

# # # Public demo endpoint: returns a dummy user.
# # def current_user(request):
# #     # In a real implementation, token authentication would be used.
# #     return JsonResponse({"username": "demo-user"})

# # # Protected endpoint: Set password upon first login.
# # class SetPasswordView(APIView):
# #     permission_classes = [IsAuthenticated]
    
# #     @transaction.atomic
# #     def post(self, request):
# #         try:
# #             password = request.data.get("password")
# #             if not password:
# #                 return Response({"error": "Password is required."},
# #                                 status=status.HTTP_400_BAD_REQUEST)
# #             user = request.user
# #             user.set_password(password)
# #             user.save()
# #             logger.info(f"User {user.username} set password successfully.")
# #             return Response({"message": "Password set successfully."},
# #                             status=status.HTTP_200_OK)
# #         except Exception as e:
# #             logger.error(f"Error setting password for user {request.user}: {e}")
# #             return Response({"error": "An error occurred while setting the password."},
# #                             status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# # # Protected endpoint: Change password.
# # class ChangePasswordView(APIView):
# #     permission_classes = [IsAuthenticated]
    
# #     @transaction.atomic
# #     def post(self, request):
# #         try:
# #             old_password = request.data.get("old_password")
# #             new_password = request.data.get("new_password")
# #             user = request.user
# #             if not user.check_password(old_password):
# #                 return Response({"error": "Current password is incorrect."},
# #                                 status=status.HTTP_400_BAD_REQUEST)
# #             user.set_password(new_password)
# #             user.save()
# #             logger.info(f"User {user.username} changed password successfully.")
# #             return Response({"message": "Password updated successfully."},
# #                             status=status.HTTP_200_OK)
# #         except Exception as e:
# #             logger.error(f"Error changing password for user {request.user}: {e}")
# #             return Response({"error": "An error occurred while changing the password."},
# #                             status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# # # New endpoints for role management.

# # class RoleRequestListView(generics.ListAPIView):
# #     """
# #     Lists all users with a pending role request (requested_role is set and not approved).
# #     Only admins can access this endpoint.
# #     """
# #     queryset = MyUser.objects.filter(requested_role__isnull=False, role_approved=False)
# #     serializer_class = MyUserSerializer
# #     permission_classes = [permissions.IsAdminUser]

# # class RoleUpdateView(generics.UpdateAPIView):
# #     """
# #     Allows an admin to update a user's role and approve the requested role.
# #     """
# #     queryset = MyUser.objects.all()
# #     serializer_class = MyUserSerializer
# #     permission_classes = [permissions.IsAdminUser]
# #     lookup_field = 'id'

# # # New endpoints for user management.

# # class UserUpdateView(generics.UpdateAPIView):
# #     queryset = MyUser.objects.all()
# #     serializer_class = UserUpdateSerializer
# #     permission_classes = [IsAdminUser]

# #     def get_permissions(self):
# #         if self.request.user.is_authenticated:
# #             # Allow if the user is staff or is updating their own record.
# #             if self.request.user.is_staff or self.get_object().id == self.request.user.id:
# #                 return [permissions.IsAuthenticated()]
# #         raise PermissionDenied("You do not have permission to update this user.")

# #     def get_object(self):
# #         user_id = self.kwargs.get('pk')
# #         try:
# #             return MyUser.objects.get(id=user_id)
# #         except MyUser.DoesNotExist:
# #             raise Http404

# #     def update(self, request, *args, **kwargs):
# #         return super().update(request, *args, **kwargs)

# # class UserChangeHistoryView(generics.ListAPIView):
# #     serializer_class = UserChangeHistorySerializer
# #     permission_classes = [permissions.IsAuthenticated]

# #     def get_queryset(self):
# #         user_id = self.kwargs["pk"]
# #         return UserChangeHistory.objects.filter(user__id=user_id).order_by("-timestamp")

# # class UserListView(APIView):
# #     def get(self, request):
# #         users = MyUser.objects.all()
# #         serializer = MyUserSerializer(users, many=True)
# #         return Response(serializer.data)

# # class UserDetailView(generics.RetrieveUpdateAPIView):
# #     queryset = MyUser.objects.all()
# #     serializer_class = MyUserSerializer


# import logging
# from django.contrib.auth import authenticate
# from django.http import JsonResponse, Http404
# from django.db import transaction
# from rest_framework import generics, status, permissions
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
# from rest_framework.exceptions import PermissionDenied

# from .models import MyUser, Scholarship, UserChangeHistory
# from .serializers import (
#     MyUserSerializer,
#     ScholarshipSerializer,
#     UserUpdateSerializer,
#     UserChangeHistorySerializer,
# )

# logger = logging.getLogger(__name__)

# # Public endpoint: Create a new user.
# class CreateUserView(generics.CreateAPIView):
#     queryset = MyUser.objects.all()
#     serializer_class = MyUserSerializer
#     permission_classes = [AllowAny]

# # Public endpoint: Login.
# class LoginView(APIView):
#     permission_classes = [AllowAny]
    
#     def post(self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         if not username or not password:
#             return Response({'error': 'Username and password are required'},
#                             status=status.HTTP_400_BAD_REQUEST)
#         try:
#             user = MyUser.objects.get(username=username)
#         except MyUser.DoesNotExist:
#             return Response({'error': 'Invalid credentials'},
#                             status=status.HTTP_400_BAD_REQUEST)
#         if user.is_locked:
#             return Response({'error': 'Account is locked due to too many failed login attempts.'},
#                             status=status.HTTP_403_FORBIDDEN)
#         user_auth = authenticate(username=username, password=password)
#         if user_auth is not None and user_auth.is_active:
#             user.failed_login_attempts = 0
#             user.save()
#             return Response({'message': 'Login successful'})
#         else:
#             user.failed_login_attempts += 1
#             if user.failed_login_attempts >= 5:
#                 user.is_locked = True
#             user.save()
#             return Response({'error': 'Invalid credentials'},
#                             status=status.HTTP_400_BAD_REQUEST)

# # Public endpoint: Returns the current user info.
# def current_user(request):
#     # For demo purposes, return the authenticated user's username,
#     # or "anonymous" if not authenticated.
#     if request.user.is_authenticated:
#         return JsonResponse({"username": request.user.username})
#     return JsonResponse({"username": "anonymous"})

# # Admin-only endpoint: Unlock a user account.
# class UnlockAccountView(APIView):
#     permission_classes = [IsAdminUser]
    
#     def post(self, request, user_id):
#         try:
#             user = MyUser.objects.get(id=user_id)
#         except MyUser.DoesNotExist:
#             return Response({'error': 'User not found'},
#                             status=status.HTTP_404_NOT_FOUND)
#         user.is_locked = False
#         user.failed_login_attempts = 0
#         user.save()
#         return Response({'message': 'User account has been unlocked.'})

# # Protected endpoint: Set password upon first login.
# class SetPasswordView(APIView):
#     permission_classes = [IsAuthenticated]
    
#     @transaction.atomic
#     def post(self, request):
#         try:
#             password = request.data.get("password")
#             if not password:
#                 return Response({"error": "Password is required."},
#                                 status=status.HTTP_400_BAD_REQUEST)
#             user = request.user
#             user.set_password(password)
#             user.save()
#             logger.info(f"User {user.username} set password successfully.")
#             return Response({"message": "Password set successfully."},
#                             status=status.HTTP_200_OK)
#         except Exception as e:
#             logger.error(f"Error setting password for user {request.user}: {e}")
#             return Response({"error": "An error occurred while setting the password."},
#                             status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# # Protected endpoint: Change password.
# class ChangePasswordView(APIView):
#     permission_classes = [IsAuthenticated]
    
#     @transaction.atomic
#     def post(self, request):
#         try:
#             old_password = request.data.get("old_password")
#             new_password = request.data.get("new_password")
#             user = request.user
#             if not user.check_password(old_password):
#                 return Response({"error": "Current password is incorrect."},
#                                 status=status.HTTP_400_BAD_REQUEST)
#             user.set_password(new_password)
#             user.save()
#             logger.info(f"User {user.username} changed password successfully.")
#             return Response({"message": "Password updated successfully."},
#                             status=status.HTTP_200_OK)
#         except Exception as e:
#             logger.error(f"Error changing password for user {request.user}: {e}")
#             return Response({"error": "An error occurred while changing the password."},
#                             status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# # New endpoints for role management.
# class RoleRequestListView(generics.ListAPIView):
#     """
#     Lists all users with a pending role request (requested_role is set and not approved).
#     Only admins can access this endpoint.
#     """
#     queryset = MyUser.objects.filter(requested_role__isnull=False, role_approved=False)
#     serializer_class = MyUserSerializer
#     permission_classes = [permissions.IsAdminUser]

# class RoleUpdateView(generics.UpdateAPIView):
#     """
#     Allows an admin to update a user's role and approve the requested role.
#     """
#     queryset = MyUser.objects.all()
#     serializer_class = MyUserSerializer
#     permission_classes = [permissions.IsAdminUser]
#     lookup_field = 'id'

# # New endpoints for user management.
# class UserUpdateView(generics.UpdateAPIView):
#     queryset = MyUser.objects.all()
#     serializer_class = UserUpdateSerializer
#     permission_classes = [IsAdminUser]

#     def get_permissions(self):
#         if self.request.user.is_authenticated:
#             # Allow if the user is staff or is updating their own record.
#             if self.request.user.is_staff or self.get_object().id == self.request.user.id:
#                 return [permissions.IsAuthenticated()]
#         raise PermissionDenied("You do not have permission to update this user.")

#     def get_object(self):
#         user_id = self.kwargs.get('pk')
#         try:
#             return MyUser.objects.get(id=user_id)
#         except MyUser.DoesNotExist:
#             raise Http404

#     def update(self, request, *args, **kwargs):
#         return super().update(request, *args, **kwargs)

# class UserChangeHistoryView(generics.ListAPIView):
#     serializer_class = UserChangeHistorySerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         user_id = self.kwargs["pk"]
#         return UserChangeHistory.objects.filter(user__id=user_id).order_by("-timestamp")

# class UserListView(APIView):
#     def get(self, request):
#         users = MyUser.objects.all()
#         serializer = MyUserSerializer(users, many=True)
#         return Response(serializer.data)

# class UserDetailView(generics.RetrieveUpdateAPIView):
#     queryset = MyUser.objects.all()
#     serializer_class = MyUserSerializer



import logging
from django.contrib.auth import authenticate
from django.http import Http404
from django.db import transaction
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from rest_framework_simplejwt.tokens import RefreshToken
from .models import MyUser, Scholarship, UserChangeHistory
from .serializers import (
    MyUserSerializer,
    ScholarshipSerializer,
    UserUpdateSerializer,
    UserChangeHistorySerializer,
)

logger = logging.getLogger(__name__)

class CreateUserView(generics.CreateAPIView):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': MyUserSerializer(user).data
        }, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({'error': 'Username and password are required'},
                          status=status.HTTP_400_BAD_REQUEST)
        try:
            user = MyUser.objects.get(username=username)
        except MyUser.DoesNotExist:
            return Response({'error': 'Invalid credentials'},
                          status=status.HTTP_400_BAD_REQUEST)
        if user.is_locked:
            return Response({'error': 'Account is locked due to too many failed login attempts.'},
                          status=status.HTTP_403_FORBIDDEN)
        user_auth = authenticate(username=username, password=password)
        if user_auth is not None and user_auth.is_active:
            user.failed_login_attempts = 0
            user.save()
            refresh = RefreshToken.for_user(user_auth)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': MyUserSerializer(user_auth).data
            })
        else:
            user.failed_login_attempts += 1
            if user.failed_login_attempts >= 5:
                user.is_locked = True
            user.save()
            return Response({'error': 'Invalid credentials'},
                          status=status.HTTP_400_BAD_REQUEST)

def current_user(request):
    if request.user.is_authenticated:
        return JsonResponse(MyUserSerializer(request.user).data)
    return JsonResponse({"username": "anonymous"})

class UnlockAccountView(APIView):
    permission_classes = [IsAdminUser]
    
    def post(self, request, user_id):
        try:
            user = MyUser.objects.get(id=user_id)
        except MyUser.DoesNotExist:
            return Response({'error': 'User not found'},
                          status=status.HTTP_404_NOT_FOUND)
        user.is_locked = False
        user.failed_login_attempts = 0
        user.save()
        return Response({'message': 'User account has been unlocked.'})

class SetPasswordView(APIView):
    permission_classes = [IsAuthenticated]
    
    @transaction.atomic
    def post(self, request):
        password = request.data.get("password")
        if not password:
            return Response({"error": "Password is required."},
                          status=status.HTTP_400_BAD_REQUEST)
        user = request.user
        user.set_password(password)
        user.save()
        return Response({"message": "Password set successfully."},
                       status=status.HTTP_200_OK)

class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]
    
    @transaction.atomic
    def post(self, request):
        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")
        user = request.user
        if not user.check_password(old_password):
            return Response({"error": "Current password is incorrect."},
                          status=status.HTTP_400_BAD_REQUEST)
        user.set_password(new_password)
        user.save()
        return Response({"message": "Password updated successfully."},
                       status=status.HTTP_200_OK)

class RoleRequestListView(generics.ListAPIView):
    queryset = MyUser.objects.filter(requested_role__isnull=False, role_approved=False)
    serializer_class = MyUserSerializer
    permission_classes = [permissions.IsAdminUser]

class RoleUpdateView(generics.UpdateAPIView):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer
    permission_classes = [permissions.IsAdminUser]
    lookup_field = 'id'

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        if 'role' in request.data:
            user.role = request.data['role']
            user.role_approved = True
            user.save()
            return Response({'message': 'Role updated successfully'})
        return Response({'error': 'Role field required'}, status=400)

class UserUpdateView(generics.UpdateAPIView):
    queryset = MyUser.objects.all()
    serializer_class = UserUpdateSerializer
    permission_classes = [IsAdminUser]

class UserChangeHistoryView(generics.ListAPIView):
    serializer_class = UserChangeHistorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs["pk"]
        return UserChangeHistory.objects.filter(user__id=user_id).order_by("-timestamp")

class UserListView(generics.ListAPIView):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer
    permission_classes = [IsAdminUser]

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer
    permission_classes = [IsAdminUser]