import { connectDb } from './conn.mjs'; // Import the connection function

const createIndexes = async () => {
  const db = await connectDb();

  // Create an index on class_id
  await db.collection('grades').createIndex({ class_id: 1 });
  
  // Create an index on learner_id
  await db.collection('grades').createIndex({ learner_id: 1 });
  
  // Create a compound index on learner_id and class_id
  await db.collection('grades').createIndex({ learner_id: 1, class_id: 1 });

  console.log('Indexes created successfully!');
};

// Call the function to create indexes
createIndexes();