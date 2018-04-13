const fetch = require('node-fetch');

module.exports = async event => {
  try {
    const { id } = event.data;
    const response = await fetch(
      `http://api.codeforamerica.org/api/projects/${id}`
    );
    const json = await response.json();
    json.id = String(json.id);
    return { data: json };
  } catch (err) {
    console.log(err);
    return { error: 'An unexpected error occured' };
  }
};
