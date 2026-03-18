import { useState, useEffect } from "react";
import '../index.css';



import Navbar from "./Navbar";

export default function EnigmaLanding() {
    const [typed, setTyped] = useState("");
    const fullText = "coding_club";


    useEffect(() => {
        let i = 0;
        setTyped("");
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setTyped(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 120);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col">





                <Navbar />


                <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-[60px] pb-[80px] relative z-[5]">

                    <div className=" comment-badge mb-10">
                        <span className="opacity-60">{"//"}</span>
                        <span className={typed.length < fullText.length ? "cursor-blink" : ""}>
                            {typed}
                        </span>
                    </div>


                    <div className=" flex items-center gap-5 mb-7">
                        <span className="bracket-left font-['Syne',sans-serif] text-[clamp(64px,10vw,120px)] font-extrabold text-white leading-none">
                            {"{"}
                        </span>
                        <h1 className="font-syne text-[clamp(64px,10vw,120px)] font-extrabold text-[#22c55e] m-0 leading-none tracking-[-0.02em] [text-shadow:0_0_60px_rgba(34,197,94,0.45)]">
                            Enigma
                        </h1>
                        <span className="bracket-right font-['Syne',sans-serif] text-[clamp(64px,10vw,120px)] font-extrabold text-white leading-none">
                            {"}"}
                        </span>
                    </div>


                    <p className="fade-up fade-up-3 font-mono text-[clamp(14px,1.8vw,18px)] text-[rgba(255,255,255,0.65)] max-w-[560px] leading-[1.7] m-0 mb-[48px]">
                        Where curiosity meets code.{" "}
                        <span className="text-[rgba(255,255,255,0.9)]">
                            We build, break, and innovate
                        </span>{" "}
                        — one commit at a time.
                    </p>


                    <div className=" flex gap-4 flex-wrap justify-center">
                        <button className="btn-primary">Explore Projects</button>

                    </div>
                </main>


                <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-8 z-[5]">
                    {[
                        { label: "members", value: "120+" },
                        { label: "projects", value: "34" },
                        { label: "commits", value: "8.2k" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-baseline gap-2 font-mono"
                        >
                            <span className="text-[#22c55e] text-[18px] font-bold">
                                {stat.value}
                            </span>
                            <span className="text-[rgba(255,255,255,0.35)] text-[12px]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}