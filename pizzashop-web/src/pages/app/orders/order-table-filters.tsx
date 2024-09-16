import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Search } from "lucide-react";

export function OrderTableFilter(){
    return (
        <>
            <form className="flex items-center gap-2">
                <span className="text-sm font-semibold">Filtros:</span>
                <Input placeholder="ID do Pedido" className="h-8 w-auto"/>
                <Input placeholder="Nome do cliente" className="h-8 w-[320px]"/>
                <Select defaultValue="all">
                    <SelectTrigger className="h-8 w-[180px]">
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos status</SelectItem>
                        <SelectItem value="pending">Pendente</SelectItem>
                        <SelectItem value="canceled">Cancelado</SelectItem>
                        <SelectItem value="processing">Em preparo</SelectItem>
                        <SelectItem value="delivering">Em entrega</SelectItem>
                        <SelectItem value="delivered">Entregue</SelectItem>
                    </SelectContent>
                </Select>

                <Button type="submit" variant="secondary" size="xs">
                    <Search className="mr-2 h-4 w-4"/>
                    Filtrar resultados
                </Button>

                <Button type="button" variant="secondary" size="xs">
                    <Search className="mr-2 h-4 w-4"/>
                    Remover filtros
                </Button>
            </form>
        </>
    )
}