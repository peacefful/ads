export type TService = {
  id: number
  title: string;
  description: string | string[];
}

export type TAdsForm = {
  name: string
  surname: string
  description: string
  adsType: string
  adsSubType: string
  file: File | null | string;
}
