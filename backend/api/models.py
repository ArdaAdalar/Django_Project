from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

#add the corresponding fields to database
class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")
    media = models.ImageField(upload_to='blog_images/', null=True, blank=True)  # Resim alanı

#1-many relationship, ve cascade yaparak user silinirse ona ait note da silinir
    def __str__(self):
        return self.title
    
class Comment(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments_users")
    note = models.ForeignKey(Note, on_delete=models.CASCADE, related_name="comments",default=10)
   
#1-many relationship, ve cascade yaparak user silinirse ona ait note da silinir
    def __str__(self):
        return self.title
