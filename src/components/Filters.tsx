import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectTrigger,
    SelectValue,
    SelectLabel,
    SelectItem,
} from './ui/select';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function Filters() {
    return (
        <section className="my-8 p-6 border rounded-lg bg-gray-50 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-end">
            {/* Buscar ações */}
            <div className="flex flex-col flex-1">
                <Label htmlFor="terms" className="mb-1 font-medium">Buscar ações</Label>
                <Input
                    id="search"
                    type="text"
                    placeholder="Digite o nome da ação"
                    className="border rounded p-2 flex-1 w-full"
                />
            </div>

            {/* Categorias */}
            <div className="flex flex-col">
                <Label htmlFor="category" className="mb-1 font-medium">Categorias</Label>
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
                <Label htmlFor="location" className="mb-1 font-medium">Localização</Label>
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
                <Button className="h-10">Buscar</Button>
            </div>
        </section>
    );
}
