// Pooling is a node-postgres tool to be able to query the db through http requests

require("dotenv").config();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port:process.env.DB_PORT,
});

// Validate post input

function isValidPostInput(post) {
  return post.postAuthor && post.postAuthor.toString().trim() !== '' &&
          post.postContent && post.postContent.toString().trim() !== ''
}

function isValidUserInput(user) {
  return user.username && user.username.toString().trim() !== '' &&
          user.password && user.password.toString().trim() !== ''
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
  if (isValidPostInput(req.body)) {
    query = ` 
    INSERT INTO posts (content, author)
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

const getAllUserInfo = (req, res) => {
  pool.query(`SELECT * FROM users WHERE username = '${req.query.username}';`, (error, results) => {
    if (error) {
      throw error;
    }
    
    res.status(200).json(results.rows);
  });
}

const getUser = (req, res) => {
  pool.query(`SELECT username FROM users WHERE username = '${req.query.username}';`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
}

const postUser = (req, res) => {
  if (isValidUserInput(req.body)) {
    query = ` 
    INSERT INTO users (username, password)
    VALUES ('${req.body.username}', '${req.body.password}'); 
    `

    pool.query(query, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  } else {
    res.status(422);
    res.json({message: 'name and password required'})
  }
};

const putUserInfo = (req, res) => {
  if (req.body.bio) {
    pool.query(`UPDATE users
      SET bio = '${req.body.bio}'
      WHERE username = '${req.body.username}'
    `, (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error updating user information' })
        } else {
          res.json({ message: 'User information updated successfully' })
        }
  })
  } else {
    pool.query(`UPDATE users
      SET username = '${req.body.username}'
      WHERE username = '${req.body.oldUsername}'
      `, (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error updating user information' });
        } else {
          res.json({ message: 'User information updated successfully' })
        }
  })
  }
}

const deleteUser = (req, res) => {
  pool.query(`DELETE FROM users
    WHERE username = '${req.body.username}'
  `, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting user information' })
      } else {
        res.json({ message: 'User deletion successful' })
      }
  })
}




module.exports = {
  getPosts,
  postPost,
  getAllUserInfo,
  getUser,
  postUser,
  putUserInfo,
  deleteUser
};
