import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import banner from "../assets/imgs/banner.jpg"
function Home(){
    return(
        <>
            <Header/>
            <Navbar/>
            <section>
                <img src={banner} alt="" className="banner"/>
                <h1>Bem vindo !</h1>
                    <p>A Good Animal promove ações educativas em escolas, para conscientizar as crianças sobre a importância da preservação dos animais e do meio ambiente. Além disso, a organização oferece palestras e workshops em empresas, para difundir o tema do bem-estar animal e a responsabilidade social das empresas que lidam com animais.

Com uma equipe formada por veterinários, ambientalistas, advogados e outros profissionais ligados ao mundo animal, a Good Animal trabalha incansavelmente para garantir que os animais tenham uma vida digna e respeitada. A organização tem como objetivo final tornar o mundo um lugar melhor para todos os seres vivos, contribuindo para a construção de uma sociedade mais justa e solidária.</p>
            <h1>Onde Atuamos</h1>
            <p>A Good Animal é uma ONG de proteção animal que atua em todo o território nacional, ou seja, em diversas regiões do Brasil. A organização atua em parceria com outras ONGs e pet shops, bem como com órgãos governamentais e iniciativas privadas, para ampliar sua área de atuação e alcançar o maior número possível de animais e pessoas. As ações da Good Animal incluem o resgate de animais em situação de risco, a conscientização da população sobre a importância da adoção de animais e da proteção animal, além do monitoramento de denúncias de maus tratos e de descarte irregular de animais. A Good Animal também trabalha com ações de castração e vacinação, em parceria com clínicas e hospitais veterinários, a fim de minimizar o abandono de animais nas ruas e garantir sua saúde e bem-estar.</p>

        <h1>Como nos ajudar</h1>
        <p>        Existem diversas formas de ajudar a Good Animal em seu trabalho. Abaixo, seguem algumas opções:</p>
        <ul>
            <li>1. Doação financeira</li>
            <li>2. Voluntariado</li>
            <li>3. Divulgação</li>
            <li>4. Adoção de animais</li>
            <li>5. Trabalho em redes sociais</li>
            <li>6. Doação de itens</li>
        </ul>

            </section>
            <Footer/>
        </>
    )
}
export default Home