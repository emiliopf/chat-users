<p align="center">

  <h3 align="center">USERS - <a href="https://github.com/emiliopf/chat-app">CHAT APP</a></h3>
  <p align="center">
    Users microservice.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#set-up">Set Up</a></li>
      </ul>
    </li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
<br />


## About The Project


Users microservice is responsible for create new users and generate access token for the whole app.



## Gettiing Started

### Prerequisites

* [Node](https://nodejs.org/en/) v15.11 or higher.
* Mysql Server


### Set Up

1. Add [database](/src/config/database.ts) environment variables.
2. Add [jwt](/src/config/jwt.ts) environment variables.
3. Launch `npm run start`

## Endpoints

### **Create users**

```http
POST /users/create

```

BODY
```
{
	"alias": "emilio"
}
```

RESPONSE:

```
{
  "idUser": 1,
  "alias": "emilio"
}
```


### **Obtain access token**

```http
POST /users/token
```

BODY
```
{
  "idUser": 1,
  "idRoom": 1,
  "rol": "guest"
}
```

RESPONSE:

```
{
  "token": "JWT TOKEN"
}
```

## Built with

*[NestJS](https://nestjs.com/)

## License

[MIT licensed](LICENSE).
