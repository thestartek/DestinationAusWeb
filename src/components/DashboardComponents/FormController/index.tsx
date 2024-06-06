"use client";

import { Check, CloudUpload, Loader2, Upload } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type FormControllerProps = {
  title: string;
};

const formSchema = z.object({
  title: z.string().min(20, { message: "Must be atleast twenty characters" }),
  description: z
    .string()
    .min(20, { message: "Must be atleast twenty characters" }),
  imageUrl: z.string().url({ message: "Must be a valid URL" }),
  source: z.string().optional(),
});

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  const displayUrl = URL.createObjectURL(event.target.files![0]);

  return displayUrl;
}

const FormController = ({ title }: FormControllerProps) => {
  const router = useRouter();
  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      source: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("file", file!);
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("imageUrl", values.imageUrl);

    if (values.source !== undefined && values.source !== "")
      formData.append("source", values.source);
    if (!file) {
      console.log("No file selected");
      return;
    }

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log(response);
        toast.success("Blog created successfully!");
        form.reset();
        setPreview("");
        setFile(null);
        // setTimeout(() => {
        //   router.push("/blogs");
        // }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-4 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">
          Create {title}
        </h2>
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">{title} Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title here" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"description"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">{title} Description</FormLabel>
              <FormControl>
                <Textarea
                  className="h-40"
                  placeholder="Enter description here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"imageUrl"}
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <input
                    type="file"
                    name="image"
                    onChange={(event) => {
                      const displayUrl = getImageData(event);
                      setPreview(displayUrl);
                      setFile(event.target.files![0]);
                      onChange(displayUrl);
                    }}
                    className="h-40 flex items-center justify-center cursor-pointer outline-dashed outline-4 outline-primary ring-0 border-collapse"
                  />
                  {value !== "" ? (
                    <Image
                      src={preview}
                      width={100}
                      height={100}
                      className="absolute object-cover top-0 flex items-center justify-center h-full w-full pointer-events-none bg-white"
                      alt="Image"
                    />
                  ) : (
                    <div className="pointer-events-none absolute top-0 flex flex-col gap-2 items-center justify-center w-full h-full bg-white rounded-lg">
                      <CloudUpload className="w-1/5 h-1/5" />
                      Upload your Image
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"source"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">
                Source{" "}
                <span className="text-muted-foreground text-xs">
                  {title === "Blog" ? (
                    "(Optional)"
                  ) : (
                    <span className="text-red-600">(Required)</span>
                  )}
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Where did you get this information from? (URL / Source Name)"
                  type="text"
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

export default FormController;
