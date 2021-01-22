const url = "https://z3oa41ri13.execute-api.us-west-2.amazonaws.com/dev";

const updateDb = (session) => {
  axios({
    method: "POST",
    body: session,
    url
  })
    .then(() => console.log("Database Updated"))
    .catch((err) => console.log(`Unable to update DB: ${err}`))
}

export default updateDb;