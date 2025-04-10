import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const buttonText = "Watch Now!";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen col-start-1 col-end-6 lg:col-start-2 lg:col-end-5 gap-2">
        <LeftHero 
            title="Box Office News!" 
            description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi."
            buttonText={buttonText}
            />
        <RightHero 
            title="Box Office News!" 
            description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi."
            buttonText={buttonText}
            />
        <LeftHero 
            title="Box Office News!" 
            description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi."
            buttonText={buttonText}
            />
    </div>
  );
};

export default Hero;