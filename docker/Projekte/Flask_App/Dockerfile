FROM python:3.8

WORKDIR /app

# copy requirements.txt and app.py into the current workdir /app
COPY src/* ./

# install all required programs via pip
RUN pip3 install -r requirements.txt

EXPOSE 80

ENV FLASK_RUN_PORT=80
# same as export FLASK_APP=app
# tells flask to run app.py
ENV FLASK_APP=app

# setting --host=0.0.0.0 enables flask to receive requests not only from the
# local machine (i.e. from inside the container) but also external requests
# otherwise localhost:port wouldn't work
CMD ["flask", "run", "--host=0.0.0.0"]



