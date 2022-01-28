# Setup the blog part

## Docker stack

A Caddy server is first mounted to handle reverse proxying, redirecting and automatically serving SSL via Let's Encrypt certs.
Then, a MySQL database is created with a specific user for Ghost.
Finally, Ghost is installed in a third container, serving the files requested by the Caddy server and storing what's necessary in its MySQL database.

## Environment variables

There are some specific variables needed to make Ghost and MySQL run correctly. Put them all in a `.env` file at the root of the `blog/` folder.

### Ghost specific variables

- database__connection__user
- database__connection__password
- mail__options__auth__user
- mail__options__auth__pass
- twitter__privateReadOnlyToken

### MySQL specific variables

- MYSQL_ROOT_PASSWORD
- MYSQL_DATABASE
- MYSQL_USER
- MYSQL_PASSWORD

## Launch

Use the `docker-compose up -d` command to launch the containers creation.
