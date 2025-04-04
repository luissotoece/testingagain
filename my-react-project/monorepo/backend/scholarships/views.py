# # from rest_framework import generics, viewsets, permissions
# # from rest_framework.views import APIView
# # from rest_framework.response import Response
# # from rest_framework import status
# # from django.db.models import Avg
# # from .models import Scholarship
# # from .serializers import ScholarshipSerializer

# # # Endpoint to list all scholarships and allow creation (only for admins)
# # class ScholarshipListCreate(generics.ListCreateAPIView):
# #     queryset = Scholarship.objects.all()
# #     serializer_class = ScholarshipSerializer
# #     permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# #     def perform_create(self, serializer):
# #         # Only staff (admins) can create scholarships.
# #         if not self.request.user.is_staff:
# #             raise PermissionError("Only admins can add scholarships.")
# #         serializer.save()

# # # Endpoint to retrieve, update, or delete a specific scholarship.
# # class ScholarshipDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
# #     queryset = Scholarship.objects.all()
# #     serializer_class = ScholarshipSerializer
# #     permission_classes = [permissions.AllowAny]

# # # Endpoint to filter scholarships by donor.
# # class ScholarshipsByDonorView(APIView):
# #     def get(self, request, donor_id):
# #         qs = Scholarship.objects.filter(donor_id=donor_id, is_active=True)
# #         serializer = ScholarshipSerializer(qs, many=True)
# #         return Response(serializer.data, status=status.HTTP_200_OK)

# # # ViewSet to expose additional endpoints via DRF router.
# # class ScholarshipViewSet(viewsets.ModelViewSet):
# #     queryset = Scholarship.objects.all()
# #     serializer_class = ScholarshipSerializer
# #     permission_classes = [permissions.IsAuthenticated]

# # # Endpoint to generate a report of scholarships.
# # class ScholarshipReportView(APIView):
# #     """
# #     Generates a report of scholarships.
# #     """
# #     def get(self, request):
# #         total = Scholarship.objects.count()
# #         avg_amount = Scholarship.objects.aggregate(avg=Avg('amount'))['avg']
# #         active_count = Scholarship.objects.filter(is_active=True).count()
# #         inactive_count = total - active_count
# #         report = {
# #             "total_scholarships": total,
# #             "average_amount": avg_amount,
# #             "active_scholarships": active_count,
# #             "inactive_scholarships": inactive_count,
# #         }
# #         return Response(report, status=status.HTTP_200_OK)


# from rest_framework import generics, viewsets, permissions
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from django.db.models import Avg
# from .models import Scholarship
# from .serializers import ScholarshipSerializer

# # Custom permission: Allow safe methods for everyone, but updates/deletes only for admins.
# class IsAdminOrReadOnly(permissions.BasePermission):
#     def has_permission(self, request, view):
#         # Read-only permissions are allowed for any request.
#         if request.method in permissions.SAFE_METHODS:
#             return True
#         # Write permissions are only allowed to admin users.
#         return request.user and request.user.is_staff

# # Endpoint to list all scholarships and allow creation (only for admins)
# class ScholarshipListCreate(generics.ListCreateAPIView):
#     queryset = Scholarship.objects.all()
#     serializer_class = ScholarshipSerializer
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly]

#     def perform_create(self, serializer):
#         if not self.request.user.is_staff:
#             raise permissions.PermissionDenied("Only admins can add scholarships.")
#         serializer.save()

# # Endpoint to retrieve, update, or delete a specific scholarship.
# class ScholarshipDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Scholarship.objects.all()
#     serializer_class = ScholarshipSerializer
#     permission_classes = [IsAdminOrReadOnly]

# # Endpoint to filter scholarships by donor.
# class ScholarshipsByDonorView(APIView):
#     def get(self, request, donor_id):
#         qs = Scholarship.objects.filter(donor_id=donor_id, is_active=True)
#         serializer = ScholarshipSerializer(qs, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

# # Optional: ViewSet for additional endpoints if needed.
# class ScholarshipViewSet(viewsets.ModelViewSet):
#     queryset = Scholarship.objects.all()
#     serializer_class = ScholarshipSerializer
#     permission_classes = [permissions.IsAuthenticated]




from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from .models import Scholarship
from .serializers import ScholarshipSerializer
from django.db.models import Q

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_staff

class ScholarshipListCreate(generics.ListCreateAPIView):
    serializer_class = ScholarshipSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        queryset = Scholarship.objects.filter(is_active=True)
        major = self.request.query_params.get('major')
        min_gpa = self.request.query_params.get('min_gpa')
        
        if major:
            queryset = queryset.filter(
                Q(required_major__icontains=major) | 
                Q(required_major__isnull=True)
            )
        if min_gpa:
            queryset = queryset.filter(
                Q(required_gpa__gte=min_gpa) | 
                Q(required_gpa__isnull=True)
            )
        return queryset

    def perform_create(self, serializer):
        if not self.request.user.is_staff:
            raise permissions.PermissionDenied("Only admins can add scholarships.")
        serializer.save()

class ScholarshipDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scholarship.objects.all()
    serializer_class = ScholarshipSerializer
    permission_classes = [IsAdminOrReadOnly]

class ScholarshipsByDonorView(APIView):
    def get(self, request, donor_id):
        qs = Scholarship.objects.filter(donor_id=donor_id, is_active=True)
        serializer = ScholarshipSerializer(qs, many=True)
        return Response(serializer.data)

class ScholarshipViewSet(viewsets.ModelViewSet):
    queryset = Scholarship.objects.all()
    serializer_class = ScholarshipSerializer
    permission_classes = [permissions.IsAuthenticated, IsAdminOrReadOnly]