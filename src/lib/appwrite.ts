// Инициализация проекта серверной части на сервисе appwrite

// Импортируем айди проекта и дополнительные функкции с вспомогательной библиотеки appwrite
import { APP_WRITE_ID } from "@/constans/app.constants";
import { Client, Databases, Storage } from "appwrite";

// Создаем клиента
export const client = new Client();

// Создаем базовую ссылку для обращение к серверу
client.setEndpoint('https://cloud.appwrite.io/v1')

// Устанавливем id для библиотеки appwrite
client.setProject(APP_WRITE_ID);

// Инициализируем базу данных и хранилище для изображений
export const database = new Databases(client);
export const storage = new Storage(client);
