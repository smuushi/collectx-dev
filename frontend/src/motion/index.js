const dropdown = {
    itemVariant : {
        open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    },
    ulVariant : {
        open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
            }
        },
        closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
            }
        }
    }
}

const sideBar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

export { 
    dropdown
}