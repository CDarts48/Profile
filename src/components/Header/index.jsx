import React from "react";
import Nav from "../Nav";

function Header() {
    return (
        <div>
            <section>
                <header className="flex-row px-1">
                    <div>
                        <h1>Corey Donahue's Portfolio</h1>
                    </div>
                    <div>
                        <Nav />
                    </div>
                </header>
            </section>
            <section class="hero">
                <div class="hero-cta">
                    {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

                    <h2>Welcome</h2>
                    <p>
                        Welcome to Corey Donahue's portfolio page built with React. Here,
                        you can find a small sample of the projects he has worked on over
                        the course of the program.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Header;