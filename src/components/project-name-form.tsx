import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import EditIcon from '@/assests/icons/EditIcon'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useForm } from 'react-hook-form'

interface IProps {
  value: string
}

interface IForm {
  name: string
}

const ProjectNameForm = ({ value }: IProps) => {
  const form = useForm<IForm>({
    defaultValues: {
      name: value,
    },
  })

  const { handleSubmit } = form

  const onSubmit = (data: IForm) => {
    console.log('data', data)
  }

  return (
    <Dialog>
      <DialogTrigger className="group">
        <EditIcon className="fill-paplepurple duration-300 group-hover:fill-orange" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change project name</DialogTitle>
          <DialogDescription>
            Please enter a new valid name for the project
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="border py-3 px-5"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button variant={'outline'} asChild className="text-black">
                <DialogClose>Close</DialogClose>
              </Button>
              <Button>Change</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default ProjectNameForm
