from rest_framework import serializers
from .models import Advert


# class AdvertListSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Advert
#         fields = (
#         	'title',
#         	'author',
#         	'abstract',
#         )

# class AdvertDetailsSerializer(serializers.Serializer):
#     class Meta:
#         model = Advert
#         fields = (
# 		    "id",
# 	        "title",
# 	        "author__id",
# 	        "author__first_name",
# 	        "author__last_name",
# 	        "author__abstract",
# 	        "author__description",
# 	        "abstract",
# 	        "description",
# 	        "date",
#         )
        

# class ArticleSerializer(serializers.Serializer):
#     class Meta:
#         model = Article

# class TimelineSerializer(serializers.Serializer):
#     tweets = TweetSerializer(many=True)
#     articles = ArticleSerializer(many=True)
