import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Trash2, Upload, Edit2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminPortfolio() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "portrait" as const,
    description: "",
    displayOrder: 0,
  });

  const { data: images, isLoading, refetch } = trpc.portfolio.list.useQuery();
  const uploadMutation = trpc.upload.image.useMutation();
  const updateMutation = trpc.portfolio.update.useMutation();
  const deleteMutation = trpc.portfolio.delete.useMutation();

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Access denied. Admin only.</p>
      </div>
    );
  }

  const handleOpenDialog = (image?: any) => {
    if (image) {
      setEditingId(image.id);
      setFormData({
        title: image.title,
        category: image.category,
        description: image.description || "",
        displayOrder: image.displayOrder,
      });
      setSelectedFile(null);
    } else {
      setEditingId(null);
      setFormData({
        title: "",
        category: "portrait",
        description: "",
        displayOrder: 0,
      });
      setSelectedFile(null);
    }
    setIsOpen(true);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        // Update existing image
        await updateMutation.mutateAsync({
          id: editingId,
          title: formData.title,
          category: formData.category,
          description: formData.description,
          displayOrder: formData.displayOrder,
        });
        toast.success("Image updated successfully");
      } else {
        // Create new image with file upload
        if (!selectedFile) {
          toast.error("Please select a file");
          return;
        }
        if (!formData.title) {
          toast.error("Please enter a title");
          return;
        }

        await uploadMutation.mutateAsync({
          file: selectedFile,
          title: formData.title,
          category: formData.category,
          description: formData.description,
          displayOrder: formData.displayOrder,
        });
        toast.success("Image uploaded successfully");
      }
      setIsOpen(false);
      refetch();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to save image");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    try {
      await deleteMutation.mutateAsync({ id });
      toast.success("Image deleted successfully");
      refetch();
    } catch (error) {
      toast.error("Failed to delete image");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif font-light">Portfolio Management</h1>
          <Button onClick={() => handleOpenDialog()} className="bg-black text-white">
            <Upload className="w-4 h-4 mr-2" />
            Add Image
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">Loading...</div>
        ) : !images || images.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-gray-600 mb-4">No portfolio images yet</p>
            <Button onClick={() => handleOpenDialog()} variant="outline">
              Upload your first image
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {image.category} • Order: {image.displayOrder}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleOpenDialog(image)}
                      className="flex-1"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(image.id)}
                      className="flex-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Image" : "Add Portfolio Image"}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {!editingId && (
                <div>
                  <Label htmlFor="file">Image File</Label>
                  <Input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="mt-2"
                  />
                  {selectedFile && (
                    <p className="text-sm text-gray-600 mt-2">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>
              )}

              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Image title"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      category: value as any,
                    })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="model_tests">Model Tests</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Image description"
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="displayOrder">Display Order</Label>
                <Input
                  id="displayOrder"
                  type="number"
                  value={formData.displayOrder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      displayOrder: parseInt(e.target.value),
                    })
                  }
                  className="mt-2"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={uploadMutation.isPending || updateMutation.isPending}
                  className="flex-1 bg-black text-white"
                >
                  {editingId ? "Update" : "Upload"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
