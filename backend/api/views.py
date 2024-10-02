from django.shortcuts import get_object_or_404, render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Comment

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    # permission_classes = [IsAuthenticated] #bu root callaman için autenticated olmaslısın
    #permission_classes = [AllowAny]
   
    queryset = Note.objects.all()
    def get_queryset(self):
        user = self.request.user 
        return Note.objects.filter(author=user)
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)#additional value because author is read-only in model.py

class CommentListCreate(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]  # Sadece authenticated kullanıcılar erişebilir
   
    def get_queryset(self):
        note_id = self.kwargs.get('noteid')  # URL'den note_id alınıyor
        note = Note.objects.get(id=note_id)
        return Comment.objects.filter(note=note)
    
    def perform_create(self, serializer):
        note_id = self.kwargs.get('noteid')  # URL'den note_id alınır
        note = Note.objects.get(id=note_id)
        serializer.save(author=self.request.user, note=note)
        
class NoteListGet(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    #permission_classes = [AllowAny]
    permission_classes = [IsAuthenticated] #bu root callaman için autenticated olmaslısın
    queryset = Note.objects.all()


class AuthorNotesList(generics.ListAPIView):
    serializer_class = NoteSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny]

    def get_queryset(self):
        username = self.kwargs.get('username')  # URL'den gelen username'i alıyoruz
        user = get_object_or_404(User, username=username)
        return Note.objects.filter(author=user)


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] 