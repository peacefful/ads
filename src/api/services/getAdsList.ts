import { database } from '@/lib/appwrite'
import { APP_DB_ID } from '@/constans/app.constants'
import { type Models, Query } from 'appwrite'

//Отправляем запрос на сервис appwrite для получения всех записей
export const getAdsList = async (): Promise<Models.DocumentList<Models.Document> | null> => {
  try {
    return await database.listDocuments(APP_DB_ID, '67449ccd00105677bdee')
  } catch (error) {
    return null
  }
}
