interface SEOCheckResult {
    passed: boolean;
    message: string;
}

interface SEOCheckResults {
    title: SEOCheckResult;
    description: SEOCheckResult;
    headings: SEOCheckResult;
    images: SEOCheckResult;
    schema: SEOCheckResult;
    meta: SEOCheckResult;
}

export async function runSEOChecks(url: string): Promise<SEOCheckResults> {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');

        return {
            title: checkTitle(doc),
            description: checkDescription(doc),
            headings: checkHeadings(doc),
            images: checkImages(doc),
            schema: checkSchema(doc),
            meta: checkMeta(doc)
        };
    } catch (error) {
        console.error('Error running SEO checks:', error);
        throw error;
    }
}

function checkTitle(doc: Document): SEOCheckResult {
    const title = doc.title;
    return {
        passed: title.length >= 10 && title.length <= 60,
        message: title.length < 10 ? 'Title too short' : 
                title.length > 60 ? 'Title too long' : 
                'Title length optimal'
    };
}

function checkDescription(doc: Document): SEOCheckResult {
    const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    return {
        passed: description.length >= 120 && description.length <= 160,
        message: description.length < 120 ? 'Description too short' :
                description.length > 160 ? 'Description too long' :
                'Description length optimal'
    };
}

function checkHeadings(doc: Document): SEOCheckResult {
    const h1Count = doc.querySelectorAll('h1').length;
    return {
        passed: h1Count === 1,
        message: h1Count === 0 ? 'No H1 tag found' :
                h1Count > 1 ? 'Multiple H1 tags found' :
                'H1 tag structure optimal'
    };
}

function checkImages(doc: Document): SEOCheckResult {
    const images = doc.querySelectorAll('img');
    const missingAlt = Array.from(images).filter(img => !img.alt).length;
    return {
        passed: missingAlt === 0,
        message: missingAlt > 0 ? `${missingAlt} images missing alt text` : 'All images have alt text'
    };
}

function checkSchema(doc: Document): SEOCheckResult {
    const schemas = doc.querySelectorAll('script[type="application/ld+json"]');
    return {
        passed: schemas.length > 0,
        message: schemas.length === 0 ? 'No schema markup found' :
                `Found ${schemas.length} schema markup(s)`
    };
}

function checkMeta(doc: Document): SEOCheckResult {
    const requiredMeta = ['viewport', 'robots', 'og:title', 'og:description'];
    const missingMeta = requiredMeta.filter(meta => 
        !doc.querySelector(`meta[name="${meta}"], meta[property="${meta}"]`)
    );
    
    return {
        passed: missingMeta.length === 0,
        message: missingMeta.length > 0 ? 
            `Missing meta tags: ${missingMeta.join(', ')}` :
            'All required meta tags present'
    };
}
