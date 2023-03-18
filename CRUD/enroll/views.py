from django.shortcuts import render, HttpResponseRedirect
from django.contrib import messages
from .forms import UserRegistration
from .models import adduser
# Create your views here
def add_show(request):
  if request.method == 'POST':
    fm = UserRegistration(request.POST)
    if fm.is_valid():
      
      fm.save()
      messages.success(request,'Data Added Successfully!!!!')
      fm = UserRegistration()
  else:
    fm = UserRegistration()
    

  add = adduser.objects.all()

  return render(request, 'enroll/Insert&Display.html', {'form':fm,
  'all': add})

def update_data(request, id):
    if request.method =='POST':
        pi = adduser.objects.get(pk=id)
        fm = UserRegistration(request.POST, instance=pi)
        if fm.is_valid():
            fm.save()
    else:
        pi = adduser.objects.get(pk=id)
        fm = UserRegistration(instance=pi)
    return render(request, 'enroll/update.html', {'form':fm, 'id':id})


def delete_data(request, id):
  if request.method =='POST':
     pi = adduser.objects.get(pk=id)
     pi.delete()
     return HttpResponseRedirect('/')