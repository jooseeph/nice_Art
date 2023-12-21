export default class ProductsModel {
  public id: number | null = null;
  public title: string | null = null;
  public description: string | null = null;
  public img: string | undefined = undefined;
  public credit_title: string | null = null;
  public credit_description: string | null = null;
  public credit_information: any | null = null;

  constructor(item: any) {
    this._setId(item);
    this._setTitle(item);
    this._setDescription(item);
    this._setImg(item);
    this._setCredit_title(item);
    this._setCredit_description(item);
    this._setCredit_information(item);
  }

  /**
   * set id
   * @param id
   * @private
   */
  private _setId({ id }: any) {
    this.id = id;
  }

  /**
   * set title
   * @param title
   * @private
   */
  _setTitle({ title }: any) {
    this.title = title;
  }

  /**
   * set body
   * @param description
   * @private
   */
  _setDescription({ description }: any) {
    this.description = description;
  }

  /**
   * set userId
   * @param img
   * @private
   */
  _setImg({ img }: any) {
    this.img = img;
  }

  /**
   * set userId
   * @param credit_title
   * @private
   */
  _setCredit_title({ credit_title }: any) {
    this.credit_title = credit_title;
  }

  /**
   * set userId
   * @param credit_description
   * @private
   */
  _setCredit_description({ credit_description }: any) {
    this.credit_description = credit_description;
  }

  /**
   * set userId
   * @param credit_information
   * @private
   */
  _setCredit_information({ credit_information }: any) {
    this.credit_information = credit_information;
  }
}
