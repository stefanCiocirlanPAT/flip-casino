import React from 'react'
import Image from 'next/image'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'

interface IForm {
  email: string
  password: string
}

const Login = () => {
  const form = useForm<IForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit } = form

  const onSubmit = (data: IForm) => {
    console.log('data', data)
  }

  return (
    <MainLayout className="flex-col items-start justify-center p-36">
      <Image
        src="/assests/img/logo-white.svg"
        alt="Logo"
        width={220}
        height={50}
        className="mb-12"
      />
      <h1 className="font-bold text-[5.625rem]">Welcome!</h1>
      <p className="text-[2rem] mb-12">
        Please sign in to use the Content Checker tool
      </p>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[39.75rem] flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email address*" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password*" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-8 mt-4">
            <Button type="submit">Login</Button>
            <Link href="/" className="hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>
      </Form>

      <p className="m-8">or</p>

      <Button variant="outline">
        <Image
          src="/assests/img/windows.png"
          alt="Login via Windows"
          width={36}
          height={36}
        />
        Sign in with Windows
      </Button>
    </MainLayout>
  )
}
export default Login
