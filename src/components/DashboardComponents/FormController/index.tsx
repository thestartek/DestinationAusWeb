"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormControllerProps = {
  title: string;
};

const formSchema = z.object({
  title: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, {
    message: "Please enter a valid email address",
  }),
  description: z
    .string()
    .min(20, { message: "Description must be atleast twenty characters" }),
  imageUrl: z.string().url({ message: "Image is not valid" }),
  source: z.string().url({
    message: "Please enter a valid url",
  }),
});
const FormController = ({ title }: FormControllerProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      source: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Values", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        Form for posting {title}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="someone@example.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default FormController;
