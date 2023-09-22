import { StaticImageData } from "next/image";

export interface Iinput {
  label?: string;
  type: string;
  placeholder: string;
}

export interface ICard {
  url: string | StaticImageData;
  title: string;
  model: IModels[];
}

export interface IModels {
  code: string;
  models: string;
}