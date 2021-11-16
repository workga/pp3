from django.db import models

class Advert(models.Model):
    title   = models.CharField(max_length=60)
    author  = models.CharField(max_length=60)
    
    def __str__(self):
        return  "Title: '{}', Author: '{}'" \
                .format(
                    self.title,
                    self.author,
                )
