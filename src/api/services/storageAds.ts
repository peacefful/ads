import { BUCKET_ID } from "@/constans/app.constants";
import { storage } from "@/lib/appwrite";
import { ID, type Models } from "appwrite";

// Запрос на загрузку изображение в хранилище
export const setFileToStorage = async (file: File): Promise<Models.File | null> => {
  try {
    return await storage.createFile(BUCKET_ID, ID.unique(), file)
  } catch (error) {
    return null
  }
}
