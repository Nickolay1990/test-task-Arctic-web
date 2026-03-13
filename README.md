Тестове завдання для Arctic Web

Додаток для сніпетів

Щоб запустити додаток локально треба перейти в папку frontend та в консолі запустити команду npm run dev.
Потім відкрити другий термінал та перейти в папку backend та запустити команду npm run start:dev (Бекенд можна не запускати тому що додаток фронта настроєний на запити на бекенд які знаходяться на render.com ("https://test-task-arctic-web.onrender.com/snippets"))

Для запуску бекенду знадобляться змінні оточення:
MONGO_URI="mongodb+srv://................................"
PORT=........

В Постмені можна перевірити запити API за такими ендпоінтами:
GET - https://test-task-arctic-web.onrender.com/snippets
POST - https://test-task-arctic-web.onrender.com/snippets (з тілом запиту 
{
    "title": "Basics of Responsive Web Design",
    "content": "REST APIs are one of the most common ways for applications to communicate over the internet. REST stands for Representational State Transfer and defines a set of architectural principles for building scalable web services. These services use standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE to perform operations on resources. In a typical REST API, resources are represented as URLs. For example, /users may return a list of users, while /users/1 returns information about a specific user. The responses are usually formatted in JSON, making them easy for both humans and machines to read. REST APIs are widely used in modern web development. Frontend applications built with frameworks like React, Next.js, or Vue often communicate with backend services through REST endpoints. A well-designed API should be predictable, consistent, and properly documented so developers can easily integrate with it.",
    "tags": ["css", "responsive", "webdesign", "frontend", "layout"],
    "type": "note"
})
GET - https://test-task-arctic-web.onrender.com/snippets/69b2941e0df28f48c6df0f9c
DELETE - https://test-task-arctic-web.onrender.com/snippets/69b2941e0df28f48c6df0f9c
PATCH - https://test-task-arctic-web.onrender.com/snippets/69b2941e0df28f48c6df0f9c (з тілом запиту 
{
    "title": "Basics of Responsive Web Design",
    "tags": ["layout"],
    "type": "note"
})
GET - https://test-task-arctic-web.onrender.com/snippets/tags

Щоб запустити в прод режимі треба виконати команди: 
backend - npm run build & npm run start:prod
frontend - npm run build & npm run start


При запуску фронтенду локально, запити підуть на віддалений сервер render.com (https://test-task-arctic-web.onrender.com/snippets) він може одразу не відповісти тому що це безкоштовна версія, слід трохи почекати щоб сервер прокинувся.

При запуску і фронтенда і бекенда локально треба змінити адресу запитів в файлі frontend\lib\api.ts з https://test-task-arctic-web.onrender.com/ на http://localhost:3001/ або інший порт який ви вказали в змінних оточення.



====================================================================================================================================


Test Task for Arctic Web

Snippet Application

To run the application locally, go to the frontend folder and run the command npm run dev in the terminal. Then, open a second terminal, go to the backend folder, and run the command npm run start:dev (You do not need to run the backend because the frontend application is configured to make requests to the backend hosted on Render.com ("https://test-task-arctic-web.onrender.com/snippets
")).

To run the backend, you will need the following environment variables:
MONGO_URI="mongodb+srv://................................"
PORT=........

In Postman, you can test API requests using the following endpoints:
GET - https://test-task-arctic-web.onrender.com/snippets

POST - https://test-task-arctic-web.onrender.com/snippets
 (with request body
{
"title": "Basics of Responsive Web Design",
"content": "REST APIs are one of the most common ways for applications to communicate over the internet. REST stands for Representational State Transfer and defines a set of architectural principles for building scalable web services. These services use standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE to perform operations on resources. In a typical REST API, resources are represented as URLs. For example, /users may return a list of users, while /users/1 returns information about a specific user. The responses are usually formatted in JSON, making them easy for both humans and machines to read. REST APIs are widely used in modern web development. Frontend applications built with frameworks like React, Next.js, or Vue often communicate with backend services through REST endpoints. A well-designed API should be predictable, consistent, and properly documented so developers can easily integrate with it.",
"tags": ["css", "responsive", "webdesign", "frontend", "layout"],
"type": "note"
})
GET - https://test-task-arctic-web.onrender.com/snippets/69b2941e0df28f48c6df0f9c

DELETE - https://test-task-arctic-web.onrender.com/snippets/69b2941e0df28f48c6df0f9c

PATCH - https://test-task-arctic-web.onrender.com/snippets/69b2941e0df28f48c6df0f9c
 (with request body
{
"title": "Basics of Responsive Web Design",
"tags": ["layout"],
"type": "note"
})
GET - https://test-task-arctic-web.onrender.com/snippets/tags

To run in production mode, execute the following commands:
backend - npm run build & npm run start:prod
frontend - npm run build & npm run start

When running the frontend locally, requests will be sent to the remote Render.com server (https://test-task-arctic-web.onrender.com/snippets
). The server may not respond immediately because this is a free version, so you may need to wait a bit for the server to wake up.

If you are running both the frontend and backend locally, you need to change the request URL in the file frontend\lib\api.ts from https://test-task-arctic-web.onrender.com/
 to http://localhost:3001/
 or another port you specified in the environment variables.