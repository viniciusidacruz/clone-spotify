import { Button } from "@/components";

export default function Home() {
  return (
    <main className="p-5 h-screen">
      <section className="w-full h-full flex items-center justify-center">
        <Button
          type="button"
          variants="primary"
          title="Iniciar Spotify"
          aria-label="Botão para iniciar o spotify"
        />
      </section>
    </main>
  );
}
