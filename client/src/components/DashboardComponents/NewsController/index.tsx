"use client";

import { z } from "zod";
import FormController, { formSchema } from "../FormController";
import { useMutation } from "@apollo/client";
import { CREATE_NEWS } from "@/graphql/mutations";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const NewsController = () => {
  const [createNews, { loading }] = useMutation(CREATE_NEWS);
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      await createNews({ variables: { input: values } });
      toast.success("News created successfully");
      setTimeout(() => {
        router.push("/news");
      }, 3000);
    } catch (error) {
      toast.error("Sorry, could not upload news.");
      console.log("Something went wrong: ", error);
    }
  };
  return (
    <div>
      <FormController title="News" onSubmit={onSubmit} loading={loading} />
    </div>
  );
};

export default NewsController;
