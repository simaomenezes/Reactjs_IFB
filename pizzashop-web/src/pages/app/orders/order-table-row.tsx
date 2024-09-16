import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export function OrderTableRow(){
    return (
        <>
         <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3"/>
                            <span className="sr-only">Detalhe do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <OrderDetails/>
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                12ewqe12eqwe13231e
            </TableCell>
            <TableCell className="text-muted-foreground">
                Há 15 minutos
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                    <span className="font-medium text-muted-foreground">
                        Pendente
                    </span>
                </div>
            </TableCell>
            <TableCell className="font-medium">
                Juca da silva lima
            </TableCell>
            <TableCell className="font-medium">R$ 143.55</TableCell>
            <TableCell>
                <Button variant="ghost" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3"/>
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="xs">
                    <X className="mr-2 h-3 w-3"/>
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
        </>
    )
}