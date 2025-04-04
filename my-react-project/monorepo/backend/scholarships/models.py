# from django.db import models
# from datetime import date
# from django.conf import settings

# class Scholarship(models.Model):
#     name = models.CharField(max_length=255)
#     description = models.TextField()
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     deadline = models.DateField(null=True, blank=True)  # allow null for testing
#     is_active = models.BooleanField(default=True)
#     donor_id = models.IntegerField(null=True, blank=True)  # NEW FIELD

#     def __str__(self):
#         return self.name


from django.db import models
from datetime import date
from django.conf import settings

class Scholarship(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    deadline = models.DateField(null=True, blank=True)  # allow null for testing
    is_active = models.BooleanField(default=True)
    donor_id = models.IntegerField(null=True, blank=True)  # NEW FIELD

    # OPTIONAL: Fields for matching (if you decide to support these criteria)
    required_gpa = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    required_major = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name