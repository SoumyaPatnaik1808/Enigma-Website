
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../index.css";
// Variants for staggered animation
// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.12,
//             delayChildren: 0.2,
//         },
//     },
// };

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.92,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 14,
            duration: 0.7,
        },
    },
};

type TeamMember = {
    initials: string;
    name: string;
    role: string;
    description: string;
    socials?: boolean; // most have them
};

const team: TeamMember[] = [
    {
        initials: "AM",
        name: "Arjun Mehta",
        role: "President",
        description: "Full-stack wizard. Loves Rust and late-night deploys.",
        socials: true,
    },
    {
        initials: "PS",
        name: "Priya Sharma",
        role: "Vice President",
        description: "ML enthusiast turning data into magic since 2021.",
        socials: true,
    },
    {
        initials: "RK",
        name: "Ravi Kumar",
        role: "Tech Lead",
        description: "Systems architect. If it compiles, it ships.",
        socials: true,
    },
    {
        initials: "SP",
        name: "Sneha Patel",
        role: "Design Lead",
        description: "Pixel-perfect designs with a love for dark themes.",
        socials: true,
    },
    {
        initials: "KS",
        name: "Karan Singh",
        role: "Dev Ops",
        description: "Kubernetes whisperer. Automates everything.",
        socials: true,
    },
    {
        initials: "AR",
        name: "Ananya Roy",
        role: "Content Head",
        description: "Technical writer bridging code and communication.",
        socials: true,
    },
];

export default function TeamSection() {
    // const [isVisible, setIsVisible] = useState(false);
    const [typed, setTyped] = useState("");
    const text = "team";

    useEffect(() => {
        let i = 0;
        setTyped("");
        const interval = setInterval(() => {
            if (i < text.length) {
                setTyped(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 180);
        return () => clearInterval(interval);
    }, []);

    // Trigger animation once mounted (you can also use intersection observer)
    // useEffect(() => {
    //     setIsVisible(true);
    // }, []);

    return (
        <section className="min-h-screen bg-[#0a0a0a] py-16 px-5 md:px-10 lg:px-16 text-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">

                    <div className=" comment-badge mb-10">
                        <span className="opacity-60">{"//"}</span>
                        <span className={typed.length < text.length ? "cursor-blink" : ""}>
                            {typed}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                        Meet the <span className="text-green-400">Squad</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        The humans behind the commits.
                    </p>
                </div>



            </div>
        </section>
    );
}