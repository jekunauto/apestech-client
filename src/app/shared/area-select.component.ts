import {ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {getAreasByCity, getCitiesByProvince, getProvinces} from '../utils/area.util';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {Address} from '../domain/address';

@Component({
    selector: 'apes-area-select',
    template: `
        <div class="address-group">
            <div>
                <nz-select
                    style="width: 200px;"
                    nzAllowClear
                    [nzPlaceHolder]="'请选择省份'"
                    [(ngModel)]="_address.province"
                    (nzOpenChange)="onProvinceChange()">
                    <nz-option
                        *ngFor="let p of provinces"
                        [nzLabel]="p"
                        [nzValue]="p"
                        [nzDisabled]="false">
                    </nz-option>
                </nz-select>
            </div>
            <div>
                <nz-select
                    style="width: 200px;"
                    nzAllowClear
                    [nzPlaceHolder]="'请选择城市'"
                    [(ngModel)]="_address.city"
                    (nzOpenChange)="onCityChange()">
                    <nz-option
                        *ngFor="let c of cities$ | async"
                        [nzLabel]="c"
                        [nzValue]="c"
                        [nzDisabled]="false">
                    </nz-option>
                </nz-select>
            </div>
            <div>
                <nz-select
                    style="width: 200px;"
                    nzAllowClear
                    [nzPlaceHolder]="'请选择区县'"
                    [(ngModel)]="_address.district"
                    (nzOpenChange)="onDistrictChange()">
                    <nz-option
                        *ngFor="let d of districts$ | async"
                        [nzLabel]="d"
                        [nzValue]="d"
                        [nzDisabled]="false">
                    </nz-option>
                </nz-select>
            </div>
            <div class="street">
                <input placeholder="街道地址" [(ngModel)]="_address.street" (change)="onStreetChange()">
            </div>
        </div>
    `,
    styles: [`
        .street {
            flex: 1 1 100%;
        }

        .address-group {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
        }
    `],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AreaSelectComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => AreaSelectComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {
    _address: Address = {
        province: '',
        city: '',
        district: '',
        street: ''
    };
    _province = new Subject<string>();
    _city = new Subject<string>();
    _district = new Subject<string>();
    _street = new Subject<string>();
    cities$: Observable<string[]>;
    districts$: Observable<string[]>;
    provinces = getProvinces();

    private _sub: Subscription;
    private propagateChange = (_: any) => {
    };

    constructor() {
    }

    ngOnInit() {

        const province$ = this._province.asObservable().startWith('');
        const city$ = this._city.asObservable().startWith('');
        const district$ = this._district.asObservable().startWith('');
        const street$ = this._street.asObservable().startWith('');
        const val$ = Observable.combineLatest([province$, city$, district$, street$], (_p, _c, _d, _s) => {
            return {
                province: _p,
                city: _c,
                district: _d,
                street: _s
            };
        });
        this._sub = val$.subscribe(v => {
            this.propagateChange(v);
        });

        // 根据省份的选择得到城市列表
        this.cities$ = province$.mergeMap(province => Observable.of(getCitiesByProvince(province)));
        // 根据省份和城市的选择得到地区列表
        this.districts$ = Observable
            .combineLatest(province$, city$, (p, c) => ({province: p, city: c}))
            .mergeMap(a => Observable.of(getAreasByCity(a.province, a.city)));

    }

    ngOnDestroy() {
        if (this._sub) {
            this._sub.unsubscribe();
        }
    }

    // 验证表单，验证结果正确返回 null 否则返回一个验证结果对象
    validate(c: FormControl): { [key: string]: any } {
        const val = c.value;
        if (!val) {
            return null;
        }
        if (val.province && val.city && val.district && val.street && val.street.length >= 4) {
            return null;
        }
        return {
            addressNotValid: true
        };
    }

    // 设置初始值
    public writeValue(obj: Address) {
        if (obj) {
            this._address = obj;
            if (this._address.province) {
                this._province.next(this._address.province);
            }
            if (this._address.city) {
                this._city.next(this._address.city);
            }
            if (this._address.district) {
                this._district.next(this._address.district);
            }
            if (this._address.street) {
                this._street.next(this._address.street);
            }
        }
    }

    // 当表单控件值改变时，函数 fn 会被调用
    // 这也是我们把变化 emit 回表单的机制
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    // 这里没有使用，用于注册 touched 状态
    public registerOnTouched() {
    }

    onProvinceChange() {
        this._province.next(this._address.province);
        this._address.city = '';
        this._address.district = '';
    }

    onCityChange() {
        this._city.next(this._address.city);
        this._address.district = '';
    }

    onDistrictChange() {
        this._district.next(this._address.district);
    }

    onStreetChange() {
        this._street.next(this._address.street);
    }
}
