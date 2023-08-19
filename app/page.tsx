import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gracias | Psiconfort",
  description: "Taller: Consultorio en Casa",
};

export default function Home() {
  return (
    <main
      className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8"
      style={{
        backgroundColor: "#E3DCD0",
        backgroundImage: "radial-gradient(#be8e43 0.5px, #E3DCD0 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      <div className="text-center">
        <Image
          className="mx-auto"
          src={"/IMG_7675.png"}
          width={200}
          height={200}
          alt="Sofá con cojines y manta"
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Gracias por tu apoyo
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Pronto te estaré contactando via correo electrónico para que tengas
          toda la información sobre mi taller
        </p>
      </div>
    </main>
  );
}
