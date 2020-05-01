# Short description

This is a starter and most basic program to use a **Docker** with *mariadb image* to get data from the container using _Node JS backend_.

This is the very first start to microservices, scalability and cloud.

# Guide

It's important to say that I worked with **Ubuntu 19.10** for this project.

## Requeriments

- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker mariadb/server image](https://hub.docker.com/r/mariadb/server)
- [Node JS](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)

### Quick tip

To quickly install all requeriments, create a `install.sh` file and place it whatever you want. You can use any text editor, the important thing is place inside `install.sh` all commands provided by installation page linked above. It should look like this, docker example:

```shell
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

## Getting started

Once you have all installed, open terminal run this commands:

- `npm install` to install all dependencies.

- Run mariadb/server image
    + `sudo docker run -p 3306:3306 --name maria -e MARIADB_ROOT_PASSWORD=password mariadb/server:10.4`
    + If you have more than one instance of mysql or mariadb running, you can change **3306**:3306 that port to other not in use.

- You have connected to docker container.

## Managing mariadb without client installed

- `sudo docker exec -it maria bash` to execute terminal inside container.
- `mysql -u root -p` to access database (have to enter same password of `MARIADB_ROOT_PASSWORD=password`)
- Now you are inside of mysql, you can perform any query.

---

That is pretty much all, only thing you have to do is insert more data to mariadb maybe with **post** route and form in a web page, but this is like a boilerplate example.