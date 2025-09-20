import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectLabel, SelectItem } from './ui/select';

export function Filters() {
    return (
        <section className="my-8 flex flex-col md:flex-row gap-6 items-start md:items-end">
            {/* Buscar ações */}
            <div className="flex flex-col flex-1">
                <label htmlFor="search" className="mb-1 font-medium">
                    Buscar ações
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Digite o nome da ação"
                    className="border rounded p-2 flex-1 w-full"
                />
            </div>

            {/* Categorias */}
            <div className="flex flex-col">
                <label htmlFor="category" className="mb-1 font-medium">
                    Categorias
                </label>
                <Select>
                    <SelectTrigger className="border rounded p-2 w-64">
                        <SelectValue placeholder="Selecione a Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Localização */}
            <div className="flex flex-col">
                <label htmlFor="location" className="mb-1 font-medium">
                    Localização
                </label>
                <Select>
                    <SelectTrigger className="border rounded p-2 w-64">
                        <SelectValue placeholder="Selecione a Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Botão */}
            <div className="mt-4 md:mt-0">
                <Button className="h-12">Buscar</Button>
            </div>
        </section>
    );
}
