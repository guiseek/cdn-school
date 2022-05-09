export type CommonOperator = '=' | '<' | '>' | '<=' | '>=' | '!=';
export type MongoOperator = '$eq' | '$lt' | '$gt' | '$lte' | '$gte' | '$ne';

export type Operator = CommonOperator | MongoOperator;
