import { useEffect, useRef, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  routeKey?: string;
}

export default function PageTransition({ children, routeKey }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = ref.current;
    if (!el) return;
    el.classList.remove("page-enter");
    void el.offsetWidth;
    el.classList.add("page-enter");
  }, [routeKey]);

  return <div ref={ref}>{children}</div>;
}
