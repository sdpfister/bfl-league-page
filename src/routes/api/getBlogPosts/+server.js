import contentful from 'contentful';
import { json, error } from '@sveltejs/kit';


export async function GET() {
    try {

        // Debug: Print environment variables to console
        // console.log('Contentful Space ID:', import.meta.env.VITE_CONTENTFUL_SPACE);
        // console.log('Contentful Access Token:', import.meta.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN);

        if(!import.meta.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN) {
            throw error(500, "Missing VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN (added dependency in v2.0), go to https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#iii-add-a-blog for directions to add it");
        }
        const client = contentful.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: import.meta.env.VITE_CONTENTFUL_SPACE,
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: import.meta.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN
            // space: vh49e0dykhdk,
            // accessToken: PVjvv7fQzgZRGnHzslx7jCv40cUG_gOkmq5a5S2vHbc
        });
        const data = await client.getEntries({content_type: 'blog_post'})
            // .catch(e=> {
            //     console.error(e);
            //     throw error(500, "Problem retrieving blog posts");
            // });

        return json(data);
    
    } catch (e) {
        console.error("Error Details: ", e);
        return json({ message: 'Internal Error', error: JSON.stringify(e) }, { status: 500 });
    }    
}    