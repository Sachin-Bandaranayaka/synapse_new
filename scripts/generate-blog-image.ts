import { createCanvas, registerFont, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';

// Configuration
const config = {
    width: 1200,
    height: 630,
    padding: 40,
    titleFontSize: 60,
    subtitleFontSize: 30,
    fontFamily: 'Inter',
    colors: {
        background: '#0F172A',
        primary: '#0070f3',
        secondary: '#00ff95',
        text: '#FFFFFF',
    },
};

export async function generateBlogImage(
    title: string,
    subtitle: string = 'Synapse Labs Blog',
    outputPath: string
) {
    // Create canvas
    const canvas = createCanvas(config.width, config.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = config.colors.background;
    ctx.fillRect(0, 0, config.width, config.height);

    // Gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, config.width, config.height);
    gradient.addColorStop(0, `${config.colors.primary}20`);
    gradient.addColorStop(1, `${config.colors.secondary}20`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, config.width, config.height);

    // Add logo
    try {
        const logo = await loadImage(path.join(process.cwd(), 'public/images/logo.png'));
        const logoSize = 80;
        ctx.drawImage(
            logo,
            config.padding,
            config.height - logoSize - config.padding,
            logoSize,
            logoSize
        );
    } catch (error) {
        console.error('Error loading logo:', error);
    }

    // Title
    ctx.font = `bold ${config.titleFontSize}px ${config.fontFamily}`;
    ctx.fillStyle = config.colors.text;
    ctx.textBaseline = 'middle';

    // Word wrap title
    const words = title.split(' ');
    let line = '';
    const lines = [];
    const maxWidth = config.width - (config.padding * 2);

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
            lines.push(line);
            line = words[i] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    // Draw title
    const lineHeight = config.titleFontSize * 1.2;
    const totalHeight = lines.length * lineHeight;
    const startY = (config.height - totalHeight) / 2;

    lines.forEach((line, index) => {
        ctx.fillText(
            line.trim(),
            config.padding,
            startY + (index * lineHeight)
        );
    });

    // Subtitle
    ctx.font = `${config.subtitleFontSize}px ${config.fontFamily}`;
    ctx.fillStyle = config.colors.text + '80';
    ctx.fillText(
        subtitle,
        config.padding,
        config.height - config.padding - 40
    );

    // Save image
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(outputPath, buffer);
}

// Example usage
// generateBlogImage(
//     'How AI is Transforming Sri Lankan SMEs in 2024',
//     'Synapse Labs Blog',
//     './public/images/blog/ai-sme-cover.jpg'
// );
