import { useParams } from "react-router-dom";

import Classic24kHoddieSignatureEditrion from "../../pages/product/Classic24kHoodieSignatureEdition";
import ClassicMafiaHoodie from "../../pages/product/ClassicMafiaHoodie";
import ClassicMafiaLongSleeve from "../../pages/product/ClassicMafiaLongSleeve";
import ClassicMafiaTee from "../../pages/product/ClassicMafiaTee";
import Classic24kLongSleeve from "../../pages/product/Classic24kLongSleeve";
import Classic24kTee from "../../pages/product/Classic24kTee";

const link_1 = "classic-24k-hoodie-signature-edition";
const link_2 = "classic-mafia-hoodie";
const link_3 = "classic-mafia-long-sleeve";
const link_4 = "classic-mafia-tee";
const link_5 = "classic-24k-tee";
const link_6 = "classic-24k-long-sleeve";

const DynamicPages = () => {
  const { page } = useParams();

  if (page === link_1 || page === `${link_1}-2`) {
    return <Classic24kHoddieSignatureEditrion />;
  }
  if (page === link_2 || page === `${link_2}-2`) {
    return <ClassicMafiaHoodie />;
  }
  if (page === link_3 || page === `${link_3}-2`) {
    return <ClassicMafiaLongSleeve />;
  }
  if (page === link_4 || page === `${link_4}-2`) {
    return <ClassicMafiaTee />;
  }
  if (page === link_5 || page === `${link_5}-2`) {
    return <Classic24kTee />;
  }
  if (page === link_6 || page === `${link_6}-2`) {
    return <Classic24kLongSleeve />;
  }
};

export default DynamicPages;
