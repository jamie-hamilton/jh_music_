from django.contrib import admin

from .models import News, Release, Video, Reel, Photo

@admin.register(News)
class News(admin.ModelAdmin):
    list_display = ['headline', 'date']
    search_fields = ['headline']

@admin.register(Release)
class Release(admin.ModelAdmin):
    list_display = ['title', 'short_title', 'release_date']
    search_fields = ['title']

@admin.register(Video)
class Video(admin.ModelAdmin):
    list_display = ['title', 'youtube_link']
    search_fields = ['title']

class PhotoInline(admin.StackedInline):
    model = Photo
    def get_extra(self, request, obj=None, **kwargs):
        extra = 1
        if obj:
            return extra - 1
        return extra



@admin.register(Reel)
class Reel(admin.ModelAdmin):
    list_display = ['era', 'year']
    inlines = [
        PhotoInline,
    ]
