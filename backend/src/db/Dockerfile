FROM mysql:8.0
ENV MYSQL_ROOT_PASSWORD=my-secret-pw
ENV MYSQL_DATABASE=my_project_db
COPY ./init.sql /docker-entrypoint-initdb.d/
EXPOSE 3306
