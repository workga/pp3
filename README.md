## Frontend-Developer Mode:

### Requirements:

	React and npm:
	/$ sudo apt install nodejs npm

	Docker and Docker-compose:
	https://docs.docker.com/engine/install/ubuntu/
	https://docs.docker.com/compose/install/

	Add user to docker group (with reboot):
	/$ sudo usermod -aG docker $USER


### Workflow:

	Build static content:
	/client $ npm run build

	Build images and run (or restart) containers (localhost:8081)
	/$ source ./run.sh

	Stop containers:
	/$ docker-compose down

