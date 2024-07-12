"use client";

import { z } from "zod";
import FormController, { formSchema } from "../FormController";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CREATE_ARTICLE } from "@/graphql/mutations";

const ArticleController = () => {
  const [createArticle, { loading }] = useMutation(CREATE_ARTICLE);
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      await createArticle({ variables: { input: values } });
      toast.success("Article created successfully");
      setTimeout(() => {
        router.push("/articles");
      }, 3000);
    } catch (error) {
      toast.error("Sorry, could not upload article.");
      console.log("Something went wrong: ", error);
    }
  };
  return (
    <div>
      <FormController title="Article" onSubmit={onSubmit} loading={loading} />
    </div>
  );
};

export default ArticleController;
