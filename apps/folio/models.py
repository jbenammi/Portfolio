from __future__ import unicode_literals
from django.core.mail import send_mail
from django.db import models
# from .forms import MessageForm


class MailMessage(models.Model):
    first_name = models.CharField('First Name', max_length=100)
    last_name = models.CharField('Last Name', max_length=100)
    email = models.EmailField('Email Address', max_length=255)
    phone = models.CharField('Phone', max_length=11)
    message = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return "Message ID: %s | Name: %s %s | Email: %s | Phone: %s" % (self.id, self.first_name, self.last_name, self.email, self.phone)
