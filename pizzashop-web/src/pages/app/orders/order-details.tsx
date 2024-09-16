
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export function OrderDetails(){
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 7871215241542</DialogTitle>
                <DialogDescription>Detalhe do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-x-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="text items-center gap-2">
                                    <span className="h-2 w-2 rounded-b-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">
                                        Pendente
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="text items-center gap-2">
                                    <span className="h-2 w-2 rounded-b-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">
                                        Fulano de Tal
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="text items-center gap-2">
                                    <span className="h-2 w-2 rounded-b-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">
                                        6565 6565 6565 
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="text-muted-foreground">Email</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="text items-center gap-2">
                                    <span className="h-2 w-2 rounded-b-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">
                                        fulano@gmsail.com
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="text items-center gap-2">
                                    <span className="h-2 w-2 rounded-b-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">
                                        Há 3 minutos
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>


                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead>Qtd.</TableHead>
                            <TableHead>Preço</TableHead>
                            <TableHead>Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Pizza Pepperoni Família</TableCell>
                            <TableCell className="text-muted-foreground">2</TableCell>
                            <TableCell className="text-muted-foreground">R$ 45.20</TableCell>
                            <TableCell className="text-muted-foreground">R$ 90.40</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Pizza Chocolate Família</TableCell>
                            <TableCell className="text-muted-foreground">2</TableCell>
                            <TableCell className="text-muted-foreground">R$ 45.20</TableCell>
                            <TableCell className="text-muted-foreground">R$ 90.40</TableCell>
                        </TableRow>
                    </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total de pedido</TableCell>
                                <TableCell className="text-right font-medium">
                                    R$ 180.80
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}