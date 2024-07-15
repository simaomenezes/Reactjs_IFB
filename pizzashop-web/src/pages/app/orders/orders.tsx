import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Orders(){
    return (
        <>
            <Helmet title="Pedidos"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros:</span>
                    <Input placeholder="Nome do cliente" className="h-8 w-[320px]"/>
                </form>

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[66px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado há</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead className="w-[140px]">Total do pedido</TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Button variant="outline" size="xs">
                                        <Search className="h-3 w-3"/>
                                        <span className="sr-only">Detalhe do pedido</span>
                                    </Button>
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
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )    
}