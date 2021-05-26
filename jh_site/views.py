from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from .models import News, Video, Release, Reel

# Create your views here.
@require_http_methods(["GET"])
def index(request):
    """Render page"""
    news_items = News.objects.all()
    cinema = Video.objects.all()
    releases = Release.objects.all()
    reels = Reel.objects.all()

    context = {
        'news': news_items,
        'cinema': cinema,
        'releases': releases,
        'reels': reels
    }
    return render(request, 'jh_site/index.html', context)