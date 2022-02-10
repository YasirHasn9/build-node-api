console.log("It working");
async function getAztroApi() {
  try {
    const res = await (await fetch("/aztroapi")).json();
    // const data = await res.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

getAztroApi();
