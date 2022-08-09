// Pooling is a node-postgres tool to be able to query the db through http requests

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "macosx",
  host: "localhost",
  database: "my-social",
  password: "password",
  port: 5432,
});

const getPosts = (req, res) => {
  pool.query("SELECT * FROM posts ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const postPost = (req, res) => {
  query = ` 
  INSERT INTO posts (title, subreddit)
  VALUES ('${req.body.postContent}', '${req.body.postAuthor}'); 
  `

  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getPosts,
  postPost,
};
