import { connectToDB } from "@/lib/db";

export const GET = async () => {
  try {
    await connectToDB();
    return new Response(
      JSON.stringify({ message: "Blogs fetched successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Failed to get blogs: ", error);
  }
};
