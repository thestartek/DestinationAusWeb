"use client";

import { z } from "zod";
import FormController, { formSchema } from "../FormController";
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import { CREATE_BLOG } from "@/graphql/mutations";
import { useRouter } from "next/navigation";

const BlogController = () => {
  const [createBlog, { loading }] = useMutation(CREATE_BLOG);
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      await createBlog({
        variables: {
          input: values,
        },
      });
      toast.success("Blog created successfully");
      setTimeout(() => {
        router.push("/blog");
      }, 3000);
    } catch (error) {
      toast.error("Could not upload image");
      console.log("Something went wrong: ", error);
    }
  }

  return (
    <div>
      <FormController title="Blog" onSubmit={onSubmit} loading={loading} />
    </div>
  );
};

export default BlogController;
