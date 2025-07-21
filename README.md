# 📝 NestJS Todo App with Authentication - Full Backend

This is a full-featured **NestJS backend** for a Todo App with **user authentication using JWT**.

---

## 📁 Folder Structure

```
src/
├── auth/            # Authentication (register, login, JWT)
│   ├── dto/         # Data Transfer Objects for validation
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── jwt.strategy.ts
│   └── jwt-auth.guard.ts
│
├── users/           # User management (currently in-memory)
│   ├── users.service.ts
│   └── users.module.ts
│
├── todos/           # Todo management
│   ├── todos.controller.ts
│   ├── todos.service.ts
│   └── todos.module.ts
│
├── app.module.ts    # Root module
└── main.ts          # App entry point
```

---

## 🏁 Project Setup From Scratch (Step-by-Step)

```bash
# 1. Create a new NestJS project
nest new todo-auth-api
cd todo-auth-api

# 2. Install required packages
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt class-validator class-transformer
npm install --save-dev @types/passport-jwt @types/bcrypt

# 3. Generate modules, controllers, and services
nest g module auth && nest g controller auth && nest g service auth
nest g module users && nest g controller users && nest g service users
nest g module todos && nest g controller todos && nest g service todos

# 4. Run the development server
npm install
npm run start:dev
```

App will run at: `http://localhost:3000`

---

## 🔐 Authentication Flow

### 🔸 Register
**POST** `/auth/register`
```json
{
  "username": "mahad",
  "password": "123456"
}
```
**Response:**
```json
{
  "access_token": "JWT_TOKEN"
}
```

### 🔸 Login
**POST** `/auth/login`
```json
{
  "username": "mahad",
  "password": "123456"
}
```
**Response:**
```json
{
  "access_token": "JWT_TOKEN"
}
```

---

## ✅ Todo Routes (Protected by JWT)

All following routes require `Authorization: Bearer <JWT_TOKEN>` header.

### 🔹 Create Todo
**POST** `/todos`
```json
{
  "text": "Buy groceries"
}
```
**Response:**
```json
{
  "id": 1721553830000,
  "text": "Buy groceries",
  "userId": 123456789
}
```

### 🔹 Get All Todos (for logged-in user)
**GET** `/todos`
**Headers:**
```
Authorization: Bearer JWT_TOKEN
```
**Response:**
```json
[
  {
    "id": 1721553830000,
    "text": "Buy groceries",
    "userId": 123456789
  }
]
```

---

## 🧠 How it Works

- Users are stored in-memory (`users[]`)
- Todos are linked by `userId`
- JWT strategy is used to secure routes
- AuthGuard protects todo routes
- DTOs and `class-validator` enforce input validation

---

## 📦 Important Commands

| Command                 | Description                      |
|------------------------|----------------------------------|
| `npm install`          | Install all dependencies         |
| `npm run start:dev`    | Start dev server with hot reload |
| `nest g module name`   | Generate a new module            |
| `nest g controller`    | Generate a new controller        |
| `nest g service`       | Generate a new service           |

---

## 📚 Key Packages Used

| Package             | Purpose                         |
|---------------------|----------------------------------|
| `@nestjs/jwt`       | JWT creation and verification   |
| `passport-jwt`      | Passport strategy for JWT       |
| `bcrypt`            | Password hashing                |
| `class-validator`   | DTO validation decorators       |
| `@nestjs/passport`  | Passport integration with NestJS|

---

## 🔒 JWT Auth Flow

1. Register/Login → receive JWT
2. Use token in headers: `Authorization: Bearer <token>`
3. NestJS extracts and validates JWT
4. Sets `req.user` = `{ userId, username }`
5. Guarded routes use `@UseGuards(JwtAuthGuard)`

---

## 🧪 Testing Endpoints with Postman / Thunder Client

### Register:
```
POST http://localhost:3000/auth/register
Body (JSON):
{
  "username": "mahad",
  "password": "123456"
}
```

### Login:
```
POST http://localhost:3000/auth/login
Body (JSON):
{
  "username": "mahad",
  "password": "123456"
}
```
Copy the returned `access_token`.

### Create Todo:
```
POST http://localhost:3000/todos
Headers:
  Authorization: Bearer <JWT_TOKEN>
Body:
{
  "text": "Buy groceries"
}
```

### Get Todos:
```
GET http://localhost:3000/todos
Headers:
  Authorization: Bearer <JWT_TOKEN>
```

---

## 🔄 Next Steps

- ✅ Connect MongoDB or SQL (currently in-memory)
- 🔐 Add role-based access
- 📱 Add frontend (React/React Native)
- ✅ Add unit & e2e tests
- 🚀 Dockerize & deploy (Heroku, Vercel, etc.)

---

## 🙋‍♂️ Author
**Mahad's NestJS Todo App**

For any improvements, feel free to ask for database support, frontend examples, or deployment setup!
