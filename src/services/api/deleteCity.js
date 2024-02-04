export default async function deleteCity(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })

    if (response.status === 204) {
      console.log("Item deleted")
      return { success: true };
    }
  } catch (error) {
    console.error({ error })
    return { success: false, error: error.message };
  }
}