from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.urls import reverse
from django.urls import reverse_lazy
def open(request):
    return render(request, 'open.html')

def c2(request):
    return render(request, 'c2.html')

def half1(request):
    pause_image_url = "pause.png"  # Update this with the actual URL
    play_image_url = "play.png"  # Update this with the actual URL
    
    return render(request, 'half1.html', {'pause_image_url': pause_image_url, 'play_image_url': play_image_url})
def login(request):
    return render(request, 'login.html')
def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']
        
        # Check if passwords match
        if password != password2:
            messages.error(request, "Passwords do not match")
            return redirect('minidjango:register')

        # Check if user already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists")
            return redirect('minidjango:register')
        
        # Create the user
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        messages.success(request, "Registration successful")

        # Authenticate the user
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # Log in the user
            login(request, user)

            return redirect('minidjango:game')  # Redirect to the game page after successful registration
        else:
            messages.error(request, "Failed to log in after registration")

    return render(request, 'register.html')


# def user_login(request):
#     if not request.session.get('registered'):
#         messages.error(request, 'Register before logging in')
#         return redirect(reverse('minidjango:register'))
def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('minidjango:game')
        else:
            messages.error(request, "Incorrect email or password")
    
    return render(request, 'login.html')