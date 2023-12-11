import type {
  IData,
  IDataAttributes,
  IImageResponse,
  IResponseTemplate,
} from "~/types";

interface ISneaker extends IData {
  attributes: {
    sneakerId: string;
    title: string;
    brand: string;
    description: string;
    price: number;
    sale: number | null;
    sneakerImages: {
      data: IImageResponse["data"][];
    };
  } & IDataAttributes;
}

interface ISneakerResponse {
  data: ISneaker[];
}

export type { ISneaker, ISneakerResponse };
