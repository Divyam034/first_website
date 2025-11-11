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

## Deployment on Render

1. Create a new Web Service in Render pointing to this repository.
2. Set the build command (optional for pure Python):
   - Leave blank or `pip install -r requirements.txt && python manage.py collectstatic --noinput`.
3. Set the start command to match the `Procfile`:
   - `gunicorn dyotiverse_site.wsgi:application --log-file -`
4. Add environment variables (Settings → Environment):
   - `DJANGO_SECRET_KEY` (long random string)
   - `DEBUG` = `False`
   - `ALLOWED_HOSTS` = `your-service-name.onrender.com` (add custom domain when ready)
   - (Render will provide `DATABASE_URL` automatically if you add a Postgres instance)
5. Provision a Postgres database (optional—SQLite is not suited for production ephemeral filesystems).
6. Trigger a deploy; then run migrations via Render Shell:
   - `python manage.py migrate`
7. (Optional) Create a superuser: `python manage.py createsuperuser`.
8. Upload images either through the admin or deploy them as part of `media/` (note: for persistent user uploads you should use an external object store like S3; Render disk is ephemeral on some plans).

### Common 500 Error Causes & Fixes
| Symptom | Cause | Fix |
|---------|-------|-----|
| 500 immediately on first request | Missing or invalid `DJANGO_SECRET_KEY` | Set a long random secret in environment variables |
| 500 for admin/login POST | Absent in `CSRF_TRUSTED_ORIGINS` | Ensure host appears in `ALLOWED_HOSTS`; settings auto-derive trusted origins |
| Static files 404 / 500 after deploy | `collectstatic` not run or manifest mismatch | Run `python manage.py collectstatic --noinput`; redeploy |
| Database OperationalError | No migrations applied | Run `python manage.py migrate` |
| DisallowedHost | Host not in `ALLOWED_HOSTS` | Add `your-service-name.onrender.com` |
| Infinite redirect or mixed content | HTTPS flags misconfigured early | Enable `SECURE_SSL_REDIRECT` only after confirming HTTPS endpoint |

### Environment Variable Reference
See `.env.example` for a template. In production never commit the real `.env`.

### Health Check
Render's health check should hit `/` (home). If you configure a different path ensure it returns 200.

### Logging
Application logs (including stack traces for 500s) appear in Render dashboard. Use them to pinpoint line numbers.

---
Happy deploying! If you add user uploads, integrate a persistent storage backend.
