import {Pipe, PipeTransform} from '@angular/core';
import {AssetCategory} from './asset-category.enum';

@Pipe({name: 'assetCategoryPipe'})
export class AssetCategoryPipe implements PipeTransform {

  transform(value: AssetCategory): any {
    if (!value) {
      return value;
    }
    switch (AssetCategory[value.toString()]) {
      case AssetCategory.COMPUTER : {
        return 'KOMPUTER';
      }
      case AssetCategory.FURNITURE : {
        return 'PERABUT';
      }
      case AssetCategory.VEHICLE : {
        return 'KENDERAAN';
      }
      default: {
        return value;
      }
    }
  }
}
