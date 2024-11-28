from django.db import models

class Teacher(models.Model):
    
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20) 
    confirm_password = models.CharField(max_length=20)
    Qualification = models.CharField(max_length=100)
    skills = models.CharField(max_length=20)
    

    class Meta:

        # verbose_name="Teacher"
        verbose_name_plural="1.Teacher"
        


class CourseCategory(models.Model): 
    title = models.CharField(max_length=100)
    course_description = models.TextField() 
    
    
    class Meta:
        # verbose_name="courseCategory"
        verbose_name_plural="2.CourseCategory"


class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20) 
    mobile_number = models.CharField(max_length=10)
    


    class Meta:
        # verbose_name="Student"
        verbose_name_plural="3.Student"

class Course(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    title=models.CharField(max_length=150)
    description=models.TextField()
    featured_img=models.ImageField(upload_to='course_imgs/')
    techs=models.TextField()

    


    class Meta:
        verbose_name_plural="4.Course"

   

