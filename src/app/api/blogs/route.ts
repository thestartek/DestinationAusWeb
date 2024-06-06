import { connectToDB } from "@/lib/db";
import Blog from "@/lib/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");
    const source = formData.get("source");

    const blog = new Blog({
      title,
      description,
      imageUrl,
      source,
    });

    await blog.save();

    return new NextResponse(JSON.stringify(blog), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ ok: false, message: error }));
  }
};

// export const GET = async () => {
//   try {
//     await connectToDB();
//     const blogs = await Blog.find();
//     return new NextResponse(
//       JSON.stringify({
//         ok: true,
//         blogs,
//         message: "Blogs fetched successfully.",
//       }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.log("Failed to get blogs: ", error);
//     return new NextResponse(
//       JSON.stringify({ ok: false, message: `Failed to get blogs: ${error}` }),
//       {
//         status: 500,
//       }
//     );
//   }
// };
