from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return render(request, "index.html")


def about(request):
    return render(request, "about.html")


def contact(request):
    return render(request, "contact.html")


def blogs(request):
    return render(request, "blogs.html")


def portfolio(request):
    return render(request, "Portfolio.html")


def base(request):
    return render(request, "base.html")
