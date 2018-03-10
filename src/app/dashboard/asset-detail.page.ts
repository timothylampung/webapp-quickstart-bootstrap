import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'qs-asset-detail',
  templateUrl: './asset-detail.page.html',
})
export class AssetDetailPage implements OnInit, OnDestroy {

  asset$: Observable<Asset>;

  // constructor
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  loadAsset(assetNo: string): void {
    console.log('assetNo: ' + assetNo);
    this.asset$ = this.assetService.findAssetByAssetNo(assetNo);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { assetNo: string }) => {
      this.loadAsset(params.assetNo);
    });
  }

  ngOnDestroy(): void {
    // no op
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
