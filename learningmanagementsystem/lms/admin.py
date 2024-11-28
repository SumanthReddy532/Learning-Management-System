from django.contrib import admin
from .models import Teacher,Student,Course,CourseCategory

# Register teacher model
admin.site.register(Teacher)
admin.site.register(CourseCategory)
admin.site.register(Course)
admin.site.register(Student)


 
# class TeacherAdmin(admin.ModelAdmin):
#     list_display=('teacher_id','first_name','last_name','email','mobile_number')
#     search_fields=('first_name','last_name','email')

# #Register coursecategory model
# class CourseCatogery(admin.ModelAdmin):
#     list_display=('title')
#     search_fields=('title')
