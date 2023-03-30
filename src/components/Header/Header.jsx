import React from "react";


function Header(){
    return (
        <div className="flex justify-between shadow-lg w-full py-10 px-10 mb-4">
            <div className="text-5xl font-bold">YOUR AI</div>
            <nav className="flex items-center">
                <ol className="grid grid-flow-col gap-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serice</a></li>
                    <li><a href="#">Porthfolio</a></li>
                    <li><a href="#">Gallary</a></li>
                    <li><a href="#">Products</a></li>
                </ol>
                <div>
                    <a className="btn w-29 text-white ml-20 rounded-full" href="Contact now">Contact Now</a></div>
            </nav>
        </div>
    )
}

export default Header;

