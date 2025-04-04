# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from django.db import transaction
# from .serializers import DocumentSerializer

# class DocumentUploadView(APIView):
#     def post(self, request):
#         serializer = DocumentSerializer(data=request.data)
#         if serializer.is_valid():
#             with transaction.atomic():
#                 serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import DocumentSerializer
from django.db import transaction

class DocumentUploadView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.data._mutable = True
        request.data['user'] = request.user.id
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            with transaction.atomic():
                serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)