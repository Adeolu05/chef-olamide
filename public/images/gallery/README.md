# Gallery Images Folder

Place your gallery images in this folder.

## Naming Convention

Use descriptive names for your images:
- `dish-1.jpg`
- `dish-2.jpg`
- `kitchen-1.jpg`
- `plating-1.jpg`
- etc.

## Recommended Image Specifications

- **Format**: JPG or WebP (for better performance)
- **Resolution**: 
  - Minimum: 800x800px
  - Recommended: 1200x1200px (for high-quality displays)
- **Aspect Ratio**: Square (1:1) or portrait (3:4) works best
- **File Size**: Optimize to < 500KB per image

## How to Use

1. Add your images to this folder
2. Update `src/sections/Gallery.tsx` to reference them
3. Images are served from `/images/gallery/your-image-name.jpg`

Example:
```typescript
const GALLERY_IMAGES = [
  'dish-1.jpg',
  'dish-2.jpg',
  'kitchen-1.jpg',
  // ... more images
];
```

Then in the component:
```typescript
src={`/images/gallery/${img}`}
```
