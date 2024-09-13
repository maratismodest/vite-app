import { persons } from "@/constants/words.ts";
import { IWord } from "@/types";

export const getWords = (): IWord[] => {
  return persons;
};
