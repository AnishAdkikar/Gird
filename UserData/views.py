
# Create your views here.
from django.contrib.auth import login as django_login, logout as django_logout, authenticate
from django.shortcuts import render, redirect
from .form import UserRegistrationForm, UserLoginForm



def user_registration(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            django_login(request, user)
            return redirect('home')  # Redirect to a success page
    else:
        form = UserRegistrationForm()

    return render(request, 'signup.html', {'form': form})

def login(request):
    if request.method == 'POST':
        form = UserLoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                print("Success")
                django_login(request, user)
                return redirect('home')
            else:
                print("Failed")
    else:
        form = UserLoginForm()
    return render(request, 'login.html', {'form': form})

def home(request):
    return render(request, 'home.html')


def logout(request):
    django_logout(request)
    return redirect('initial')

