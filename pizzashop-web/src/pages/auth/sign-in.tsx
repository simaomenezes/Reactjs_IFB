import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const sigInForm = z.object({
    email: z.string().email(),
})

type SigInForm = z.infer<typeof sigInForm>

export function SingIn() {
    const { register, handleSubmit, formState:{ isSubmitting } } = useForm<SigInForm>()

    async function handleSignIn(data: SigInForm){
        console.log(data.email)
        await new Promise((resolve)=> setTimeout(resolve, 2000))
        toast.success("Enviamos um link de autenticação para seu email")

    }
    return (
        <>
        <Helmet title='SingIn'/>
        <div className='p-8'>
            <Button variant={'ghost'} asChild className='absolute right-8 top-8'>
                <Link to="/sing-up" className=''>
                    Novo Estabelecimento
                </Link>
            </Button>
            <div className='flex w-[350px] flex-col justify-center gap-6'>
                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-2xl font-semibold tracking-tight'>
                        Acessar painel
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                        Acompanhe suas vendas pelo painel do parceiro!
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleSignIn)} className='space-y-4'>
                    <div className='space-y-2'>
                        <Label htmlFor='email'>Seu e-mail</Label>
                        <Input id='email' type='email' {...register('email')}></Input>
                    </div>
                    <div className='space-y-2'>
                        <Button className='w-full' type='submit' disabled={isSubmitting}>Acessar painel</Button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}