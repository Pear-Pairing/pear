import debounce from 'lodash.debounce';
import axios from 'axios';

const url = "https://z3oa41ri13.execute-api.us-west-2.amazonaws.com/dev/api/session";

const updateDb = debounce((session) => {
  axios({
    method: "POST",
    data: session,
    url
  })
    .then(() => console.log("Database Updated"))
    .catch((err) => console.log(`Unable to update DB: ${err}`))
}, 4000)

export default updateDb;