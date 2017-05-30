from django.contrib.auth import authenticate
from django import forms
from .models import MailMessage


class MessageForm(forms.ModelForm):
    first_name = forms.CharField(label="First Name", required=True, widget=forms.widgets.TextInput(attrs={'placeholder': 'John'}))
    last_name = forms.CharField(label="Last Name", required=True, widget=forms.widgets.TextInput(attrs={'placeholder': 'Smith'}))
    email = forms.EmailField(label="Email", required=True, widget=forms.widgets.TextInput(attrs={'placeholder': 'JohnSmith@gmail.com'}))
    phone = forms.CharField(label="Phone", required=True, widget=forms.widgets.TextInput(attrs={'placeholder': '2065551212'}))
    message = forms.CharField(label="Message", required=True, widget=forms.widgets.Textarea(attrs={'placeholder': 'Enter your message here.'}))

    class Meta:
        model = MailMessage
        fields = ('first_name', 'last_name', 'email', 'phone', 'message',)
