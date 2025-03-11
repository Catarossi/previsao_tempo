from django.shortcuts import render
import requests, json
from django.conf import settings

API_KEY = settings.API_KEY

# Create your views here.
def index(request):
    previsao = requests.get(f'https://api.hgbrasil.com/weather?key={API_KEY}')
    previsao = previsao.json()

    print(API_KEY)

    context = {
        'hoje':previsao['results'],
        'previsao': previsao['results']['forecast']
    }
    return render(request, 'index.html', context)