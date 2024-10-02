from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
from .models import Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}} #except the password but not shpw it

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user
    




class CommentSerializer(serializers.ModelSerializer):#buna related name vericem
    author = serializers.CharField(source='author.username', read_only=True)
    # note = NoteSerializer(read_only=True)
    #note = serializers.CharField(source='note.id', read_only=True)
    class Meta:
        model = Comment
        fields = ["id", "title", "content", "created_at", "author", "note"]
        extra_kwargs = {"author": {"read_only": True}, "note": {"read_only": True}}



class NoteSerializer(serializers.ModelSerializer): #note_commetnsi eklicem
    author = serializers.CharField(source='author.username', read_only=True)
    comments = CommentSerializer(many=True,read_only=True)
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author","comments"]
        extra_kwargs = {"author": {"read_only": True}}