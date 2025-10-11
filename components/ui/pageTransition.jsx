"use client";
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"


const PageTransition = ({ children }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                {/* Overlay fades from full opacity to transparent on route change */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" } }}
                    exit={{ opacity: 1, transition: { duration: 0.25, ease: "easeInOut" } }}
                    className="h-screen w-screen fixed bg-primary top-0 left-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition
