function LeftHero (props) {
    return(
        <div className="hero bg-base-200 flex-1 p-5">
            <div className="hero-content flex-col lg:flex-row">
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="A scenic view of a mountain landscape"
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{props.title}</h1>
                    <p className="py-6">
                        {props.description}
                    </p>
                    <button className="btn btn-primary transition transform duration-300 ease-in-out hover:scale-110 rounded-full">
                        {props.buttonText ? props.buttonText : "Get Started"}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default LeftHero;