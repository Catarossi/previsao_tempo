from django.shortcuts import render
import requests, json

# Create your views here.
def index(request):
    previsao = requests.get('https://api.hgbrasil.com/weather')
    previsao = previsao.json()

    context = {
        'hoje':previsao['results'],
        'previsao': previsao['results']['forecast']
    }
    return render(request, 'index.html', context)