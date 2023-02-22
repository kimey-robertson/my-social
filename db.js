// Pooling is a node-postgres tool to be able to query the db through http requests

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "my-social.cydhx7us2rou.ap-southeast-2.rds.amazonaws.com",
  database: "my-social",
  password: "psa12345",
  port: 5432,
});

// Validate post input

function isValidPostInput(post) {
  return post.postAuthor && post.postAuthor.toString().trim() !== '' &&
          post.postContent && post.postContent.toString().trim() !== ''
}

const getPosts = (req, res) => {
  pool.query("SELECT * FROM posts ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const postPost = (req, res) => {
  console.log(req.body)
  if (isValidPostInput(req.body)) {
    query = ` 
    INSERT INTO posts (name, content)
    VALUES ('${req.body.postContent}', '${req.body.postAuthor}'); 
    `

    pool.query(query, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  } else {
    res.status(422);
    res.json({message: 'name and content required'})
  }
};

const getUser = (req, res) => {
  pool.query(`SELECT * FROM users WHERE username = '${req.query.username}';`, (error, results) => {
    if (error) {
      throw error;
    }
    
    res.status(200).json(results.rows);
  });
}

module.exports = {
  getPosts,
  postPost,
  getUser
};
