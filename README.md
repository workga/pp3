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

	Build images:
	/$ source ./build.sh

	Initialize database (You can run it several times without rebuilding images, if you need to recreate database):
	/$ source ./init.sh

	Run containers (on localhost:8081, ctrl+C to stop):
	/$ source ./run.sh

	Build static content (You don't need to restart containers):
	/client/$ npm run build

	Remove images, containers and database docker volume:
	/$ source ./clear.sh
