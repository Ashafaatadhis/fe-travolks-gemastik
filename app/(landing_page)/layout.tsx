import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-6 max-w-7xl m-auto">{children}</div>;
}
