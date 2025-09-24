import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export function QuickSignup() {
  return (
    <section className="my-8 p-6 border rounded-lg bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Cadastre-se em 1 minuto e faça parte da mudança.</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Input type="text" placeholder="Nome" className="border rounded p-2 flex-1" />
        <Input type="email" placeholder="Email" className="border rounded p-2 flex-1" />
        <Input type="tel" placeholder="Telefone" className="border rounded p-2 flex-1" />
        <Button>Quero ajudar</Button>
      </div>
    </section>
  );
}
