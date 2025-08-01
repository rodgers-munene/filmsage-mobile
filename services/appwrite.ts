import Search from "@/app/(tabs)/search";
import {Client, Databases, Query, ID} from "react-native-appwrite"

// track the searches made by a user
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)


const database = new Databases(client)

export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID, [
        Query.equal('searchTerm', query)
    ])

    // check if a record has already been stored
    // if document has already been found, increment searchCount field
    // if none is found 
        //create a new document in appwrite database -> 1

    if(result.documents.length > 0){
        const existingMovie = result.documents[0]

        await database.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            existingMovie.$id,
            {
                count: existingMovie.count + 1
            }
        )
    }else{
        await database.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            {
               searchTerm: query,
               movie_id: movie.id,
               title: movie.title,
               count: 1,
               poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
        )
    }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getTrendingMovies = async(): Promise<TrendingMovie[] | undefined>=> {
    try {
       const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID, [
        Query.limit(5), Query.orderDesc('count')
    ]) 
        return result.documents as unknown as TrendingMovie[];
    } catch (error) {
        console.log(error)
        return undefined
    }
}