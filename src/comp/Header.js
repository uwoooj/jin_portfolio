import React from "react";
import { Link } from "react-scroll";
import "../App.scss";

function Header() {
    return (
        <div className="header">
            <div className="inn">
                <h1 className="logo">
                    <img src="./Yjin.png"></img>
                </h1>
                <ul className="gnb">
                    <li>
                        <Link to="main" duration={2000}>
                            <span>01</span>
                            <p>main</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="intro" duration={5000}>
                            <span>02</span>
                            <p>Intro</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="project" duration={2000}>
                            <span>03</span>
                            <p>Work</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" duration={2000}>
                            <span>04</span>
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
