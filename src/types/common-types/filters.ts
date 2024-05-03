export interface IDateFilter {
  dateTo: Date | string;
  dateFrom: Date | string;
}

export type AdvancedTableColInput = {
  checked: boolean;
  filters: string;
};
export type AdvancedTableColEnum = {
  checked: boolean;
  filters: string[];
};
export type AdvancedTableColRange = {
  checked: boolean;
  filters: {
    from: string | any;
    to: number | any;
  };
};

export type AdvancedTableColSpecialRange = {
  checked: boolean;
  filters: {
    from: string | any;
    to: number | any;
    useGlobalDateRange: boolean;
  };
};

export type InputFieldErrors = {
  username: null | string;
  fullName: null | string;
  phoneNumber: null | string;
  accountId: null | string;
  email: null | string;
};

export interface IAdvancedTableCols {
  name: string;
  type?: AdvancedTableColEnum;
  status?: AdvancedTableColEnum;
  amount?: AdvancedTableColRange;
  date?: AdvancedTableColRange;
  subType?: AdvancedTableColEnum;
  username?: AdvancedTableColInput;
  fName_LName?: AdvancedTableColInput;
  fullName?: AdvancedTableColInput;
  phoneNumber?: AdvancedTableColInput;
  balance?: AdvancedTableColRange;
  balanceFPP?: AdvancedTableColRange;
  depositTotal?: AdvancedTableColRange;
  depositCount?: AdvancedTableColRange;
  withdrawTotal?: AdvancedTableColRange;
  withdrawCount?: AdvancedTableColRange;
  bonusTotal?: AdvancedTableColRange;
  bonusCount?: AdvancedTableColRange;
  betTotal?: AdvancedTableColRange;
  betCount?: AdvancedTableColRange;
  winTotal?: AdvancedTableColRange;
  winCount?: AdvancedTableColRange;
  birthDate?: AdvancedTableColSpecialRange;
  dateCreated?: AdvancedTableColSpecialRange;
  hierarchyIds?: AdvancedTableColEnum;
  email?: AdvancedTableColInput;
  accountId?: AdvancedTableColInput;
  productIds?: AdvancedTableColEnum;
}
