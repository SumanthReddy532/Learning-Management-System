from rest_framework import serializers
from .models import Teacher
from .models import CourseCategory
from .models import Course



class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model= Teacher
        fields=['first_name','last_name','mobile','email','password','confirm_password','Qualification','skills']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model= CourseCategory
        fields=['id','title','description']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
       model= Course
       #fields = '_all_' 
       fields=['id','category','teacher','title','description','featured_img','techs']