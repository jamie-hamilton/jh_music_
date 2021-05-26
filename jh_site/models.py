from django.db import models

# N E W S = markdown of news story (order by date)
class News(models.Model):
    headline = models.CharField(max_length=50)
    body = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.headline

    class Meta:
        ordering = ['-date', 'headline']
        verbose_name_plural = "news items"
        


# R E L E A S E = cover pic, spotifylink, shortened title, order
class Release(models.Model):
    title = models.CharField(max_length=100)
    short_title = models.CharField(
        max_length=12, 
        help_text='E.g. LSFTEOTW'
    )
    release_date = models.DateField(blank=True, null=True)
    cover_image = models.ImageField(upload_to='cover_art')
    spotify_link = models.URLField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-release_date', 'title']

# V I D E O = title, youtubelink, order
class Video(models.Model):
    title = models.CharField(max_length=25)
    youtube_link = models.URLField()
    priority = models.IntegerField(
        help_text='Lower numbers appear more prominently.',
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['priority', 'title']

# R E E L = selection of photos (many-to-one)
class Reel(models.Model):
    era = models.CharField(
        max_length=50,
        help_text="What release, time or situation do these photos relate to?"
    )
    year = models.IntegerField(
        help_text='More recent year appears more prominently.',
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.era

    class Meta:
        ordering = ['-year']

# P H O T O = image
class Photo(models.Model):
    reel = models.ForeignKey(Reel, related_name='photos', on_delete=models.CASCADE)
    desc = models.CharField(
        max_length=50,
        help_text="Short description of picture"
    )
    picture = models.ImageField(upload_to='press_pics/fullsize')
    thumbnail = models.ImageField(
        upload_to='press_pics/thumb',
        blank=True,
        null=True,
        help_text="Compressed version of this image"
    )
    lazy = models.FileField(
        upload_to='press_pics/pixels',
        blank=True,
        null=True,
        help_text="Super small SVG for lazy loads"
    )

    def __str__(self):
        return self.desc
