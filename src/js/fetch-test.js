/**
 * Method to test is link exists
 */
export async function fetchTest() {
  try {
    const response = await fetch("http://jackhkmatthewfdasfdass.com", {
      mode: "no-cors"
    });
    const status = await response.status;
    console.log(status);
  } catch (err) {
    console.log(err);
  }
}
