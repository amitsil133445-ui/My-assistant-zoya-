import { motion } from "motion/react";

interface Props {
  appState: "idle" | "listening" | "processing" | "speaking";
}

export default function ZoyaAvatar({ appState }: Props) {
  const isSpeaking = appState === "speaking";

  return (
    <motion.img
      src="/avatar.png"
      alt="Zoya"
      className="w-10 h-10 rounded-full object-cover border border-white/20"
      animate={isSpeaking ? {
        scale: [1, 1.05, 1],
        opacity: [0.9, 1, 0.9],
        filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
      } : {
        scale: 1,
        opacity: 1,
        filter: "brightness(1)"
      }}
      transition={isSpeaking ? {
        duration: 0.4,
        repeat: Infinity,
        ease: "easeInOut"
      } : {
        duration: 0.3
      }}
    />
  );
}
