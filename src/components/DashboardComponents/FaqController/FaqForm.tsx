"use client";

import { Check, Loader2, Upload } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CustomButton from "@/components/shared/CustomButton";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  question: z
    .string()
    .min(20, { message: "Must be atleast twenty characters" }),
  answer: z.string().min(20, { message: "Must be atleast twenty characters" }),
});

const FaqForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form values: ", values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-4 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">Create FAQ</h2>
        <FormField
          control={form.control}
          name={"question"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Question</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter question here"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"answer"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Answer</FormLabel>
              <FormControl>
                <Textarea
                  className="h-40"
                  placeholder="Enter answer here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CustomButton
          type="submit"
          title={
            form.formState.isSubmitting
              ? "Creating..."
              : form.formState.isSubmitSuccessful
              ? "Created"
              : "Create"
          }
          icon={
            form.formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : form.formState.isSubmitSuccessful ? (
              <Check />
            ) : (
              <Upload />
            )
          }
          className="w-fit self-center"
          disabled={
            form.formState.isSubmitting || form.formState.isSubmitSuccessful
          }
        />
      </form>
    </Form>
  );
};

export default FaqForm;
