import { CircularProgress } from "@material-ui/core";
import Card from "../../components/card/card";

export default function CardList(props) {
  const {comercios, isLoadingRestaurantes} = props;

  return (
    <>
      {!isLoadingRestaurantes? 
        <CircularProgress />:
          comercios.map((rest) => (
            <Card 
              key={rest.id}
              url={rest.url}
              titulo={rest.titulo}
              descripcion={rest.descripcion}
            />
      ))}
    </>
  );
}
