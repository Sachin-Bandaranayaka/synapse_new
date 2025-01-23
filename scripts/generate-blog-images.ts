import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { generateBlogImage } from './generate-blog-image';

async function generateAllBlogImages() {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    const imageDirectory = path.join(process.cwd(), 'public/images/blog');

    // Ensure the blog images directory exists
    if (!fs.existsSync(imageDirectory)) {
        fs.mkdirSync(imageDirectory, { recursive: true });
    }

    // Read all MDX files
    const files = fs.readdirSync(postsDirectory);
    const mdxFiles = files.filter((file: string) => file.endsWith('.mdx'));

    for (const file of mdxFiles) {
        const fullPath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        // Generate image filename from the MDX filename
        const imageName = file.replace('.mdx', '.jpg');
        const imagePath = path.join(imageDirectory, imageName);

        // Generate the blog post image
        await generateBlogImage(
            data.title as string,
            'Synapse Labs Blog',
            imagePath
        );

        console.log(`Generated image for ${file}`);
    }
}

// Run the script
generateAllBlogImages().catch(console.error);
