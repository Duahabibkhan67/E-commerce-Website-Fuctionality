'use client';
import { createClient } from "next-sanity";

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-01-13',
});

// Define the fetch function with a more specific type for params
export async function sanityfetch<T>(query: string, params: Record<string, string | number | boolean> = {}): Promise<T> {
  try {
    const data = await client.fetch<{ result: T }>(query, params); // Ensure the response is typed correctly

    // Return only the result field
    return data.result;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    throw new Error("Failed to fetch data");
  }
}























// import { createClient } from "next-sanity";


// const client = createClient({
//  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//  useCdn: true,
//  apiVersion: '2023-01-13',
// });
  
// export async function sanityfetch(query: string, params= {}): Promise<{ query: string; params?: any; }> {


//  return await client.fetch(query , params)
// }