import { DescriptionStyled } from './style'

const Description = () => {
  return (
    <DescriptionStyled>
      <div className="box-image">
        <img src="src\assets\images\image-1.jpeg" alt="" />
      </div>
      <section className="desc-box">
        <h1>15 anos da Victória</h1>
        <p>
          Parece que foi ontem que eu sonhava com esse momento, e agora ele está
          quase aqui! Mas nenhuma comemoração seria completa sem as pessoas que
          fazem parte da minha vida. Por isso, quero muito que você esteja
          comigo para celebrar esse dia tão especial!
        </p>
        <p>
          Vai ser um dia inesquecível, cheio de alegria, boas lembranças e,
          claro, muita festa! Sua presença é muito importante para mim, e eu
          ficarei imensamente feliz em compartilhar esse momento com você.
        </p>
        <p>Espero você lá!</p>
      </section>
    </DescriptionStyled>
  )
}

export default Description
