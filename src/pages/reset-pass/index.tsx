import React from 'react'
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

const ResetPass = () => {
  const form = useForm<IForm>({
    defaultValues: {
      email: '',
    },
  })

  const { handleSubmit } = form

  const onSubmit = (data: IForm) => {
    console.log('data', data)
  }

  return (
    <MainLayout className="flex-col items-start justify-center p-36">
      <h1 className="font-bold text-[5.625rem]">Change password</h1>
      <p className="text-[2rem] mb-12 max-w-[50rem]">
        Please enter your email, to which we will send instructions for recover
        your password
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
                  <Input
                    type="email"
                    placeholder="Email address*"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-8 mt-4">
            <Button type="submit">Send</Button>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </form>
      </Form>
    </MainLayout>
  )
}
export default ResetPass
