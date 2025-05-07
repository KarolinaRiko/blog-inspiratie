import Meditatie from './meditatie.js';
import Yoga from './yoga.js';
import Aromaterapie from './aromaterapie.js';
import { useParams } from "react-router-dom";

const Router = () => {
  const { slug } = useParams();

  if (slug === "meditatie") return <Meditatie />;
  if (slug === "yoga") return <Yoga />;
  if (slug === "aromaterapie") return <Aromaterapie />;
  
  return <p>Pagina nu a fost găsită.</p>;
};

export default Router;