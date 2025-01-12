import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class ImageService {
    
    constructor(private http: HttpClient) {}

    async uploadImage(file: File, imageTypeId: number, itemId: number): Promise<{ fileName: string }> {
        const uploadUrl = `${environment.apiUrl}/image/upload?imageTypeId=${imageTypeId}&itemId=${itemId}`;
    
        const formData = new FormData();
        formData.append('file', file, file.name);
    
        try {
            const response = await this.http.post<any>(uploadUrl, formData)
                .toPromise();
            return { fileName: response.fileName };
        } catch (error) {
            throw error;
        }
    } 
}