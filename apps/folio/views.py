from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.views.generic import View
from .forms import MessageForm
from .models import MailMessage

# Create your views here.

class Index(View):
    def get(self, request):
        context = {
        'messageForm': MessageForm()
        }
        return render(request, 'folio/index.html', context)


class Mail(View):
    def post(self, request):
        message_form = MessageForm(request.POST)
        if message_form.is_valid():
            new_message = MailMessage(
            first_name = message_form.cleaned_data['first_name'],
            last_name = message_form.cleaned_data['last_name'],
            email = message_form.cleaned_data['email'],
            phone = message_form.cleaned_data['phone'],
            message = message_form.cleaned_data['message'],
            )
            new_message.save()
            send_mail(
            'New message from jonathanben-ammi.com',
            '<h1>New Message Details</h1>\nName: %s %s\nEmail: %s\nPhone: %s\nMessage: %s' % (new_message.first_name, new_message.last_name, new_message.email, new_message.phone, new_message.message),
            'benammi.jonathan@gmail.com',
            ['jbenammi@gmail.com'],
            fail_silently=False,
            html_message = unicode('''<body style="background-color: rgba(100, 100, 100, 0.5);">
              <div style="background-color: #183a65;">
                <h1 style="color: #FFFFFF; font-family: sans-serif;">NEW MAIL</h1>
              </div>
              <div style="margin: 2%%;">
              <h1 style="color: #183a65; font-family: sans-serif; border-left: 5px double #183a65; border-bottom: 5px double #183a65; padding: 5px;">New Message from jonathanben-ammi.com</h1>
              <table style="font-family: sans-serif;">
                <tbody>
                  <tr>
                    <td style="color: #540165; font-weight:bold;">Name:</td>
                    <td style="color: #FFFFFF;">%s %s</td>
                  </tr>
                  <tr>
                    <td style="color: #540165; font-weight:bold;">Email:</td>
                    <td style="color: #FFFFFF;">%s</td>
                  </tr>
                  <tr>
                    <td style="color: #540165; font-weight:bold;">Phone:</td>
                    <td style="color: #FFFFFF;">%s</td>
                  </tr>
                  <tr>
                    <td style="color: #540165; font-weight:bold;">Message:</td>
                    <td style="color: #FFFFFF;">%s</td>
                  </tr>
                </tbody>
              </table>
              <p style="font-family: sans-serif; font-style: italic; color: #FFFFFF;">do not respond to this email</p>
              </div>
              </body>''') % (new_message.first_name, new_message.last_name, new_message.email, new_message.phone, new_message.message))
            messages.success(request, "Message has been sent")
            messages.success(request, "Thank you for your interest")
            return redirect('folio:index')
        else:
            context = {
            'messageForm': message_form,
            "errors": True,
            }
            return render(request, 'folio/index.html', context)
