// src/routes/cv-pdf/+server.js
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { compile } from 'svelte/compiler';
import fs from 'fs';
import path from 'path';

export const prerender = true;

export async function GET() {
	// Read and compile your Svelte component
	const componentPath = path.join(process.cwd(), 'src', 'routes', 'CV.svelte');
	const source = fs.readFileSync(componentPath, 'utf-8');

	// Extract text content from Svelte component (simplified)
	// For production, you'd want to properly parse the Svelte component

	const pdfDoc = await PDFDocument.create();
	const page = pdfDoc.addPage([595, 842]);
	const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
	const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

	// Parse your CV.svelte component content
	// This is a simple example - you'd need proper HTML parsing
	const textContent = extractTextFromSvelte(source);

	// Render to PDF (simplified)
	page.drawText('Curriculum Vitae', {
		x: 50,
		y: 750,
		size: 24,
		font: boldFont
	});

	// Add more content based on your CV.svelte structure
	page.drawText(textContent.substring(0, 500), {
		x: 50,
		y: 700,
		size: 11,
		font: font
	});

	const pdfBytes = await pdfDoc.save();

	return new Response(pdfBytes, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline; filename="cv.pdf"'
		}
	});
}

function extractTextFromSvelte(source) {
	// Remove script and style tags
	let text = source.replace(/<script[\s\S]*?<\/script>/g, '');
	text = text.replace(/<style[\s\S]*?<\/style>/g, '');
	// Remove HTML tags
	text = text.replace(/<[^>]*>/g, ' ');
	// Remove Svelte specific syntax
	text = text.replace(/{[\s\S]*?}/g, '');
	return text.trim();
}
