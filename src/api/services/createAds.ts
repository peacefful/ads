import { database } from '@/lib/appwrite'
import { APP_DB_ID } from '@/constans/app.constants'
import { ID } from 'appwrite'
import type { TAdsForm } from '@/components'
import type { Models } from 'appwrite'

//Отправляем запрос на сервис appwrite для создания записи
// в базу данных (Используя уникальный идентификатор, идентификатор коллекций, и сами данные в аргументе data)
export const createAds = async (data: TAdsForm): Promise<Models.Document | null> => {
  try {
    return await database.createDocument(APP_DB_ID, '67449ccd00105677bdee', ID.unique(), data)
  } catch (error) {
    return null
  }
}
