import random

from apscheduler.schedulers.background import BackgroundScheduler
from .mainmodels.sensors import Sensors
from .mainmodels.hospitals import Hospital
from datetime import datetime


def generate_random_float(start, end):
    random_float = round(random.uniform(start, end), 1)
    return random_float
def storevalues():
    myhospital = Hospital.objects.get(id=1)
    mypressure = generate_random_float(4.3,5.7)
    mytemp = generate_random_float(25.6 , 34.7)
    sensor = Sensors.objects.create(hospital= myhospital, datetime=datetime.now().__format__("%Y-%m-%dT%H:%M:%SZ"), pressure=mypressure, temp=mytemp)
    print('successfully created')


scheduler = BackgroundScheduler()
scheduler.add_job(storevalues, 'interval', seconds=30)
scheduler.start()