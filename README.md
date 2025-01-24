```markdown
# Minha Aplicação Django

Este repositório contém uma aplicação desenvolvida com o framework Django.

Esta aplicação Django consome uma API de previsão do tempo para exibir informações meteorológicas
de forma prática e fácil de entender. Com ela, os usuários podem consultar as condições climáticas atuais
e a previsão para os próximos dias

## Funcionalidades

- Exibir a temperatura do dia atual
- Exbir a velocidade do vento do dia atual
- Exbir a probabilidae de chuva do dia atual
- Exibir o horario de nascer e por do sol do dia atual
- Exbir temperatura mínima e máxima dos proximos dias

## Tecnologias Utilizadas

- Python: 3.13.0
- Django: 5.1.5
- Bootstrap: 5.3.3

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de executar a aplicação:

- Python: https://www.python.org/
- Pipenv ou Virtualenv (opcional, mas recomendado para gerenciamento de dependências)
- Git: https://git-scm.com/

```
## Instalação

Siga os passos abaixo para executar a aplicação localmente:

1. Clone este repositório:
   ```bash
   git clone https://github.com/Catarossi/previsao_tempo.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd previsao_tempo
   ```
3. Crie e ative um ambiente virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate  # No Windows: venv\Scripts\activate
   ```
4. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
5. Configure o arquivo `.env` com as variáveis de ambiente necessárias (veja o exemplo em `.env.example`).

6. Realize as migrações do banco de dados:
   ```bash
   python manage.py migrate
   ```
7. Inicie o servidor de desenvolvimento:
   ```bash
   python manage.py runserver
   ```

A aplicação estará disponível em: `http://127.0.0.1:8000/`.

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça as alterações e commite:
   ```bash
   git commit -m "Descrição da alteração"
   ```
4. Envie as alterações:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request no GitHub.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---
