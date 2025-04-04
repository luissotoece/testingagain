# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import (
#     ScholarshipListCreate,
#     ScholarshipDetailUpdateDelete,
#     ScholarshipsByDonorView,
#     ScholarshipViewSet,
#     ScholarshipReportView,
#     # Optionally, if you still need the fallback detail view:
#     # scholarship_detail,
# )

# router = DefaultRouter()
# router.register(r'viewset', ScholarshipViewSet, basename='scholarship')

# urlpatterns = [
#     # List or create a scholarship.
#     path('', ScholarshipListCreate.as_view(), name='scholarship-list'),
#     # Retrieve, update, or delete a specific scholarship.
#     path('<int:pk>/', ScholarshipDetailUpdateDelete.as_view(), name='scholarship-detail'),
#     # Filter scholarships by donor.
#     path('donor/<int:donor_id>/', ScholarshipsByDonorView.as_view(), name='scholarship_by_donor'),
#     # Generate a scholarship report.
#     path('report/', ScholarshipReportView.as_view(), name='scholarship_report'),
#     # Include additional endpoints via the router.
#     path('api/', include(router.urls)),
#     # Optionally, you can add a fallback detail endpoint if needed:
#     # path('api/scholarships/<int:id>/', scholarship_detail, name='scholarship_detail'),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ScholarshipListCreate,
    ScholarshipDetailUpdateDelete,
    ScholarshipsByDonorView,
    ScholarshipViewSet,
    # ScholarshipReportView,  # Removed as reporting is not needed for MVP
    # Optionally, if you still need the fallback detail view:
    # scholarship_detail,
)

router = DefaultRouter()
router.register(r'viewset', ScholarshipViewSet, basename='scholarship')

urlpatterns = [
    # List or create a scholarship.
    path('', ScholarshipListCreate.as_view(), name='scholarship-list'),
    # Retrieve, update, or delete a specific scholarship.
    path('<int:pk>/', ScholarshipDetailUpdateDelete.as_view(), name='scholarship-detail'),
    # Filter scholarships by donor.
    path('donor/<int:donor_id>/', ScholarshipsByDonorView.as_view(), name='scholarship_by_donor'),
    # Reporting endpoint removed.
    # path('report/', ScholarshipReportView.as_view(), name='scholarship_report'),
    # Include additional endpoints via the router.
    path('api/', include(router.urls)),
    # Optionally, you can add a fallback detail endpoint if needed:
    # path('api/scholarships/<int:id>/', scholarship_detail, name='scholarship_detail'),
]