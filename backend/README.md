# Backend LES1-TP2

## Installation

### Prerequisites

1. [NodeJs](https://nodejs.org/)
2. [PostgreSQL](https://www.postgresql.org/)
3. [Yarn](https://classic.yarnpkg.com/en/) *(Optional)*

### Configure environment

1. Create a copy of [`.env.example`](.env.example) file
2. Rename this file to [`.env`](.env)
3. Fill the fields properly

### Download dependencies

```bash
$npm install

#or

$yarn
```

### Configure database

#### Create user on pgAdmin or terminal

- Open pgAdmin
- Under "Login/Group Roles", create a new user
  - In privileges, only the field "Can initiate streaming replication and backups" must be denied, all other fields must be YES.

User created in these steps must be inserted in the [`.env`](.env) file, as mentioned previously

#### Create database

```bash
$npx sequelize db:create

#or

$yarn sequelize db:create
```

#### Run migrations

This project uses migrations for audit databases changes, you can run all with the following commands

```bash
$npx sequelize db:migrate

#or

$yarn sequelize db:migrate
```

#### Run Seeders

This project uses seeders to start the audit databases, you can run everything with the following commands

```bash
$npx sequelize db:seed:all

#or

$yarn sequelize db:seed:all
```

### Run project

```bash
$npm run dev

#or

$yarn dev
```
