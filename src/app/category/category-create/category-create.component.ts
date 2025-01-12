import { Component } from '@angular/core';
import { SaveCategoryModel } from '../../models/SaveCategoryModel';
import { CategoryService } from '../../services/category.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.scss'
})
export class CategoryCreateComponent {
  selectedFile: File;
  imagePreview: string;
  categoryName: string;

  constructor(
    private categoryService: CategoryService,
    private imageService: ImageService
  ){}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  submit(){
    var category : SaveCategoryModel = {
      name: this.categoryName
    }

    this.categoryService.addCategory(category).subscribe((result) => {
      this.categoryName = null;
      
      this.upload(1);
    });
  }

  async upload(itemId: number): Promise<void> {
    if (!this.selectedFile) {
      return;
    }

    try {
      await this.imageService.uploadImage(this.selectedFile, 1, itemId);
    } catch (error) {
    }
  }
}
