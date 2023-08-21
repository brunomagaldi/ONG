import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer";

function Sobre() {
  return (
    <>        
    <Header/>
    <Navbar/>
      <div className="sobre">
        <h1>Sobre</h1>
        <p>
        A Good Animal é uma organização não governamental de proteção animal que tem como principal objetivo ajudar animais em situações de abandono e maus-tratos. 
ONG conta com um trabalho de voluntários que se dedicam a resgatar animais em situações de risco, muitas vezes em condições precárias, fornecendo cuidados veterinários, nutricionais e emocionais para a recuperação dos bichinhos. 
Além disso, a Good Animal promove campanhas educativas para conscientizar a população sobre a importância da proteção animal, promovendo palestras, workshops e eventos. 
Good Animal tem como objetivo principal garantir que os animais recebam o respeito e cuidado que merecem, independentemente do seu estado físico ou condição emocional. 
A organização procura criar uma comunidade sensível à causa animal, trabalhando para promover um mundo mais justo e digno para todos os seres vivos.
        </p>
      </div>
      <Footer/>
    </>
  );
}
export default Sobre;
