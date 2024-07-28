import { Language } from "@/types/api/language";

export async function getLanguagesData(): Promise<{ data: Language[] }> {
  const res = await fetch(
    `${process.env.CONTENT_URL}/api/languages?populate=image`,
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
