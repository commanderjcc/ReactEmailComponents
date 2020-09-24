import Img from "./Blocks/Img";
import Paragraph from "./Blocks/Paragraph";
import Title from "./Blocks/Title";
import Unsubscribe from "./Blocks/Unsubscribe";
import Cell from "./Utils/Cell";
import Row from "./Utils/Row";
import Table from "./Utils/Table";
import ViewRoot from "./Utils/ViewRoot";
import hasher from "./Utils/hasher";
import emailComponent from "./emailComponent";

let REC = {
  Img: Img,
  Paragraph: Paragraph,
  Title: Title,
  Unsubscribe: Unsubscribe,
  Cell: Cell,
  Row: Row,
  Table: Table,
  ViewRoot: ViewRoot,
  hasher: hasher,
  emailComponent: emailComponent,
};

export default REC; 

export {
  Img,
  Paragraph,
  Title,
  Unsubscribe,
  Cell,
  Row,
  Table,
  ViewRoot,
  hasher,
  emailComponent,
};
