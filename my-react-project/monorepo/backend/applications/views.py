# from rest_framework import viewsets
# from .models import Application
# from .serializers import ApplicationSerializer

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import MatchResult
# from scholarships.models import Scholarship
# from .matching import match_applications_to_scholarships

# class ApplicationViewSet(viewsets.ModelViewSet):
#     serializer_class = ApplicationSerializer

#     def get_queryset(self):
#         qs = Application.objects.all()
#         # Task 8: Filter by scholarship (if provided)
#         scholarship = self.request.query_params.get("scholarship")
#         if scholarship:
#             qs = qs.filter(scholarship_id=scholarship)
#         # Task 10: Filter by application response field (assume stored in 'data')
#         field = self.request.query_params.get("field")
#         value = self.request.query_params.get("value")
#         if field and value:
#             qs = qs.filter(data__contains={field: value})
#         return qs
    


# class ApplicationMatchingView(APIView):
#     """
#     For a given application (by ID), runs the matching algorithm across all scholarships and stores the results.
#     """
#     def post(self, request, application_id):
#         try:
#             application = Application.objects.get(id=application_id)
#         except Application.DoesNotExist:
#             return Response({"error": "Application not found."}, status=status.HTTP_404_NOT_FOUND)
        
#         # Get all scholarships (or filter further if needed)
#         scholarships = Scholarship.objects.all()
#         match_results = match_applications_to_scholarships(application, scholarships)
        
#         # Save results in the database
#         for match in match_results:
#             MatchResult.objects.create(
#                 application=application,
#                 scholarship_id=match['scholarship_id'],
#                 score=match['score']
#             )
#         return Response({"matches": match_results}, status=status.HTTP_200_OK)


from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Application, MatchResult
from scholarships.models import Scholarship
from .matching import match_applications_to_scholarships
from .serializers import ApplicationSerializer
from rest_framework.permissions import IsAuthenticated

class ApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        qs = Application.objects.all()
        scholarship = self.request.query_params.get("scholarship")
        if scholarship:
            qs = qs.filter(scholarship_id=scholarship)
        field = self.request.query_params.get("field")
        value = self.request.query_params.get("value")
        if field and value:
            qs = qs.filter(data__contains={field: value})
        return qs

    def perform_create(self, serializer):
        serializer.save(applicant=self.request.user)

class ApplicationMatchingView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, application_id):
        try:
            application = Application.objects.get(id=application_id, applicant=request.user)
            scholarships = Scholarship.objects.filter(is_active=True)
            matches = match_applications_to_scholarships(application, scholarships)
            
            MatchResult.objects.filter(application=application).delete()
            
            for match in matches:
                MatchResult.objects.create(
                    application=application,
                    scholarship_id=match['scholarship_id'],
                    score=match['score']
                )
            return Response({'matches': matches})
        except Application.DoesNotExist:
            return Response({'error': 'Application not found'}, status=404)