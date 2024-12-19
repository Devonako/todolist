1. Create a Dockerfile

In the same directory as your index.html, style.css, and script.js files, create a new file named Dockerfile (no file extension). Add the following content to it:

Dockerfile

FROM httpd:latest 

COPY . /usr/local/apache2/htdocs/

EXPOSE 80
Explanation:

FROM httpd:latest: This line specifies that you're using the official Apache web server image as the base image for your Docker container.
COPY . /usr/local/apache2/htdocs/: This line copies all the files from your current directory (where the Dockerfile is located) into the /usr/local/apache2/htdocs/ directory inside the container. This is the default directory where Apache serves web files from.
EXPOSE 80: This line exposes port 80 of the container, which is the standard HTTP port.
2. Build the Docker image

Open your terminal or command prompt, navigate to the directory containing your Dockerfile, and run the following command:

Bash

docker build -t todo-list-app .
This command builds a Docker image named todo-list-app using the instructions in your Dockerfile. The . at the end specifies the build context (the current directory).

3. Run the Docker container

Once the image is built, you can run a container from it using this command:

Bash

docker run -d -p 8080:80 todo-list-app
This command does the following:

-d: Runs the container in detached mode (in the background).
-p 8080:80: Maps port 8080 on your host machine to port 80 inside the container. This allows you to access the app in your browser.
todo-list-app: Specifies the name of the image to run.
4. Access your app

Open your web browser and go to http://localhost:8080/. You should see your to-do list app running inside the Docker container!

Now your to-do list app is dockerized. You can easily share this Docker image with others, and they can run it on any system that has Docker installed without worrying about dependencies or configurations.