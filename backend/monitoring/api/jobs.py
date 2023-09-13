# import random
#
# from apscheduler.schedulers.background import BackgroundScheduler
#
# from api.mainmodels.sensors import Sensors
# from api.mainmodels.hospitals import Hospital
# from datetime import datetime
#
#
# def generate_random_float(start, end):
#     random_float = round(random.uniform(start, end), 1)
#     return random_float
# def storevalues():
#     myhospital = Hospital.objects.get(id=1)
#     mypressure = generate_random_float(4.3,5.7)
#     mytempin = generate_random_float(25.6 , 34.7)
#     mypurity = generate_random_float(80, 99.8)
#     mytempout = generate_random_float(25.6, 34.7)
#     sensor = Sensors.objects.create(hospital= myhospital, datetime=datetime.now().__format__("%Y-%m-%dT%H:%M:%SZ"),
#                                     pressure=mypressure, tempin=mytempin, purity=mypurity, tempout=mytempout)
#     print('successfully created')
#
import random
from api.mainmodels.sensors import Sensors
from api.mainmodels.hospitals import Hospital
from datetime import datetime
from apscheduler.jobstores.base import JobLookupError
from django_apscheduler.jobstores import DjangoJobStore, register_events, register_job
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger

scheduler = BackgroundScheduler()
scheduler.add_jobstore(DjangoJobStore(), "default")

def generate_random_float(start, end):
    random_float = round(random.uniform(start, end), 1)
    return random_float

@register_job(scheduler, IntervalTrigger(seconds=30), id='my_function', replace_existing=True)
def my_function():
        myhospital = Hospital.objects.get(id=1)
        mypressure = generate_random_float(4.3,5.7)
        mytempin = generate_random_float(25.6 , 34.7)
        mypurity = generate_random_float(80, 99.8)
        mytempout = generate_random_float(25.6, 34.7)
        sensor = Sensors.objects.create(hospital= myhospital, datetime=datetime.now().__format__("%Y-%m-%dT%H:%M:%SZ"),
                                        pressure=mypressure, tempin=mytempin, purity=mypurity, tempout=mytempout)
        print('successfully created')
