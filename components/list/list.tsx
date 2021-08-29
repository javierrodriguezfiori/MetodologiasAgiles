import Card from "../../components/card/card";

export default function CardList(props) {
  const {comercios} = props;
  return (
    <>
      {comercios.map((rest) => (
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
