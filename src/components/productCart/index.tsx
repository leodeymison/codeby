import { _Container, _Heading, _Card } from '../../styled/global';

export default function ProductCart() {
    return (
        <_Container dplay='flex' pd={1}>
            <_Card>
                <img
                    height="100px"
                    width="100px"
                    src="https://thumbs.dreamstime.com/b/%C3%ADcone-da-bala-no-estilo-liso-isolado-fundo-branco-desenhos-animados-muni%C3%A7%C3%A3o-arma-do-cartucho-vetor-113307792.jpg" 
                    alt="Produto" />
            </_Card>
            <_Container pd={0.3}>
                <_Heading level={3}>Trufa de morango</_Heading>
                <span>R$1,23</span>
                <p>R$1,11</p>
            </_Container>
        </_Container>
    )
}