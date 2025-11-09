# DyotiVerse — A Tribute Site (Django)

A ready-to-use Django project to host your Ghibli art photos with a soft ambient soundtrack for Jyoti 💖

## What's included
- Django project `dyotiverse_site`
- App `gallery` with a simple photo gallery view (add images to `media/`)
- Landing page with gentle autoplay ambient music (toggle-able)
- Responsive templates and a warm dreamy color theme
- `requirements.txt`, `.env.example`, and deployment notes (Gunicorn + nginx)

## Quick start (development)
1. Python 3.10+ recommended.
2. Create and activate virtualenv:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```
3. Install requirements:
   ```bash
   pip install -r requirements.txt
   ```
4. Create `.env` by copying `.env.example` and set `SECRET_KEY` and `DEBUG=False` for production.
5. Run migrations:
   ```bash
   python manage.py migrate
   ```
6. Create a superuser (optional, for admin):
   ```bash
   python manage.py createsuperuser
   ```
7. Collect static files and run server:
   ```bash
   python manage.py collectstatic
   python manage.py runserver
   ```
8. Add your Ghibli images into `media/ghibli/` and visit `/gallery/` to see them.

Enjoy — make it yours and surprise Jyoti! ❤️
