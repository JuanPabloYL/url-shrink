// const API_KEY = "ov4BNggJUPFBgwYpxO4yM7FLitZ6IBZcmX4XIwv7R8Zflu5tkusINGvQS6T5";

export const getTinyUrl = async (longUrl: string): Promise<string | null> => {
  try {
    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ov4BNggJUPFBgwYpxO4yM7FLitZ6IBZcmX4XIwv7R8Zflu5tkusINGvQS6T5`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: longUrl,
        domain: "tinyurl.com",
      }),
    });
    console.log(longUrl);

    const data = await response.json();
    console.log(data);
    return data.data.tiny_url; // this is the short URL
  } catch (err) {
    console.error("Error generating tinyurl:", err);
    return null;
  }
};
