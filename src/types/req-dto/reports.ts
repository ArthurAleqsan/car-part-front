export interface IReportsParams {
  accountId?: string;
  id?: number;
  hierarchyIds?: string;
  limit?: string | number;
  dateFrom?: Date | string;
  dateTo?: Date | string;
  currency?: string;
  page?: number;
  offset?: number;
  currencies?: string[];
}

export interface IAccountsTransferParams {
  amount: number;
  currency: string;
  destinationAccountId: number;
  destinationWalletIndex: number;
  sourceAccountId: number;
  sourceWalletIndex: number;
  subType: string;
  notes?: string;
}

export interface ICrossLevelTransferParams {
  accountIds: number[];
  amount: number;
  currency: string;
  subType: string;
  notes?: string;
}

export type IProductsFormula = {
  action: 'bet' | 'win' | 'registration' | 'deposit' | 'withdraw' | 'freeSpin';
  accumulationType: 'percent' | 'increment';
  value: number | string;
  productIds: number[];
};
export type IGamesFormula = {
  action: 'bet' | 'win' | 'registration' | 'deposit' | 'withdraw' | 'freeSpin';
  accumulationType: 'percent' | 'increment';
  value: number | string;
  gameIds: number[];
};

export type FormulaGroups = {
  minPoints?: number | string;
  productsFormula: IProductsFormula[];
  gamesFormula: IGamesFormula[];
};

export type Formula = {
  operatorId: number;
  type: string;
  description?: string;
  formulaGroups: FormulaGroups;
};

export interface IMissionsParams {
  id?: number;
  name?: string;
  page?: number;
  limit?: number;
  order?: number;
  sortBy?: string;
}

export type Prize = {
  type: 'jackpotTicket' | 'tourTicket' | 'freespins' | 'money';
  jackpotId?: number;
  templateId?: number;
  amount?: number;
  currency?: string;
  spinCount?: number;
  duration?: number;
  betLevel?: number;
  gameIds?: any;
};

export type Mission = {
  operatorId?: number;
  title: string;
  description: string;
  shortDescription?: string;
  short_description?: string;
  imgUrl?: string;
  formulaId?: number;
  duration?: number;
  categories: string[];
  type: string;
  trigger: {
    repeatCount: number; // 1+
    points: number;
    immediatelyCompletion: boolean;
  };
  prizes: Prize[];
  isFreespinChain: boolean;
};
