import backgroundFinaly from '../../assets/background-finaly.svg'
import done from '../../assets/done.svg'
import { Button } from "../../components/button"

export function ForgotCompleted() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative h-full bg-purple">
      <img src={backgroundFinaly} alt="Imagem de fundo" className="absolute" />
      
      <div className="flex flex-col items-center justify-center absolute">
        <img src={done} alt="Ícone de check verde" />
        <h1 className="font-archivo-bold text-white text-6xl mt-10">
          Redefinição enviada!
        </h1>
        <p className="font-poppins-regular text-base text-text-purple-base mt-6 text-center">
          Boa, agora é só checar o e-mail que foi enviado para você<br/>
          redefinir sua senha e aproveitar os estudos.
        </p>
        
        <div className="w-[185px] mt-10">
          <Button
            text="Voltar ao login"
            type="button"
            link="/sign-in"
            disabled={false}
          />
        </div>
      </div>
    </div>
  )
}