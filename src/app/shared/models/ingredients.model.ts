export interface FilterDataOptions  {
    id: number;
    name: string;
    type: string;
    allowMultiple: boolean;
    query: string;
    selected: boolean;
}

export interface FilterDataSelectedOptions {
    id: number;
    name: string;
    isNewSmartTag: boolean;
}


export interface FilterDataSelectedData {
    id: number;
    name: string;
    type: string;
    allowMultiple: boolean;
    condition: boolean;
    query: string;
    options: FilterDataSelectedOptions[],
    value: {
        id: number;
    },
    selected: boolean;
}
export interface FilterData {
    id: boolean;
    name: string;
    options: FilterDataOptions[],
    open: boolean;
    selectedFilters: FilterDataSelectedData[]
}


export interface StandardFilterData {
    id: number;
    name: string;
    list?: number[];
    children?: StandardFilterData[]
}