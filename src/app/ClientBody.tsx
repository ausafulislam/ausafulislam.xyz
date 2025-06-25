"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("antialiased", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <body suppressHydrationWarning>
      {children}
    </body>
  );
}
