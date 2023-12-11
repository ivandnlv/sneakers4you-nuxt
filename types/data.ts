interface IData {
  id: number;
}
interface IDataAttributesTemplate {
  [key: string]: any;
}
interface IDataAttributes extends IDataAttributesTemplate {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface IResponseTemplate {
  data: IData;
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

interface IImageResponse extends IResponseTemplate {
  data: {
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail?: ImageFormat;
        small?: ImageFormat;
        medium?: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      createdAt: string;
      updatedAt: string;
    };
  } & IData;
}

export type { IResponseTemplate, IData, IImageResponse, IDataAttributes };
