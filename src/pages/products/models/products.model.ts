export default class ProductsModel {
  public id: number | null = null;
  public name: string | null = null;
 

  public about: {
    id: number;
    title: string;
    description: string;
  } = {
    id: 0,
    title: "",
    description: "",
  };

  public features: {
    amount: string;
    comission: string;
    initialPayment: string;
    percentage: string;
    period: string;
  } = {
    amount: "",
    comission: "",
    initialPayment: "",
    percentage: "",
    period: "",
  };

  public file: {
    id: number;
    url: string;
  } = {
    id: 0,
    url: "",
  };

  constructor(item: any) {
    this._setId(item);
    this._setName(item);
    this._setAbout(item);
    this._setFeatures(item);
    this._setFile(item);
  }

  private _setId({ id }: any) {
    this.id = id;
  }

  private _setName({ name }: any) {
    this.name = name;
  }

  private _setAbout({ about }: any) {
    this.about.id = about.id;
    this.about.title = about.title;
    this.about.description = about.description;
  }

  private _setFeatures({ features }: any) {
    this.features.amount = features.amount;
    this.features.comission = features.comission;
    this.features.initialPayment = features.initialPayment;
    this.features.percentage = features.percentage;
    this.features.period = features.period;
  }

  private _setFile({ file }: any) {
    this.file.id = file.id;
    this.file.url = file.url;
  }
}
