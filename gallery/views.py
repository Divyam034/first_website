from django.shortcuts import render
from .models import Photo

def gallery_view(request):
    photos = Photo.objects.order_by('-uploaded_at')[:100]
    return render(request, 'gallery/gallery.html', {'photos': photos})
