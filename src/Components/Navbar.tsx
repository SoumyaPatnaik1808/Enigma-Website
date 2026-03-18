import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "Team", "Projects", "Blogs", "Contact"];

export default function Navbar() {
    const [activeNav, setActiveNav] = useState("Home");
    const [typedLogo, setTypedLogo] = useState("");
    const logoText = "ENIGMA";

    useEffect(() => {
        let i = 0;
        setTypedLogo("");
        const interval = setInterval(() => {
            if (i < logoText.length) {
                setTypedLogo(logoText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="flex justify-between items-center px-12 py-5 relative z-10">
            <div className="flex items-center gap-1.5 font-mono text-[18px] font-bold text-[#22c55e]">
                <img src="Enigma_logo.png" alt="Enigma Logo" className="h-20 w-auto" />
                <h2>
                    <span className={typedLogo.length < logoText.length ? "cursor-blink" : ""}>
                        {typedLogo}
                    </span>
                </h2>
            </div>

            <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) =>
                    link === activeNav ? (
                        <button
                            key={link}
                            className="nav-active font-mono text-[14px] font-bold border-none cursor-pointer"
                            onClick={() => setActiveNav(link)}
                        >
                            {link}
                        </button>
                    ) : (
                        <button
                            key={link}
                            className="nav-link"
                            onClick={() => setActiveNav(link)}
                        >
                            {link}
                        </button>
                    )
                )}
            </div>
        </nav>
    );
}
