from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        from api import jobs  # Import your jobs.py file

        jobs.scheduler.start()
        print("Scheduler started!")
