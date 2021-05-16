# Node.js API with MariaDB container

This is a guide on how I (a beginner) connected a Node.js API with a Docker MariaDB container.

## Run Locally

It's important to say I worked with **Ubuntu 19.10** for this project.

1. Install all:

   - [Docker](https://docs.docker.com/engine/install/ubuntu/)
   - [Docker mariadb/server image](https://hub.docker.com/r/mariadb/server)
   - [Node JS](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)

   To quickly install all requirements, create a `install.sh` file and place it whatever you want. You can use any text editor, the important thing is place inside `install.sh` all commands provided by installation page linked above. It should look like this, docker example:

   ```bash
   apt-get remove docker docker-engine docker.io containerd runc
   sudo apt-get update
   sudo apt-get install \
      apt-transport-https \
      ca-certificates \
      curl \
      gnupg-agent \
      software-properties-common
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   sudo add-apt-repository \
      "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) \
      stable"
   sudo apt-get update
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

   Once you have copied all commands, open terminal at location you saved the script, then type `bash install.sh` and it will automatically install everything.

2. Getting started:

   Once you have all installed, you can clone repo or fresh start, just open a terminal in folder you have the project and type:

   - `npm install` to install all dependencies.

   - Run mariadb/server image

     - `sudo docker run -p 3306:3306 --name maria -e MARIADB_ROOT_PASSWORD=password mariadb/server:10.4`
     - If you have more than one instance of mysql or mariadb running, you can change **3306**:3306 that port to other not in use.

   - You have connected to docker container.

3. Managing mariadb without client installed

   - `sudo docker exec -it maria bash` to execute terminal inside container.
   - `mysql -u root -p` to access database (have to enter same password of `MARIADB_ROOT_PASSWORD=password`)
   - Now you are inside of mysql, you can perform any query.

That is pretty much all, only thing you have to do is insert more data to mariadb maybe with **post** route and form in a web page, but this is like a boilerplate example.

## Tech Stack

| Name                                                                                                                                          | Description       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [Docker](https://docs.docker.com/get-started/overview/#:~:text=Docker%20is%20an%20open%20platform,ways%20you%20manage%20your%20applications.) | Container service |
| [Node.js](https://nodejs.org/es/about/)                                                                                                       | HTTP Server       |
| [MariaDB](https://mariadb.com/kb/en/about-mariadb-software/#:~:text=MariaDB%20is%20an%20open%2Dsource,the%20founders%20of%20MySQL%20AB.)      | Database          |

## Roadmap

- [x] API connected to docker container
- [ ] Dockerfile
- [ ] Upload to some container registry
- [ ] Deploy the app
- [ ] CI/CD

## Appendix

I was getting an error when trying to get the data, was an error like _"Error establishing a database connection"_, doesn't remember exactly, but I solved that using [this guide](https://hackernoon.com/getting-started-with-mariadb-using-docker-and-nodejs-fo433yp2).
