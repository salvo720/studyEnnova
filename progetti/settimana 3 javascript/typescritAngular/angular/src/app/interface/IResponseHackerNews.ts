export default interface IResponseHackerNews {
  filter(arg0: any): any;
  by:          string;
  descendants: number;
  id:          number;
  kids:        number[];
  score:       number;
  time:        number;
  title:       string;
  type:        string;
  url:         string;
}
