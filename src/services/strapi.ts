const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
    data: {
        id: number;
        attributes: T;
    }[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

interface StrapiSingleResponse<T> {
    data: {
        id: number;
        attributes: T;
    };
}

async function fetchAPI(endpoint: string, options = {}) {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
        },
    };

    const mergedOptions = {
        ...defaultOptions,
        ...options,
    };

    const response = await fetch(`${STRAPI_URL}/api${endpoint}`, mergedOptions);

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
}

export async function getPosts(params = {}) {
    const queryString = new URLSearchParams({
        populate: 'coverImage,author.avatar,categories,tags',
        sort: 'publishedAt:desc',
        ...params,
    }).toString();

    return fetchAPI(`/posts?${queryString}`);
}

export async function getPost(slug: string) {
    const queryString = new URLSearchParams({
        populate: 'coverImage,author.avatar,categories,tags,seo',
    }).toString();

    return fetchAPI(`/posts/${slug}?${queryString}`);
}

export async function getCategories() {
    return fetchAPI('/categories');
}

export async function getTags() {
    return fetchAPI('/tags');
}

export async function getPostsByCategory(categorySlug: string, params = {}) {
    const queryString = new URLSearchParams({
        populate: 'coverImage,author.avatar,categories,tags',
        'filters[categories][slug][$eq]': categorySlug,
        sort: 'publishedAt:desc',
        ...params,
    }).toString();

    return fetchAPI(`/posts?${queryString}`);
}

export async function getPostsByTag(tagSlug: string, params = {}) {
    const queryString = new URLSearchParams({
        populate: 'coverImage,author.avatar,categories,tags',
        'filters[tags][slug][$eq]': tagSlug,
        sort: 'publishedAt:desc',
        ...params,
    }).toString();

    return fetchAPI(`/posts?${queryString}`);
}

export async function searchPosts(query: string, params = {}) {
    const queryString = new URLSearchParams({
        populate: 'coverImage,author.avatar,categories,tags',
        'filters[$or][0][title][$containsi]': query,
        'filters[$or][1][content][$containsi]': query,
        sort: 'publishedAt:desc',
        ...params,
    }).toString();

    return fetchAPI(`/posts?${queryString}`);
} 