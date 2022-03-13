import { AnimatePresence, motion } from "framer-motion";

import { useRef } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} key={router.pathname}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
