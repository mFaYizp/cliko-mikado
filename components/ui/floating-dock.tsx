  "use client";
  import { cn } from "@/lib/utils";
  import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
  import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
  } from "framer-motion";
  import Link from "next/link";
  import { useRef, useState } from "react";

  export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
  }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
  }) => {
    return (
      <>
        <FloatingDockDesktop items={items} className={desktopClassName} />
        <FloatingDockMobile items={items} className={mobileClassName} />
      </>
    );
  };

  const FloatingDockMobile = ({
    items,
    className,
  }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
  }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className={cn("relative hidden", className)}>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-[1px]"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    key={item.title}
                    className="h-10 w-10 bg-black-50 dark:bg-neutral-900 flex items-center justify-center"
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="h-10 w-10 bg-black-50 dark:bg-black-800 flex items-center justify-center"
        >
          <IconLayoutNavbarCollapse className="h-5 w-5 text-white dark:text-neutral-400" />
        </button>
      </div>
    );
  };

  const FloatingDockDesktop = ({
    items,
    className,
  }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
  }) => {
    let mouseX = useMotionValue(Infinity);
    return (
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto hidden md:flex h-16 gap-[7px] items-end bg-black-50 pb-3",
          className
        )}
        // style={{
        //   transform: "translateX(-15px)", // Shift entire container to the left
        // }}
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0, y: 10, transition: { delay: 0.05 },
            }}
          >
            <IconContainer mouseX={mouseX} {...item} />
          </motion.div>
        ))}
      </motion.div>
    );
  };


  function IconContainer({
    mouseX,
    title,
    icon,
    href,
  }: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
  }) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
      let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-140, 0, 150], [35, 80, 35]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [35, 80, 35]);

    let width = useSpring(widthTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
    let height = useSpring(heightTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
      <Link href={href}>
        <motion.div
          ref={ref} 
          style={{ width, height }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="aspect-square bg-[#222222] flex items-center justify-center relative"
        >
         {/* <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 2, x: "-50%" }}
                className="px-2 py-0.5 whitespace-pre rounded-md bg-black-100 text-white-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
              >
                {title}
              </motion.div>
            )}
          </AnimatePresence>*/}

          <motion.div
            style={{
              scale: hovered ? 2 : 1, 
              transition: "all 0.2s ease-in-out", 
            }}
            className="flex items-center justify-center text-white"
          >
            {icon}
          </motion.div>
        </motion.div>
      </Link>
    );
  }