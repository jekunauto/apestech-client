import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Field, Option, QueryBuilderConfig, Rule, RuleSet } from './query-builder.interfaces';

@Component({
  selector: 'query-builder-zorro',
  templateUrl: './query-builder-zorro.component.html'
})
export class QueryBuilderZorroComponent implements OnInit, OnChanges {
  public fieldNames: string[];
  @Input() operatorMap: {[key: string]: string[]};
  @Input() typeMap: {[key: string]: string};
  @Input() parentData: RuleSet;
  @Input() data: RuleSet = { condition: 'and', rules: [] };
  @Input() config: QueryBuilderConfig = { fields: {} };

  private defaultEmptyList: any[] = [];
  private operatorsCache: {[key: string]: string[]};
  /*EQ, NE, LIKE, GT, LT, GTE, LTE, AND, OR, IS_MEMBER, IS_NOT_MEMBER, IS_NULL, IS_NOT_NULL*/
  constructor() {
    this.typeMap = {
      string: 'text',
      number: 'number',
      category: 'select',
      date: 'date',
      boolean: 'checkbox'
    };
    this.operatorMap = {
      // string: [{label: '等于', value: 'EQ'}, {label: '不等于', value: 'NE'}, {lalbe: '模糊匹配', value: 'LIKE'}],
      // number: [{label: '等于', value: 'EQ'}, {label: '不等于', value: 'NE'}, {label: '大于', value: 'GT'}, {label: '小于', value: 'LT'},
      //         {label: '大于等于', value: 'GTE'}, {label: '小于等于', value: 'LTE'}],
      // date: [{label: '等于', value: 'EQ'}, {label: '不等于', value: 'NE'}, {label: '大于', value: 'GT'}, {label: '小于', value: 'LT'},
      // {label: '大于等于', value: 'GTE'}, {label: '小于等于', value: 'LTE'}],
      // category: [{label: '等于', value: 'EQ'}, {label: '不等于', value: 'NE'}],
      // boolean: [{label: '等于', value: 'EQ'}, {label: '不等于', value: 'NE'}]

      string: ['EQ', 'NE', 'LIKE'],
      number: ['EQ', 'NE', 'GT', 'GTE', 'LT', 'LTE'],
      category: ['EQ', 'NE'],
      date: ['EQ', 'NE', 'GT', 'GTE', 'LT', 'LTE'],
      boolean: ['EQ']
    };
    this.data.condition = 'and';
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const config = this.config;
    if (typeof config === 'object') {
      this.fieldNames = Object.keys(config.fields);
      this.operatorsCache = {};
    } else {
      throw new Error('config must be a valid object');
    }
  }

  getOperators(field: string): string[] {
    if (this.operatorsCache[field]) {
      return this.operatorsCache[field];
    }
    let operators = this.defaultEmptyList;
    if (this.config.getOperators) {
        operators = this.config.getOperators(field);
    }
    const fieldObject = this.config.fields[field];
    const type = fieldObject.type;
    if (field && this.operatorMap[type]) {
      operators = this.operatorMap[type];
    }
    if (fieldObject.options) {
      operators = operators.concat(['in', 'not in']);
    }
    if (fieldObject.nullable) {
      operators = operators.concat(['is null', 'is not null']);
    }
    // Cache reference to array object, so it won't be computed next time and trigger a rerender.
    this.operatorsCache[field] = operators;
    return operators;
  }

  getInputType(field: string, operator: string): string {
    if (this.config.getInputType) {
        return this.config.getInputType(field, operator);
    }
    const type = this.config.fields[field].type;
    switch (operator) {
      case 'is null':
      case 'is not null':
        return null;  // No displayed component
      case 'in':
      case 'not in':
        return 'multiselect';
      default:
        return this.typeMap[type];
    }
  }

  getOptions(field: string): Option[] {
    if (this.config.getOptions) {
      return this.config.getOptions(field);
    }
    return this.config.fields[field].options || this.defaultEmptyList;
  }

  addRule(parent: RuleSet): void {
    if (this.config.addRule) {
      return this.config.addRule(parent);
    } else {
      const field = this.fieldNames[0];
      const fieldObject = this.config.fields[field];
      parent.rules = parent.rules.concat([
        {
          field: field,
          operator: this.operatorMap[fieldObject.type][0]
        }
      ]);
    }
  }

  removeRule(rule: Rule, parent: RuleSet): void {
    if (this.config.removeRule) {
      this.config.removeRule(rule, parent);
    } else {
      parent.rules = parent.rules.filter((r) => r !== rule);
    }
  }

  addRuleSet(parent: RuleSet): void {
    if (this.config.addRuleSet) {
      this.config.addRuleSet(parent);
    } else {
      parent.rules = parent.rules.concat([{condition: 'and', rules: []}]);
    }
  }

  removeRuleSet(ruleset: RuleSet, parent: RuleSet): void {
    if (this.config.removeRuleSet) {
      this.config.removeRuleSet(ruleset, parent);
    } else {
      parent.rules = parent.rules.filter((r) => r !== ruleset);
    }
  }

  onFieldChange(rule: Rule): void {
    delete rule.value;
    const fieldObject = this.config.fields[rule.field];
    rule.operator = this.operatorMap[fieldObject.type][0];
  }
}
