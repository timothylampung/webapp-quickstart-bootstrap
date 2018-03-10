import {AfterViewInit, Component, Input, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observer} from 'rxjs/Observer';


@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
  styles: ['.form-control{width:300px;}']
})
export class DashboardPage implements OnInit, OnDestroy,AfterViewInit {



  assets$: Observable<Asset[]>;
  filteredAssets$: Observable<Asset[]>;
  lockedMessage: string;
  invalidNumber: boolean = false;
  selectedAsset: string = '';
  assets : Asset[];


  // constructor
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef) {
  }


  loadPosts(): void {
    this.assets$ = this.assetService.findAssets();
  }

  viewAsset(asset: Asset): void {
    console.log(JSON.stringify(asset));
    this.router.navigate(['/detail', asset.assetNo]);
  }

  ngOnInit(): void {
    this.loadPosts();
    this.filteredAssets$ = Observable.create((observer: Observer<string>) => observer.next(this.selectedAsset))
      .mergeMap((number: string) => this.assetService.findAssets());

  }

  reload():void{
    this.assets$ = this.assetService.findAssets();
    this.assets$.subscribe(assets=> this.assets = assets);
  }

  ngAfterViewInit(): void {
    const input:any = document.getElementById('typeahead-focus');
    console.log(input);
    const  search$ = Observable.form(input,'keyup')
      .do(()=> console.log(input.value))
      .switchMap(()=>this.assetService.findAssets());


    search$.subscribe(
    );

  }

  public changeLockedMessage() {
    this.lockedMessage = "I am locked!";
  }


  ngOnDestroy(): void {
    // no op
  }

  showAddDialog(): void {
  }
}
