import React from 'react';

// import animationData from "../../Assets/animation/24151-ecommerce-animation.json"; // Ensure path is correct

// Default options for Lottie animation
const Loader: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, // autoplay animation
        // animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="w-100 h-100vh d-flex justify-content-center align-items-center">
            {/* <Lottie options={defaultOptions} width={300} height={300} /> */}
        </div>
    );
};

export default Loader;