import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <section className="relative h-[400px] bg-gray-200 flex items-center justify-center text-center">
      <img
        src="/voluntarios.jpg"
        alt="Voluntários sorrindo"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Um gesto de amor pode mudar o mundo.
        </h1>
        <Button asChild>
          <a href="#actions">Estou dentro!</a>
        </Button>
      </div>
    </section>
  );
}
