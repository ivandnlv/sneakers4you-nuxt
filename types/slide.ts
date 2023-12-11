import type {
  IResponseTemplate,
  IData,
  IDataAttributes,
  IImageResponse,
} from "~/types/data";

interface ISlideData extends IData {
  attributes: {
    slideId: string;
    altText: string;
    image: IImageResponse;
  } & IDataAttributes;
}
interface ISlide {
  data: ISlideData[] & IData[];
}

export type { ISlide };
