import React from "react";

export function Services() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
                Sshhh... This Page is Under Development.
            </h1>
            <img
                src="https://hackmd.io/_uploads/H1R5xM4QJg.png"
                alt="Under Development"
                className="mt-8 max-w-md"
            />
            <h2 className="text-2xl mt-4 font-mono font-bold">The developers burnt their head doing this section </h2>
            <p className="text-xl text-gray-600 mt-8 text-center font-bold leading-relaxed">
                Please don't look for this page as it'll give them {" "}
                <span className="bg-gradient-to-r from-red-500 to-rose-300 text-transparent bg-clip-text animate-pulse">
                ✩°｡⋆anxiety⋆｡°✩. </span> <br />
                Kindly check back later!
            </p>
        </div>
    );
}
