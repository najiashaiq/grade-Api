import { connectDb } from './conn.mjs';

const createValidation = async () => {
  const db = await connectDb();

  const validation = {
    $jsonSchema: {
      bsonType: 'object',
      required: ['class_id', 'learner_id'],
      properties: {
        class_id: {
          bsonType: 'int',
          minimum: 0,
          maximum: 300,
          description: 'Must be an integer between 0 and 300',
        },
        learner_id: {
          bsonType: 'int',
          minimum: 0,
          description: 'Must be a non-negative integer',
        },
      },
    },
  };

  await db.createCollection('grades', {
    validator: validation,
    validationAction: 'warn', 
  });

  console.log('Validation rules created successfully!');
};


createValidation();