## Gravitas Auto Attendance marker
An automation script written using selenium js


<br />
<br />

### Steps to run

<br />


* Download the latest release of firefox and geckodriver

<br />

https://github.com/mozilla/geckodriver/releases/download/v0.23.0/geckodriver-v0.23.0-arm7hf.tar.gz

<br />

* clone the project and cd into it

* create a .env file like this:

<br />

```
EMAIL=SOMEEMAIL
PASSWORD=ksbfsbafjbsjfbas
URL=http://info.vit.ac.in/gravitas18/gravitas/gravitas_coordinator_login.asp
EVENT_PARTICIPANTS_URL=http://info.vit.ac.in/gravitas18/gravitas/coord_event_participants.asp
```

<br />

* Copy the CSV attendance list to ./helpers as devtalks.csv

* Execute the following code:

<br />

```bash
$ npm i && npm start
```

<br />

### Note

<br />

Only works on firefox

