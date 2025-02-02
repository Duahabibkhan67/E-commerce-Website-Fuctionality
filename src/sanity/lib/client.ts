
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'moxqx9fm', 
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2025-01-18', // Use a valid API version
  useCdn: true, 
});

// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })
