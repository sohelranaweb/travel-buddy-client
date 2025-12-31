import { serverFetch } from "@/lib/server-fetch";

export async function getMetaData() {
  try {
    const response = await serverFetch.get(`/metaData`);
    const result = await response.json();
    console.log("meta Data", result);
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}
