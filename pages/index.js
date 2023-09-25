import { Inter } from "next/font/google";

import AppRoutes from "./AppRoutes";
import Header from "./components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <AppRoutes />
      </main>
    </>
  );
}
