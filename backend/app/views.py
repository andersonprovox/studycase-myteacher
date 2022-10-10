from rest_framework.views import APIView
from rest_framework.response import Response

class HomeApiView(APIView):
    def get(self, request, format=none):
        return Response({"nome": "Anderson Fonseca", "idade": 37 }, status=200)
