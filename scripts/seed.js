import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { PRODUCTS } from '../src/data/products.js';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
const dbName = 'maisonbrun';

if (!uri) {
  console.error('Error: MONGODB_URI is not set in .env.local');
  process.exit(1);
}

async function seed() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(dbName);
    const collection = db.collection('products');
    
    console.log(`Seeding ${PRODUCTS.length} products...`);
    
    for (const product of PRODUCTS) {
      await collection.updateOne(
        { id: product.id },
        { $set: product },
        { upsert: true }
      );
      console.log(`Upserted product: ${product.id} - ${product.name}`);
    }
    
    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
