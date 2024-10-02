from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/author/<str:username>/", views.AuthorNotesList.as_view(), name='author-notes'),
    path("notes/comment/<str:noteid>/", views.CommentListCreate.as_view(), name='note-comments'),  # Burada username eklendi
    path("notes/getall", views.NoteListGet.as_view(), name="note-list-all"),
     path("notes/getCust", views.NoteListGet.as_view(), name="note-cust-all"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
     path('notes/<int:pk>/', views.NoteListGet.as_view(), name='note-detail'), 
    
]