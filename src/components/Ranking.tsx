import { Button } from "@/components/ui/button";

export function Ranking() {
  const users = [
    { name: "Maria Souza", actions: 8 },
    { name: "João Pereira", actions: 7 },
    { name: "Ana Lima", actions: 6 },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Ranking dos mais participativos</h2>
      <ul className="space-y-2">
        {users.map((u, i) => (
          <li key={i}>
            {["🥇","🥈","🥉"][i]} {u.name} – {u.actions} ações
          </li>
        ))}
      </ul>
      <Button className="mt-4">Participe e entre no ranking</Button>
    </section>
  );
}
