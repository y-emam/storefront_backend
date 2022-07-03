# Storefront Backend

### Setup:

#### Ports

The port of the server is 3000. and the port of database is 5432.

#### Env

PORT=3000
NODE_ENV=test
POSTGRES_HOST=localhost
POSTGRES_DB=storefront_backend
POSTGRES_DB_TEST=storefront_backend_test
POSTGRES_USER=storefront_backend_admin2
POSTGRES_PASSWORD=nothing
BCRYPT_PASSWORD=a;sdfiads;fiasdfj;
SALT_ROUNDS=10
TOKEN_SECRET=JH@sd#lhFKD&glkD\*sFkLDJSF
JWT_TOKEN=Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjcsImZpcnN0X25hbWUiOiJ5YXNzZXIiLCJsYXN0X25hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkUUxCLjZXRFNYWkt6UE9nbXc5NEUxZTBRWTZHQ3B6RXJDdTFRWk9namljei5xL29mYUhCU0cifSwiaWF0IjoxNjU2NzcxMTU1fQ.VeUtQ7hBHE04GeXeydfL-NuIdGQASCiWYkG8FSEvReY

#### Instructions to setup database

-CREATE DATABASE storefront_backend;
-CREATE DATABASE storefront_backend_test;

-CREATE USER storefront_backend_admin2 with password 'nothing';

-GRANT ALL PRIVILEGES ON DATABASE storefront_backend to storefront_backend_admin2;
-GRANT ALL PRIVILEGES ON DATABASE storefront_backend_test to storefront_backend_admin2;
