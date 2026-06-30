import { User } from "../store/userStore";

export async function askDrona(
  message: string,
  user: User
): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      user,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact Drona.");
  }

  const data = await response.json();

  return data.reply;
}