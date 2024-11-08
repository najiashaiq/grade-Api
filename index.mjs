
import express from 'express';

const PORT = 5050;
const app = express();

// Importing routes as default exports
import grades from './routes/grades.mjs';
import grades_agg from './routes/grades_agg.mjs';

app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the API.');
});

// Use the imported routes
app.use('/grades', grades);
app.use('/grades', grades_agg);


app.use((err, _req, res, next) => {
  console.error(err); // Log the error for debugging
  res.status(500).send('Seems like we messed up somewhere...');
});


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});