import React from "react";
import './styles.css'
import { useState } from "react";
import { CardActions, Collapse, IconButton } from "@mui/material";

export default function ExpandedCard(/*props*/) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardActions disableSpacing className="postsCards-expand-div">
      <p className="shortText" style={{ display: expanded ? 'none' : 'block' }} > 
        El upcycling, también conocido como supra-reciclaje o reutilización
        creativa, es un enfoque innovador y sostenible para la gestión de
        residuos y la conservación de recursos.{/*props.shortText*/}
      </p>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className="postsCards-expand-div"
      >
        <p className="longText">
          El upcycling, también conocido como supra-reciclaje o reutilización
          creativa, es un enfoque innovador y sostenible para la gestión de
          residuos y la conservación de recursos. A diferencia del reciclaje
          convencional, que implica descomponer materiales para crear nuevos
          productos, el upcycling busca transformar objetos o materiales
          desechados en productos de mayor valor, sin degradar su calidad.
           Este proceso implica la reimaginación y reinvención de elementos que
          normalmente se considerarían basura, dándoles una segunda vida y
          reduciendo la cantidad de desechos enviados a vertederos. El upcycling
          fomenta la creatividad y la innovación, ya que requiere repensar cómo
          se pueden utilizar los materiales existentes de nuevas formas. El
          upcycling se ha convertido en una poderosa herramienta para abordar
          los desafíos medioambientales y sociales que enfrenta nuestro planeta.
          Algunos ejemplos de upcycling incluyen la creación de muebles a partir
          de palets de madera, la confección de ropa a partir de telas
          recicladas o la transformación de objetos cotidianos en piezas de
          arte. Esto no solo reduce la cantidad de residuos, sino que también
          fomenta la economía circular, donde los productos y materiales se
          reutilizan y reciclan continuamente en lugar de desecharse. El
          upcycling no solo beneficia al medio ambiente al reducir la cantidad
          de residuos, sino que también puede generar oportunidades económicas y
          sociales. Muchos emprendedores y artistas han encontrado en el
          upcycling una forma de crear productos únicos y sostenibles que atraen
          a consumidores conscientes de su impacto en el medio ambiente. En
          resumen, el upcycling es una práctica innovadora que transforma
          desechos en tesoros, promoviendo la sostenibilidad, la creatividad y
          la reducción de residuos. Al adoptar el upcycling en nuestras vidas y
          comunidades, podemos contribuir a un mundo más limpio y respetuoso con
          los recursos naturales. ¡Únete al movimiento del upcycling y ayúdanos
          a crear un futuro más sostenible!{/*props.longText*/}
        </p>
      </Collapse>
      <IconButton
        expand={expanded ? "true" : undefined}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        {expanded ? (
          <p className="see-more">Ver menos</p>
        ) : (
          <p className="see-more">Ver mas</p>
        )}
      </IconButton>
    </CardActions>
  );
}
