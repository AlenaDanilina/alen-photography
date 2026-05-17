# Portfolio File Storage Guide

## Overview

Your Alen Danilina portfolio website now includes a complete file storage system powered by S3 and integrated with a MySQL database. This guide explains how to use the admin interface to manage your portfolio images.

## Accessing the Admin Panel

1. **Login Required**: First, log in using Manus OAuth
2. **Admin Access**: Navigate to `/admin/portfolio` 
3. **Access Control**: Only users with admin role can access this page

## Managing Portfolio Images

### Uploading New Images

1. Click the **"Add Image"** button in the top-right corner
2. Select an image file from your computer
3. Fill in the image details:
   - **Title**: Name of the image (e.g., "Portrait Session - Istanbul")
   - **Category**: Choose from:
     - Portrait
     - Fashion
     - Model Tests
     - Other
   - **Description**: Optional description for the image
   - **Display Order**: Number to control the order images appear (lower numbers appear first)
4. Click **"Upload"** to save

The image will be:
- Uploaded to secure S3 storage
- Stored with a unique file key to prevent conflicts
- Indexed in the database with metadata
- Immediately available for use

### Editing Images

1. Find the image you want to edit in the grid
2. Click the **Edit** button (pencil icon)
3. Update any of the fields:
   - Title
   - Category
   - Description
   - Display Order
4. Click **"Update"** to save changes

**Note**: You cannot change the image file itself through this interface. To use a different image, delete the current one and upload a new one.

### Deleting Images

1. Find the image you want to delete
2. Click the **Delete** button (trash icon)
3. Confirm the deletion when prompted

**Warning**: Deleted images cannot be recovered. The image will be removed from the database and S3 storage.

### Reordering Images

Change the **Display Order** field for each image:
- Lower numbers appear first
- You can use any numbering system (0, 10, 20, etc.)
- After updating, images will automatically sort by this value

## Technical Details

### Database Schema

Portfolio images are stored in the `portfolio_images` table with these fields:

| Field | Type | Description |
|-------|------|-------------|
| id | int | Unique identifier |
| fileKey | varchar | S3 storage reference |
| url | text | Public CDN URL |
| title | varchar | Image title |
| category | enum | Category type |
| description | text | Optional description |
| displayOrder | int | Sort order |
| mimeType | varchar | Image format (e.g., image/jpeg) |
| fileSize | int | File size in bytes |
| isPublished | int | Visibility flag (1=visible, 0=hidden) |
| uploadedBy | int | User ID who uploaded |
| createdAt | timestamp | Upload date |
| updatedAt | timestamp | Last modified date |

### API Endpoints

The following tRPC procedures are available:

**Queries (Read-only):**
- `portfolio.list` - Get all portfolio images
- `portfolio.listByCategory` - Filter by category
- `portfolio.getById` - Get single image

**Mutations (Admin only):**
- `portfolio.create` - Upload new image
- `portfolio.update` - Edit image metadata
- `portfolio.delete` - Remove image
- `portfolio.reorder` - Batch reorder images

### S3 Storage

Images are stored in S3 with the following path structure:
```
portfolio/{category}/{timestamp}-{filename}
```

Example: `portfolio/portrait/1779053112345-headshot.jpg`

**Benefits:**
- Automatic backup and redundancy
- Global CDN distribution for fast loading
- Scalable storage for unlimited images
- Secure access control

## Best Practices

1. **File Size**: Keep images under 10MB for optimal performance
2. **Naming**: Use descriptive titles that help you identify images
3. **Categories**: Organize images by category for easier browsing
4. **Display Order**: Use consistent numbering (0, 10, 20, etc.) for easy management
5. **Backups**: The system automatically maintains backups in S3

## Troubleshooting

### Upload Fails
- Check file size (should be under 10MB)
- Verify file format (JPEG, PNG, WebP supported)
- Ensure you have admin access

### Images Don't Appear
- Check the `isPublished` flag (should be 1)
- Verify the display order is set correctly
- Clear browser cache and refresh

### Slow Loading
- Check image file sizes
- Verify S3 connectivity
- Contact support if issues persist

## Integration with Portfolio Display

The uploaded images are automatically available for use throughout your portfolio website. You can reference them by their URL or database ID in your portfolio sections.

### Example Usage

In your portfolio sections, you can display images like:

```tsx
<img 
  src={image.url} 
  alt={image.title}
  title={image.description}
/>
```

The URLs are public and optimized for web delivery through the CDN.

## Support

For technical issues or questions about file storage:
1. Check the logs in the dev server console
2. Verify your admin role in the database
3. Contact Manus support if problems persist
