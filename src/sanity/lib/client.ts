// client.js
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'moxqx9fm', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2025-01-18', // Use a valid API version
  useCdn: true, // `false` if you want to ensure fresh data
});

// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })
