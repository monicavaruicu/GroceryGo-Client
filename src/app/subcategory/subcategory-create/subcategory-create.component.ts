import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CategoryModel } from '../../models/CategoryModel';
import { SubcategoryService } from '../../services/subcategory.service';
import { SaveSubcategoryModel } from '../../models/SaveSubcategoryModel';

@Component({
  selector: 'app-subcategory-create',
  templateUrl: './subcategory-create.component.html',
  styleUrl: './subcategory-create.component.scss'
})
export class SubcategoryCreateComponent {
  categories: CategoryModel[] = [];
  subcategoryName: string;
  selectedCategoryId: number;

  imagePreview: string;
  base64Image: string;

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubcategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
        this.base64Image = e.target.result.split(',')[1];
      };

      reader.readAsDataURL(file);
    }
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((categories: CategoryModel[]) => {
      this.categories = categories;
    });
  }

  submit() {
    var subcategory: SaveSubcategoryModel = {
      name: this.subcategoryName,
      categoryId: this.selectedCategoryId
    }

    this.subCategoryService.addSubcategory(subcategory).subscribe((result) => {
      this.subcategoryName = null;
      this.selectedCategoryId = null;
    });
  }
}
